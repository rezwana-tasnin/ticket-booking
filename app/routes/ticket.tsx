import type { Route } from "./+types/ticket"
import { TicketPDF } from "@/components/TicketPDF"
import { Footer } from "@/components/Footer"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [{ title: "E-Ticket - Bangladesh Railway" }]
}

export default function Ticket() {
  const [searchParams] = useSearchParams()
  const [bookingData, setBookingData] = useState<any>(null)
  const [passengerData, setPassengerData] = useState({
    name: "",
    nid: "",
    mobile: "",
    email: "",
  })
  const [isFormComplete, setIsFormComplete] = useState(false)

  useEffect(() => {
    // Get booking data from URL params
    const data = searchParams.get("data")
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data))
        setBookingData(parsedData)
      } catch (error) {
        console.error("Error parsing booking data:", error)
      }
    }
  }, [searchParams])

  const handleInputChange = (field: string, value: string) => {
    setPassengerData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    if (passengerData.name && passengerData.nid && passengerData.mobile) {
      setIsFormComplete(true)
    }
  }

  const downloadPDF = () => {
    // Create a printable version of the ticket
    const printContent = document.getElementById("ticket-content")
    if (printContent) {
      const printWindow = window.open("", "_blank")
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>E-Ticket - Bangladesh Railway</title>
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  font-family: Arial, sans-serif; 
                  background: white;
                }
                @media print {
                  body { margin: 0; padding: 0; }
                  .no-print { display: none; }
                  @page { margin: 0.5in; }
                }
                .ticket-container {
                  max-width: 800px;
                  margin: 0 auto;
                  background: white;
                  border: 2px solid #0284c7;
                  border-radius: 8px;
                  padding: 24px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                  text-align: center;
                  margin-bottom: 16px;
                }
                .header img {
                  width: 128px;
                  margin-bottom: 8px;
                }
                .header h1 {
                  font-size: 20px;
                  font-weight: bold;
                  color: #0284c7;
                  margin: 0;
                }
                .header p {
                  font-size: 14px;
                  color: #6b7280;
                  margin: 0;
                }
                .header .notice {
                  font-size: 12px;
                  color: #6b7280;
                  margin-top: 8px;
                }
                .section {
                  border: 1px solid #0284c7;
                  border-radius: 4px;
                  margin-bottom: 16px;
                }
                .section-header {
                  background: #0284c7;
                  color: white;
                  font-weight: 600;
                  font-size: 14px;
                  padding: 8px 12px;
                }
                .section-content table {
                  width: 100%;
                  font-size: 14px;
                  border-collapse: collapse;
                }
                .section-content td {
                  padding: 8px;
                  border-bottom: 1px solid #e5e7eb;
                }
                .section-content td:first-child {
                  font-weight: 500;
                }
                .total-fare {
                  font-weight: bold;
                  color: #0284c7;
                }
                .footer {
                  font-size: 12px;
                  color: #6b7280;
                  margin-top: 16px;
                }
                .footer p {
                  margin: 4px 0;
                }
                .footer .center {
                  text-align: center;
                  font-weight: 600;
                  color: #1d4ed8;
                }
              </style>
            </head>
            <body>
              <div class="ticket-container">
                ${printContent.innerHTML}
              </div>
            </body>
          </html>
        `)

        printWindow.document.close()

        // Wait for content to load then trigger print
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 500)
      }
    }
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            No Booking Data Found
          </h1>
          <p className="text-gray-600">
            Please go back and complete your booking.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isFormComplete ? (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-2xl font-bold text-sky-700 mb-6 text-center">
              Complete Your Booking Information
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={passengerData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  National ID Number *
                </label>
                <input
                  type="text"
                  value={passengerData.nid}
                  onChange={(e) => handleInputChange("nid", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your NID number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={passengerData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={passengerData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your email (optional)"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSubmit}
                disabled={
                  !passengerData.name ||
                  !passengerData.nid ||
                  !passengerData.mobile
                }
                className={`px-8 py-3 rounded-lg font-medium text-white transition ${
                  passengerData.name &&
                  passengerData.nid &&
                  passengerData.mobile
                    ? "bg-sky-600 hover:bg-sky-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Generate E-Ticket
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-sky-700">
                  Your E-Ticket
                </h1>
                <div className="space-x-4">
                  <button
                    onClick={downloadPDF}
                    className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                  >
                    Print Ticket
                  </button>
                </div>
              </div>

              <div id="ticket-content">
                <TicketPDF
                  bookingData={{
                    ...bookingData,
                    passengerName: passengerData.name,
                    nidNumber: passengerData.nid,
                    mobileNumber: passengerData.mobile,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
