import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ticket Booking System" },
  ];
}

export default function Home() {
  return (
    <div className="p-4">
     hello
    </div>
  );
}
