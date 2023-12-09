import { FaRegMoon, FaSun } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "../Styles/header.css";
import { useState } from "react";

const AppLayout = () => {
  const [dark,setDark] = useState(false);
  return (
    <div>
      <header className='header light'>
        <h1 className="title">
          Where in the world?
        </h1>
        <div className="mode" onClick={() => setDark((d) => !d)}>
          {dark ? <FaSun /> : <FaRegMoon />}
          <span className="mode__type">
            {!dark ? 'Dark Mode': 'Light Mode'}
          </span>
        </div>
      </header>
      <Outlet />

    </div>
  )
}

export default AppLayout;