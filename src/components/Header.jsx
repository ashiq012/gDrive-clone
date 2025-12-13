import React from "react";
import Logo from "/Logo.png";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className="h-16 w-full flex items-center justify-between px-4 bg-[#F8FAFD]">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="h-10" />
        <p className="text-2xl font-normal text-gray-700">Drive</p>
      </div>

      <div className="flex items-center bg-gray-100 w-150 px-5 py-2 rounded-full gap-4">
        <SearchIcon className="text-gray-600" />
        <input
          type="text"
          placeholder="Search in Drive"
          className="bg-transparent outline-none flex-1 text-gray-700"
        />
        <TuneIcon className="text-gray-600" />
      </div>

      <div className="flex items-center gap-5 text-gray-700">
        <HelpOutlineIcon />
        <SettingsIcon />
        <StarBorderIcon />
        <AppsIcon />
        <AccountCircleIcon  style={{ fontSize: "40px" }}/>
      </div>
    </div>
  );
}

export default Header;
