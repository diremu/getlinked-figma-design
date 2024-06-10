export default function Navbar() {
  return (
    <div className="border-b-[0.5px] border-b-gray-800 pt-10 pb-3">
      <nav className="flex justify-around">
        <h2 className="text-2xl font-bold">
          get<span className="text-[#d434fe]">linked</span>
        </h2>
        <ul className="flex pt-2">
          <li className="pl-6 text-xs">Timeline</li>
          <li className="pl-6 text-xs">Overview</li>
          <li className="pl-6 text-xs">FAQs</li>
          <li className="pl-6 text-xs">Contact</li>
        </ul>
        <button
          type="button"
          className="register px-6 py-2 rounded text-[0.9rem]"
        >
          Register
        </button>
      </nav>
    </div>
  );
}
