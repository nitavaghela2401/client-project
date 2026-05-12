function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-8 px-8">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            Nita Agency
          </h2>

          <p className="text-slate-400 mt-2">
            Digital Marketing & Website Development Agency
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">

          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            Services
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>

        </div>

      </div>

      <div className="text-center text-slate-500 mt-8">
        © 2026 Nita Agency. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;