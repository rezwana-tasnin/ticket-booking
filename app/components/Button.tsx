export const Button = ({ children, onClick, className }: any = {}) => {
  return (
    <button
      onClick={onClick}
      className={
        "bg-sky-300 text-sky-900 px-4 py-2 rounded-lg font-semibold hover:bg-sky-500 cursor-pointer" +
        ` ${className}`
      }
    >
      {children || "Click me"}
    </button>
  )
}
