import stations from "@/data/stations.json"
import { Button } from "@/components/Button.tsx"
import { useCallback, useState } from "react"
import { cn } from "~/utils/cn"
import { classes } from "~/consts"

export const SearchForm = ({ inline, onSubmit }: any) => {
  //
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    coach: "",
  })

  const onChange = useCallback((name: string) => {
    return (e: any) => {
      setForm((v) => ({
        ...v,
        [name]: e.target.value,
      }))
    }
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit?.(form)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "grid bg-white p-8 rounded-lg gap-8 flex-1",
        inline ? "grid-cols-7" : "grid-cols-2",
      )}
    >
      {/* <pre>
        <code>{JSON.stringify(form, null, 1)}</code>
      </pre> */}
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={onChange("name")}
          placeholder="Enter your name"
          className="border p-2 rounded-lg block w-full"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={onChange("phone")}
          placeholder="Enter your phone number"
          className="border p-2 rounded-lg block w-full"
        />
      </div>
      <div>
        <label htmlFor="From" className="block">
          From
        </label>
        <select
          id="From"
          name="From"
          value={form.from}
          onChange={onChange("from")}
          required
          className="border p-2 rounded-lg block w-full"
        >
          <option disabled value="">
            From Station
          </option>
          {stations.map((station) => {
            return (
              <option key={station.id} value={station.name}>
                {station.name}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor="To" className="block">
          To
        </label>
        <select
          id="To"
          name="To"
          value={form.to}
          onChange={onChange("to")}
          required
          className="border p-2 rounded-lg  block w-full"
        >
          <option disabled value="">
            To Station
          </option>
          {stations.map((station) => {
            return (
              <option key={station.id} value={station.name}>
                {station.name}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor="Date of Journey">Date of Journey</label>
        <input
          type="date"
          id="Date of Journey"
          name="Date of Journey"
          value={form.date}
          onChange={onChange("date")}
          required
          className="border p-2 rounded-lg  block w-full"
          placeholder="Pick a Date"
        />
      </div>
      <div>
        <label htmlFor="Choose Class">Choose Class </label>
        <select
          id="Choose Class"
          name="Choose Class"
          value={form.coach}
          onChange={onChange("coach")}
          required
          className="border p-2 rounded-lg block w-full"
        >
          <option disabled value="">
            Choose a Class
          </option>
          {classes.map((cls: string) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" className={!inline ? "col-span-2" : ""}>
        Search Trains
      </Button>
    </form>
  )
}
