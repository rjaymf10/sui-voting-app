const Navbar = () => {
  const currentPage: string = "/wallet";

  return (
    <nav className="p-4 bg-gray-200 shadow-md dark:bg-gray-800">
      <ul className="flex space-x-6">
        <li>
          <button className={`px-4 py-2 rounded ${currentPage === "/" ? "bg-blue-400 underline" : ""}`}>
            Home
          </button>
        </li>
        <li>
          <button className={`px-4 py-2 rounded ${currentPage === "/wallet" ? "bg-blue-400 underline" : ""}`}>
            Wallet
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;