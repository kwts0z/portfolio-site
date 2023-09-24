function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 bg-slate-950">
      <div className="items-center">
        <h1 className="ml-4 text-3xl cursor-pointer hover:text-4xl duration-100">
          <span className="text-indigo-700 font-bold">&lt;</span>
          <span className="text-white font-bold">YASI0</span>
          <span className="text-indigo-700 font-bold">/&gt;</span>
        </h1>
      </div>
      <li className="flex text-slate-400 font-bold space-x-4 mr-4 text-2xl">
        <ul className="text-white hover:text-slate-100">Start<span className="text-slate-600 font-bold">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Work<span className="text-slate-600 font-bold">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Lab<span className="text-slate-600 font-bold">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">About<span className="text-slate-600 font-bold">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Contact<span className="text-slate-600 font-bold">/&gt;</span></ul>
      </li>
    </div>
  );
}

export default Navbar;
