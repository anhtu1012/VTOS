"use client";
import React, { useState } from "react";
import "./index.scss";
import { Col, Row } from "antd";
import LoadingTruck from "@/components/loading";

function ChooseCategory() {
  const listModule = JSON.parse(
    `[{\"module_code\": \"CA\", \"module_name\": \"Category\"},{\"module_code\": \"OM\", \"module_name\": \"Operation Management\"},{\"module_code\": \"MC\", \"module_name\": \"Monitoring and Control\"},{\"module_code\": \"YARD\", \"module_name\": \"Yard Planning\"}, {\"module_code\": \"SHIP\", \"module_name\": \"Ship Planning\"},{\"module_code\": \"CD\", \"module_name\": \"Change Data\"},{\"module_code\": \"BERTH\", \"module_name\": \"Berth Planning\"}, {\"module_code\": \"HIS\", \"module_name\": \"His Viewer\"},{\"module_code\": \"RP\", \"module_name\": \"Report\"},{\"module_code\": \"EDI\", \"module_name\": \"Electronic Data Interchange\"}]`
  );
  
  const [loading, setLoading] = useState(false);

  // Hàm xóa cookie
  const deleteCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // Hàm điều hướng và xử lý loading
  const handleClick = async (module: string) => {
    console.log(module);
    deleteCookie("submodule");
    localStorage.removeItem("selectedMenuItem");
    localStorage.removeItem("siderCollapsed");

    setLoading(true); // Bắt đầu loading
    switch (module) {
      case "SHIP":
        window.location.href = "/ship/he_thong/thiet_lap_quy_luat";
        break;
      case "CA":
        window.location.href = "/category/quan_ly";
        break;
      case "OM":
        window.location.href = "/om/tau_ben/xem_ke_hoach_ben";
        break;
      case "MC":
        window.location.href = "/monitoring/quan-ly";
        break;
      case "YARD":
        window.location.href = "/yard/quan-ly";
        break;
      case "CD":
        window.location.href = "/change-data/quan-ly";
        break;
      case "BERTH":
        window.location.href = "/berth/quan-ly";
        break;
      case "HIS":
        window.location.href = "/his-viewer/quan-ly";
        break;
      case "RP":
        window.location.href = "/report/quan-ly";
        break;
      case "EDI":
        window.location.href = "/edi/quan-ly";
        break;
      default:
        console.log("No matching module");
        setLoading(false); // Nếu không có module phù hợp
        return;
    }

    // Ngừng loading sau khi chuyển hướng
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div>
          <LoadingTruck />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url("/assets/Choose-Category.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="antd-box">
            <p className="antd-box__text">Chọn phân hệ</p>

            <Row className="antd-box__row" gutter={0}>
              {listModule.map((module, index) => (
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "30px" }}
                  key={index}
                  onClick={() => handleClick(module.module_code)}
                >
                  <div className="antd-box__map">{module.module_name}</div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default ChooseCategory;
