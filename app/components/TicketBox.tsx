import { cn } from "~/utils/cn"

export const TicketBox = ({ name, price, available, onClick }: any) => {
  return (
    <div
      className={cn(
        " border rounded-lg",
        available > 0
          ? "border-sky-200 bg-sky-100"
          : "border-red-200 bg-red-100",
      )}
    >
      <div className=" mb-4 p-4">
        <div className="font-bold">{name}</div>
        <div className="text-sky-500 font-bold">৳{price}</div>
      </div>
      <div
        className={cn(
          "rounded-lg p-4",
          available > 0 ? "bg-sky-200" : "bg-red-200",
        )}
      >
        <div className="text-sm">Available Tickets </div>
        <div className="text-sm">(Counter + Online)</div>
        <div
          className={cn(
            "font-bold mt-2",
            available > 0 ? "text-sky-500" : "text-red-500",
          )}
        >
          {available}
        </div>
        <button
          onClick={onClick}
          className={cn(
            "p-2 mt-2 rounded-full w-full font-bold text-sm text-white",
            available > 0 ? "bg-sky-500" : "bg-red-500",
          )}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  )
}
