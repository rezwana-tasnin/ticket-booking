import { TicketBox } from "@/components/TicketBox"
import { useState, useRef } from "react"
import { classes } from "~/consts"
import { random } from "~/utils/random"
import { useNavigate } from "react-router"

export const TrainBox = ({ open, name }: any) => {
  const [expanded, setExpanded] = useState(false)
  const [counter, setCounter] = useState(random(8, 3))
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [selectedClass, setSelectedClass] = useState<string>("")
  const [selectedPrice, setSelectedPrice] = useState<number>(0)
  const seatSelectionRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  return (
    <details open={open} className="bg-white rounded-lg">
      <summary>
        <div className="bg-white rounded-lg p-4 text-sky-500 block cursor-pointer font-bold ">
          {name}
          <div className="text-sm text-gray-500">
            0+ users are trying to book ticket(s)
          </div>
        </div>
      </summary>
      <div className="px-4">
        <div className="mt-4 flex py-4 gap-8 border-t border-neutral-200">
          <div>
            <div className="font-bold">25 OCT, 10:00 AM</div>
            <div>Dhaka</div>
          </div>
          <div className="flex-1 py-2">
            <div className="flex items-center">
              <div className="h-0.5 flex-1 bg-neutral-200"></div>
              <div className="border-2 border-neutral-200 rounded h-4 w-4 "></div>
              <div className="h-0.5 flex-1 bg-neutral-200"></div>
            </div>
            <div className="text-center text-sm">05h 21m</div>
          </div>
          <div>
            <div className="font-bold">25 OCT, 03:21 PM</div>
            <div>Sarishabari</div>
          </div>
        </div>
        <div className="flex py-4 gap-4 border-t border-neutral-200">
          {classes.map((cls: string) => (
            <TicketBox
              key={cls}
              name={cls}
              price={random(500, 200)}
              //   available={0}
              available={random(10, 0)}
              onClick={() => {
                setExpanded(true)
                setSelectedClass(cls)
                setSelectedPrice(random(500, 200))

                // Smooth scroll to seat selection after a short delay
                setTimeout(() => {
                  if (seatSelectionRef.current) {
                    seatSelectionRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }, 100)
              }}
            />
          ))}
        </div>

        {expanded && (
          <div
            ref={seatSelectionRef}
            className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6"
          >
            {/* Left side - Seat layout */}
            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                Select Coach
              </h2>

              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1 text-gray-600 text-sm">
                  <span className="w-4 h-4 bg-gray-200 rounded"></span>{" "}
                  Available
                </span>
                <span className="flex items-center gap-1 text-gray-600 text-sm">
                  <span className="w-4 h-4 bg-sky-400 rounded"></span> Selected
                </span>
                <span className="flex items-center gap-1 text-gray-600 text-sm">
                  <span className="w-4 h-4 bg-sky-500 rounded"></span> Booked
                </span>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {[
                  "KA-1",
                  "KA-2",
                  "KA-3",
                  "KA-4",
                  "KA-5",
                  "KA-6",
                  "KA-7",
                  "KA-8",
                  "KA-9",
                  "KA-10",
                  "KA-11",
                  "KA-12",
                  "KA-13",
                  "KA-14",
                  "KA-15",
                  "KA-16",
                  "KA-17",
                  "KA-18",
                  "KA-19",
                  "KA-20",
                  "KA-21",
                  "KA-22",
                  "KA-23",
                  "KA-24",
                  "KA-25",
                  "KA-26",
                  "KA-27",
                  "KA-28",
                  "KA-29",
                  "KA-30",
                  "KA-31",
                  "KA-32",
                  "KA-33",
                  "KA-34",
                  "KA-35",
                  "KA-36",
                  "KA-37",
                  "KA-38",
                  "KA-39",
                  "KA-40",
                  "KA-41",
                  "KA-42",
                  "KA-43",
                  "KA-44",
                  "KA-45",
                  "KA-46",
                  "KA-47",
                  "KA-48",
                  "KA-49",
                  "KA-50",
                  "KA-51",
                  "KA-52",
                  "KA-53",
                  "KA-54",
                  "KA-55",
                  "KA-56",
                ].map((seat, i) => {
                  const isBooked = i < 20
                  const isSelected = selectedSeats.includes(seat)

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        if (!isBooked) {
                          if (isSelected) {
                            setSelectedSeats(
                              selectedSeats.filter((s) => s !== seat),
                            )
                          } else {
                            setSelectedSeats([...selectedSeats, seat])
                          }
                        }
                      }}
                      className={`p-2 text-sm font-medium text-center rounded cursor-pointer border ${
                        isBooked
                          ? "bg-sky-500 text-white cursor-not-allowed"
                          : isSelected
                            ? "bg-sky-400 text-white"
                            : "bg-gray-100 hover:bg-sky-400"
                      }`}
                    >
                      {seat}
                    </div>
                  )
                })}
              </div>

              <p className="mt-4 text-sm text-gray-500">COACH: KA</p>
            </div>

            {/* Right side - Seat details */}
            <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-xl border">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Seat Details
              </h2>

              <div className="mb-4">
                <p className="text-sm text-gray-700">
                  Class: <span className="font-semibold">{selectedClass}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Seats:{" "}
                  <span className="font-semibold">{selectedSeats.length}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Fare per seat:{" "}
                  <span className="font-semibold">৳ {selectedPrice}</span>
                </p>
                {selectedSeats.length > 0 && (
                  <p className="text-sm text-gray-700">
                    Selected seats:{" "}
                    <span className="font-semibold">
                      {selectedSeats.join(", ")}
                    </span>
                  </p>
                )}
              </div>

              <div className="border-t border-gray-200 my-3"></div>

              <div className="text-right text-gray-800 font-semibold mb-4">
                Total: ৳ {selectedSeats.length * selectedPrice}
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-700">
                  Boarding Station
                </label>
                <select className="w-full mt-1 p-2 border rounded-lg text-sm">
                  <option>Kamalapur Station (11:30 AM) 25 Oct 2025</option>
                </select>
              </div>

              <button
                onClick={() => {
                  if (selectedSeats.length > 0) {
                    const bookingInfo = {
                      trainName: name,
                      selectedClass,
                      selectedSeats,
                      farePerSeat: selectedPrice,
                      totalFare: selectedSeats.length * selectedPrice,
                      journeyDate: "25 OCT, 10:00 AM",
                      fromStation: "Dhaka",
                      toStation: "Sarishabari",
                      arrivalTime: "25 OCT, 03:21 PM",
                      duration: "05h 21m",
                      pnrNumber: "62F47A65B548C2",
                      issueDateTime: "11-08-2022 09:41",
                      journeyDateTime: "13-08-2022 10:30",
                      mobileNumber: "01568015679",
                      passengerName: "Rezwana Tasnin",
                      nidNumber: "9121319993",
                    }

                    // Navigate to ticket page with booking data
                    const encodedData = encodeURIComponent(
                      JSON.stringify(bookingInfo),
                    )
                    navigate(`/ticket?data=${encodedData}`)
                  }
                }}
                disabled={selectedSeats.length === 0}
                className={`w-full py-2 rounded-lg font-medium transition ${
                  selectedSeats.length > 0
                    ? "bg-sky-700 text-white hover:bg-sky-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                CONTINUE PURCHASE
              </button>
            </div>
          </div>
        )}
      </div>
    </details>
  )
}
