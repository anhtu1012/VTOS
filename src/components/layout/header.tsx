"use client";
import { Layout } from "antd";
import "./index.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
const { Header } = Layout;

const HeaderMain = ({ collapsed }: { collapsed: boolean }) => {
  const [shipInfo, setShipInfo] = useState<{
    shipId: string;
    trip: number;
  } | null>(null);
  useEffect(() => {
    const storageData = localStorage.getItem("selectedData");
    if (storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        if (parsedData.shipId && parsedData.trip) {
          setShipInfo({ shipId: parsedData.shipId, trip: parsedData.trip });
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, [shipInfo]);

  return (
    <>
      <Header
        style={{
          padding: 0,
          margin: collapsed ? "0px 16px 0px 250px" : "0px 16px",
        }}
        className="headerS"
      >
        <div className="headerS__title-left">
          <p>VIETNAM TERMINAL OPERATION SYSTEM</p>
          <span>Ship Planning</span>
        </div>
        <div className="headerS__title-right">
          {/* <div className="search">
          <CiSearch size={20} className="search__icon" />
          <input type="text" placeholder="Search...." />
        </div> */}
          <div className="user">
            <FaRegUser size={20} />
            <span>nguyenvana@gmail.com</span>
          </div>
          <div className="icon">
            <IoSettingsOutline size={20} />
            <IoMdNotificationsOutline size={20} />
            <IoMdLogOut size={20} />
          </div>
        </div>
      </Header>
      {shipInfo ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: collapsed ? "0px 16px 0px 250px" : "0px 16px",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "30px",
              backgroundColor: "#13A4D9",
              opacity: "0.8",
              textAlign: "center",
              paddingTop: "6px",
              border: "1px solid #5DC9EF",
              color: "white",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              fontSize: "16px",
            }}
          >
            Vessel Define - {shipInfo.shipId}/{shipInfo.trip}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderMain;
