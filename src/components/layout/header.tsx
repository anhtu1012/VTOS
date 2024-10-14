import { Layout } from "antd";
import "./index.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";

const { Header } = Layout;
const listModule = JSON.parse(
  `[{\"module_code\": \"CA\", \"module_name\": \"Category\"},{\"module_code\": \"OM\", \"module_name\": \"Operation Management\"},{\"module_code\": \"MC\", \"module_name\": \"Monitoring and Control\"},{\"module_code\": \"YARD\", \"module_name\": \"Yard Planning\"}, \t\t\t\t{\"module_code\": \"SHIP\", \"module_name\": \"Ship Planning\"},{\"module_code\": \"CD\", \"module_name\": \"Change Data\"},{\"module_code\": \"BERTH\", \"module_name\": \"Berth Planning\"}, \t\t\t\t{\"module_code\": \"HIS\", \"module_name\": \"His Viewer\"},{\"module_code\": \"RP\", \"module_name\": \"Report\"},{\"module_code\": \"EDI\", \"module_name\": \"Electronic Data Interchange\"}]`
);

const HeaderMain = ({
  collapsed,
  shipInfo,
  setShipInfo,
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
  const [submoduleName, setSubmoduleName] = useState<string>("Ship Planning");

  const loadShipInfo = () => {
    const storageData = localStorage.getItem("selectedData");
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

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const getSubmoduleNameFromCookies = () => {
    let savedSubmodule = getCookie("submodule");
    if (savedSubmodule) {
      savedSubmodule = decodeURIComponent(savedSubmodule)
        .replace(/\//g, "")
        .replace(/%2F/g, "");

      const matchedModule = listModule.find(
        (module) =>
          module.module_code.toLowerCase() === savedSubmodule.toLowerCase()
      );
      console.log(matchedModule);

      if (matchedModule) {
        setSubmoduleName(matchedModule.module_name);
      }
    }
  };

  useEffect(() => {
    loadShipInfo();
    getSubmoduleNameFromCookies();

    const handleStorageChange = () => {
      loadShipInfo();
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
          <span>{submoduleName}</span>
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
