import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Mycontext } from "../../App";

const SideBar = () => {
  const [activeTab, isActiveTab] = useState(0);
  const [isToggleSubmenu, setisToggleSubmenu] = useState(false);

  const context = useContext(Mycontext);

  const isopenSubMenu = (index) => {
    isActiveTab(index);
    setisToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isopenSubMenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                DashBoard
                <span className="arrow">
                  {activeTab === 0 ? <FaAngleDown /> : <FaAngleRight />}
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isopenSubMenu(1)}
            >
              <span className="icon">
                <MdOutlineProductionQuantityLimits />
              </span>
              Products
              <span className="arrow">
                {activeTab === 1 && isToggleSubmenu ? (
                  <FaAngleDown />
                ) : (
                  <FaAngleRight />
                )}
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="#">Product View</Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Repeat for other buttons */}
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isopenSubMenu(2)}
              >
                <span className="icon">
                  <IoMdCart />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isopenSubMenu(3)}
              >
                <span className="icon">
                  <BiSolidMessageSquareDetail />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isopenSubMenu(4)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isopenSubMenu(5)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isopenSubMenu(6)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                Test1
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isopenSubMenu(7)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                test2
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isopenSubMenu(8)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                test3
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              style={{
                backgroundColor: "#1E73BE", // Button color
                color: "#fff", // Text color
                borderRadius: "8px", // Rounded corners
                padding: "8px 16px",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
