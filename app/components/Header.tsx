export const Header = () => {
  return (
    <header className="shadow bg-white px-4 py-2">
      <div className="flex items-center space-x-4">
        <img
          className="h-24"
          src="/images/railwaybd.png"
          alt="Bangladesh Railway"
        />
        <div className="font-bold text-sky-500 text-2xl">
          Bangladesh Railway
        </div>
      </div>
    </header>
  );
};
