import type { Route } from "./+types/home"
import { Header } from "@/components/Header"
import { SearchForm } from "@/components/SearchForm"
import { TrainBox } from "@/components/TrainBox"
import { Footer } from "@/components/Footer"
import { Fragment, useState } from "react"
import { random } from "~/utils/random"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ticket Booking System" }]
}

export default function Home() {
  const [form, setForm] = useState({})
  const [counter, setCounter] = useState(0)
  const [searched, setSearched] = useState(false)

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Header />

      <div className="flex mt-8 px-8 space-x-8">
        <SearchForm
          inline={searched}
          onSubmit={(form: any) => {
            setForm(form)
            setCounter(random(10, 3))
            setSearched(true)
          }}
        />
        {!searched && (
          <div className="flex-1">
            <img
              className="w-full rounded-md"
              src="/images/train-illustration-for-train-1.jpg"
            />
          </div>
        )}
      </div>

      {searched && (
        <div className="px-8 space-y-8 mt-8">
          {Array.from({ length: counter }).map((_, i) => (
            <TrainBox
              key={i}
              open={i === 0}
              name={`Train ${i + 1} (${random(799, 700)})`}
              passengerData={form}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  )
}
