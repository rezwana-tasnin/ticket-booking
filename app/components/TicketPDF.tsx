export const TicketPDF = ({ bookingData }: { bookingData?: any }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white border-2 border-sky-600 rounded-lg p-6 shadow-md">
      {/* Header */}
      <div className="text-center mb-4">
        <img
          src="/images/railwaybd.png"
          alt="Bangladesh Railway"
          className="w-32 mx-auto mb-2"
        />
        <h1 className="text-xl font-bold text-sky-700">BANGLADESH RAILWAY</h1>
        <p className="text-sm text-gray-600">বাংলাদেশ রেলওয়ে</p>
        <p className="text-xs text-gray-500 mt-2">
          Your e-ticket booking was successful. Please carry your NID or Photo
          ID card during travel.
        </p>
      </div>

      {/* Journey Info */}
      <div className="border border-sky-600 rounded-md mb-4">
        <div className="bg-sky-600 text-white font-semibold text-sm px-3 py-1">
          Journey Information (যাত্রার তথ্য)
        </div>
        <table className="w-full text-sm border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Issue Date & Time</td>
              <td className="p-2">
                {bookingData?.issueDateTime || "11-08-2022 09:41"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Journey Date & Time</td>
              <td className="p-2">
                {bookingData?.journeyDateTime || "13-08-2022 10:30"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Train Name & Number</td>
              <td className="p-2">
                {bookingData?.trainName || "JAMALPUR EXPRESS (799)"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">From Station</td>
              <td className="p-2">{bookingData?.fromStation || "Dhaka"}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">To Station</td>
              <td className="p-2">{bookingData?.toStation || "Tarakandi"}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Class Name</td>
              <td className="p-2">{bookingData?.selectedClass || "S_CHAIR"}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Coach Name / Seat(s)</td>
              <td className="p-2">
                {bookingData?.selectedSeats?.join(", ") || "SCHA-45, SCHA-46"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">No. of Adult Passenger(s)</td>
              <td className="p-2">{bookingData?.selectedSeats?.length || 2}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">No. of Child Passenger(s)</td>
              <td className="p-2">0</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Fare</td>
              <td className="p-2">BDT {bookingData?.totalFare || 350}.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">VAT</td>
              <td className="p-2">BDT 0.00</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">Total Fare</td>
              <td className="p-2 font-bold text-sky-700">
                BDT {bookingData?.totalFare || 390}.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ticket Printing Info */}
      <div className="border border-sky-600 rounded-md mb-4">
        <div className="bg-sky-600 text-white font-semibold text-sm px-3 py-1">
          Ticket Printing Information (টিকিট মুদ্রণের তথ্য)
        </div>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Print Time</td>
              <td className="p-2">13-08-2022 10:25</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Mobile Number</td>
              <td className="p-2">
                {bookingData?.mobileNumber || "01568015679"}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-medium">PNR Number</td>
              <td className="p-2">
                {bookingData?.pnrNumber || "62F47A65B548C2"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Passenger Info */}
      <div className="border border-sky-600 rounded-md mb-4">
        <div className="bg-sky-600 text-white font-semibold text-sm px-3 py-1">
          Passenger Information (যাত্রীর তথ্য)
        </div>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Passenger Name</td>
              <td className="p-2">
                {bookingData?.passengerName || "Rezwana Tasnin"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">
                National ID / Birth Certificate
              </td>
              <td className="p-2">{bookingData?.nidNumber || "9121319993"}</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">Mobile Number</td>
              <td className="p-2">
                {bookingData?.mobileNumber || "01568015679"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-600 mt-4">
        <p>
          Please keep your Mobile No & PNR combination safe. Do not share it
          with anyone. Bangladesh Railway will not be responsible for misuse.
        </p>
        <p className="mt-2 font-semibold text-center text-sky-700">
          Wishing you a pleasant and safe journey.
          <br />
          Bangladesh Railway
        </p>
      </div>
    </div>
  )
}
