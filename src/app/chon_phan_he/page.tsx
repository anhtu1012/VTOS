"use client";
import React, { useState } from "react";
import "./index.scss";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import LoadingTruck from "@/components/loading";

function ChooseCategory() {
  const listModule = JSON.parse(
    `[{\"module_code\": \"CA\", \"module_name\": \"Category\"},{\"module_code\": \"OM\", \"module_name\": \"Operation Management\"},{\"module_code\": \"MC\", \"module_name\": \"Monitoring and Control\"},{\"module_code\": \"YARD\", \"module_name\": \"Yard Planning\"}, \t\t\t\t{\"module_code\": \"SHIP\", \"module_name\": \"Ship Planning\"},{\"module_code\": \"CD\", \"module_name\": \"Change Data\"},{\"module_code\": \"BERTH\", \"module_name\": \"Berth Planning\"}, \t\t\t\t{\"module_code\": \"HIS\", \"module_name\": \"His Viewer\"},{\"module_code\": \"RP\", \"module_name\": \"Report\"},{\"module_code\": \"EDI\", \"module_name\": \"Electronic Data Interchange\"}]`
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // Hàm xóa cookie
  const deleteCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  const handleClick = (module: string) => {
    console.log(module);
    deleteCookie("submodule");
    setLoading(true);
    switch (module) {
      case "SHIP":
        router.push("/ship/he-thong/thiet-lap-quy-luat", { scroll: false });
        break;
      case "CA":
        router.push("/category/quan-ly", { scroll: false });
        break;
      case "OM":
        router.push("/om/cate1", { scroll: false });
        break;
      case "MC":
        router.push("/monitoring/quan-ly", { scroll: false });
        break;
      case "YARD":
        router.push("/yard/quan-ly", { scroll: false });
        break;
      case "CD":
        router.push("/change-data/quan-ly", { scroll: false });
        break;
      case "BERTH":
        router.push("/berth/quan-ly", { scroll: false });
        break;
      case "HIS":
        router.push("/his-viewer/quan-ly", { scroll: false });
        break;
      case "RP":
        router.push("/report/quan-ly", { scroll: false });
        break;
      case "EDI":
        router.push("/edi/quan-ly", { scroll: false });
        break;
      default:
        console.log("No matching module");
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      {loading ? ( // Hiển thị Spin khi đang loading
        <div className="loading-container">
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
