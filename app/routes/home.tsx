import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "@/components/Button.tsx";
import stations from "@/data/stations.json";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ticket Booking System" }];
}

const TicketBox = () => {
  return (
    <div className=" border border-sky-200 rounded-lg bg-sky-100 ">
      <div className=" mb-4 p-4">
        <div className="font-bold">S_CHAIR</div>
        <div className="text-sky-500 font-bold">৳245</div>
      </div>
      <div className="bg-sky-200 rounded-lg p-4">
        <div className="text-sm">Available Tickets </div>
        <div className="text-sm">(Counter + Online)</div>
        <div className="text-sky-500 font-bold mt-2">75</div>
        <button className="p-2 mt-2 rounded-full bg-sky-500 w-full font-bold text-sm text-white">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};
const TrainBox = ({ name }) => {
  return (
    <details className="bg-white rounded-lg mt-4">
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
          <TicketBox />
          <TicketBox />
          <TicketBox />
          <TicketBox />
        </div>
      </div>
    </details>
  );
};

export default function Home() {
  return (
    <div className="p-4 bg-neutral-100 min-h-screen">
      <form className="grid grid-cols-2  bg-white p-4 rounded-lg gap-8 max-w-lg">
        <div>
          <label for="From" className="block">
            From
          </label>
          <select
            id="From"
            name="From"
            value=""
            className="border p-2 rounded-lg block w-full"
          >
            <option disabled value="">
              From Station
            </option>
            {stations.map((station) => {
              return <option value={station.id}>{station.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label for="To" className="block">
            To
          </label>
          <select
            id="To"
            name="To"
            value=""
            className="border p-2 rounded-lg  block w-full"
          >
            <option disabled value="">
              To Station
            </option>
            {stations.map((station) => {
              return <option value={station.id}>{station.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label for="Date of Journey">Date of Journey</label>
          <input
            type="date"
            id="Date of Journey"
            name="Date of Journey"
            class="date-input"
            value=""
            className="border p-2 rounded-lg  block w-full"
            placeholder="Pick a Date"
          />
        </div>
        <div>
          <label for="Choose Class">Choose Class </label>
          <select
            id="Choose Class"
            name="Choose Class"
            value=""
            className="border p-2 rounded-lg block w-full"
          >
            <option disabled value="">
              Choose a Class
            </option>
            <option value="option1">AC-B</option>
            <option value="option2">F-CHAIR</option>
            <option value="option2">S-CHAIR</option>
            <option value="option2">AC-CHAIR</option>
            <option value="option2">AC-S</option>
            <option value="option2">SHOVON</option>
            <option value="option2">SNIGDHA-S</option>
            <option value="option2">F-SEAT</option>
          </select>
        </div>
        <Button className="col-span-2">Search Trains</Button>
      </form>

      <div>
        <TrainBox name="JAMALPUR EXPRESS (799)" />
        <TrainBox name="AGHNIBINA EXPRESS (735)" />
        <TrainBox name="JAMUNA EXPRESS (745)" />
      </div>
      <div className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6">
        {/* Left side - Seat layout */}
        <div className="w-full md:w-2/3">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Select Coach
          </h2>

          <div className="flex items-center gap-4 mb-3">
            <span className="flex items-center gap-1 text-gray-600 text-sm">
              <span className="w-4 h-4 bg-gray-200 rounded"></span> Available
            </span>
            <span className="flex items-center gap-1 text-gray-600 text-sm">
              <span className="w-4 h-4 bg-green-400 rounded"></span> Selected
            </span>
            <span className="flex items-center gap-1 text-gray-600 text-sm">
              <span className="w-4 h-4 bg-orange-500 rounded"></span> Booked
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
            ].map((seat, i) => (
              <div
                key={i}
                className={`p-2 text-sm font-medium text-center rounded cursor-pointer border ${
                  i < 20
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-green-400"
                }`}
              >
                {seat}
              </div>
            ))}
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
              Class: <span className="font-semibold">Shovan</span>
            </p>
            <p className="text-sm text-gray-700">
              Seats: <span className="font-semibold">0</span>
            </p>
            <p className="text-sm text-gray-700">
              Fare: <span className="font-semibold">৳ 0</span>
            </p>
          </div>

          <div className="border-t border-gray-200 my-3"></div>

          <div className="text-right text-gray-800 font-semibold mb-4">
            Total: ৳ 0
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Boarding Station</label>
            <select className="w-full mt-1 p-2 border rounded-lg text-sm">
              <option>Kamalapur Station (11:30 AM) 25 Oct 2025</option>
            </select>
          </div>

          <button className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition">
            CONTINUE PURCHASE
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white border-2 border-green-600 rounded-lg p-6 shadow-md">
        {/* Header */}
        <div className="text-center mb-4">
          <img
            src="/images/railwaybd.png"
            alt="Bangladesh Railway"
            className="w-32 mx-auto mb-2"
          />
          <h1 className="text-xl font-bold text-green-700">
            BANGLADESH RAILWAY
          </h1>
          <p className="text-sm text-gray-600">বাংলাদেশ রেলওয়ে</p>
          <p className="text-xs text-gray-500 mt-2">
            Your e-ticket booking was successful. Please carry your NID or Photo
            ID card during travel.
          </p>
        </div>

        {/* Journey Info */}
        <div className="border border-green-600 rounded-md mb-4">
          <div className="bg-green-600 text-white font-semibold text-sm px-3 py-1">
            Journey Information (যাত্রার তথ্য)
          </div>
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Issue Date & Time</td>
                <td className="p-2">11-08-2022 09:41</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Journey Date & Time</td>
                <td className="p-2">13-08-2022 10:30</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Train Name & Number</td>
                <td className="p-2">JAMALPUR EXPRESS (799)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">From Station</td>
                <td className="p-2">Dhaka</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">To Station</td>
                <td className="p-2">Tarakandi</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Class Name</td>
                <td className="p-2">S_CHAIR</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Coach Name / Seat(s)</td>
                <td className="p-2">SCHA-45, SCHA-46</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">No. of Adult Passenger(s)</td>
                <td className="p-2">2</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">No. of Child Passenger(s)</td>
                <td className="p-2">0</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Fare</td>
                <td className="p-2">BDT 350.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">VAT</td>
                <td className="p-2">BDT 0.00</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Total Fare</td>
                <td className="p-2 font-bold text-green-700">BDT 390.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ticket Printing Info */}
        <div className="border border-green-600 rounded-md mb-4">
          <div className="bg-green-600 text-white font-semibold text-sm px-3 py-1">
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
                <td className="p-2">01568015679</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">PNR Number</td>
                <td className="p-2">62F47A65B548C2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Passenger Info */}
        <div className="border border-green-600 rounded-md mb-4">
          <div className="bg-green-600 text-white font-semibold text-sm px-3 py-1">
            Passenger Information (যাত্রীর তথ্য)
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Passenger Name</td>
                <td className="p-2">Rezwana Tasnin</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">
                  National ID / Birth Certificate
                </td>
                <td className="p-2">9121319993</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Mobile Number</td>
                <td className="p-2">01568015679</td>
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
          <p className="mt-2 font-semibold text-center text-green-700">
            Wishing you a pleasant and safe journey.
            <br />
            Bangladesh Railway
          </p>
        </div>
      </div>
    </div>
  );
}
