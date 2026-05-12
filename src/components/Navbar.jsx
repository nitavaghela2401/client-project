function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Nita Agency
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-400">
          Home
        </a>

        <a href="#" className="hover:text-blue-400">
          About
        </a>

        <a href="#" className="hover:text-blue-400">
          Services
        </a>

        <a href="#" className="hover:text-blue-400">
          Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;