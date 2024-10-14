"use client";
import { Layout } from "antd";
import "./index.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { useEffect } from "react";

const { Header } = Layout;

const HeaderMain = ({
  collapsed,
  shipInfo,
  setShipInfo, // Nhận setShipInfo từ props
}: {
  collapsed: boolean;
  shipInfo: {
    shipId: string;
    trip?: number;
    year?: number;
    shipName?: string;
    shipBrand?: string;
  } | null;
  setShipInfo: React.Dispatch<
    React.SetStateAction<{
      shipId: string;
      trip?: number;
      year?: number;
      shipName?: string;
      shipBrand?: string;
    } | null>
  >;
}) => {
  const loadShipInfo = () => {
    const storageData = localStorage.getItem("selectedData");
    console.log("test", storageData);

    if (storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        if (parsedData.shipId) {
          if (
            !shipInfo ||
            parsedData.shipId !== shipInfo.shipId ||
            parsedData.trip !== shipInfo.trip ||
            parsedData.year !== shipInfo.year ||
            parsedData.shipName !== shipInfo.shipName ||
            parsedData.shipBrand !== shipInfo.shipBrand
          ) {
            setShipInfo({
              shipId: parsedData.shipId,
              trip: parsedData.trip || "",
              year: parsedData.year || "",
              shipName: parsedData.shipName || "",
              shipBrand: parsedData.shipBrand || "",
            });
          }
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  };

  useEffect(() => {
    loadShipInfo();

    const handleStorageChange = () => {
      loadShipInfo();
      console.log("test2", shipInfo);
    };
    window.addEventListener("localStorageUpdate", handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("localStorageUpdate", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Header
        style={{
          padding: 0,
          margin: collapsed ? "0px 16px 0px 274px" : "0px 24px",
        }}
        className="headerS"
      >
        <div className="headerS__title-left">
          <p>VIETNAM TERMINAL OPERATION SYSTEM</p>
          <span>Ship Planning</span>
        </div>
        <div className="headerS__title-right">
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
              display: "flex",
              alignItems: "center",
              padding: "6px 10px",
              backgroundColor: "#13A4D9",
              opacity: "0.8",
              border: "1px solid #5DC9EF",
              color: "white",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              fontSize: "16px",
            }}
          >
            {shipInfo.shipName
              ? `Vessel Define - ${shipInfo.shipId}/${shipInfo.shipName}`
              : `Ship planing - ${shipInfo.shipId}/${shipInfo.trip}/${shipInfo.year}`}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeaderMain;
