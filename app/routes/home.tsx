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
    </div>
  );
}
