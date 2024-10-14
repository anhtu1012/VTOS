import React, { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import SiderComponents from "@/components/(siderComponets)/sider";
import { GiBus, GiCarWheel, GiTruck } from "react-icons/gi";
import "./index.scss";
import Link from "next/link";
const { Sider } = Layout;
const categoriesData = {
  "1": [
    {
      icon: <GiTruck />,
      title: "Thiết Lập Quy Luật",
      link: "/he-thong/thiet-lap-quy-luat",
    },
  ],
  "2": [
    {
      icon: <GiTruck />,
      title: "Định nghĩa tàu",
      link: "/dinh-dang/dinh-nghia-tau",
    },
    {
      icon: <GiCarWheel />,
      title: "Thông tin tàu",
      link: "/dinh-dang/thong-tin-tau",
    },
    {
      icon: <GiBus />,
      title: "Thông tin sơ đồ",
      link: "/dinh-dang/thong-tin-so-do",
    },
    { icon: <GiBus />, title: "Thiết kế tàu", link: "/dinh-dang/thiet-ke-tau" },
    {
      icon: <GiBus />,
      title: "Trọng lượng tối đa",
      link: "/dinh-dang/trong-luong-toi-da",
    },
    { icon: <GiBus />, title: "In sơ đồ tàu", link: "/dinh-dang/in-so-do-tau" },
  ],
  "3": [
    {
      icon: <GiTruck />,
      title: "Kế hoạch tàu",
      link: "/ke-hoach/ke-hoach-tau",
    },
    {
      icon: <GiCarWheel />,
      title: "Kế hoạch dỡ container",
      link: "/ke-hoach/ke-hoach-do-container",
    },
    {
      icon: <GiBus />,
      title: "Kế hoạch xếp container",
      link: "/ke-hoach/ke-hoach-xep-container",
    },
    {
      icon: <GiBus />,
      title: "Danh sách container xuất tàu",
      link: "/ke-hoach/danh-sach-container-xuat-tau",
    },
    {
      icon: <GiBus />,
      title: "Giám sát bãi",
      link: "/ke-hoach/giam-sat-bai",
    },
    {
      icon: <GiBus />,
      title: "Thống kê kế hoạch xếp dỡ",
      link: "/ke-hoach/thong-ke-ke-hoach-xep-do",
    },
    {
      icon: <GiBus />,
      title: "Gán cẩu",
      link: "/ke-hoach/gan-cau",
    },
    {
      icon: <GiBus />,
      title: "Cập nhật danh sách container xuất tàu",
      link: "/ke-hoach/cap-nhat-danh-sach-container-xuat-tau",
    },
    {
      icon: <GiBus />,
      title: "In kế hoạch",
      link: "/ke-hoach/in-ke-hoach",
    },
    {
      icon: <GiBus />,
      title: "CMC",
      link: "/ke-hoach/CMC",
    },
    {
      icon: <GiBus />,
      title: "Out Bound Prelan",
      link: "/ke-hoach/out-bound-preplan",
    },
  ],
  "4": [
    { icon: <GiTruck />, title: "Pre-Plan 1", link: "/pre-plan-1" },
    { icon: <GiCarWheel />, title: "Pre-Plan 2", link: "/pre-plan-2" },
    { icon: <GiBus />, title: "Pre-Plan 3", link: "/pre-plan-3" },
  ],
};
const moduleData = {
  "1": {
    title: "Hệ Thống",
    icon: <PieChartOutlined />,
  },
  "2": {
    title: "Định Dạng",
    icon: <DesktopOutlined />,
  },
  "3": {
    title: "Kế Hoạch",
    icon: <UserOutlined />,
  },
  "4": {
    title: "Pre-Planning",
    icon: <TeamOutlined />,
  },
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
) => {
  return {
    key,
    icon,
    label,
  };
};

const SiderMain = ({
  collapsed,
  setCollapsed,
  clearShipInfo,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  clearShipInfo: () => void;
}) => {
  //
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    () => localStorage.getItem("selectedMenuItem") || "1"
  );
  const selectedModule = moduleData[selectedMenuItem];
  useEffect(() => {
    localStorage.setItem("selectedMenuItem", selectedMenuItem);
  }, [selectedMenuItem]);

  const items = [
    getItem(
      <Link
        href={"/he-thong/thiet-lap-quy-luat"}
        onClick={() => {
          setCollapsed(true);
          localStorage.removeItem("activeIndex_1"); // Reset activeIndex của category "1"
          clearShipInfo();
        }}
      >
        <p>Hệ Thống</p>
      </Link>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <Link
        href={"/dinh-dang/dinh-nghia-tau"}
        onClick={() => {
          setCollapsed(true);
          localStorage.removeItem("activeIndex_2"); // Reset activeIndex của category "2"
          clearShipInfo();
        }}
      >
        <p>Định Dạng</p>
      </Link>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <Link
        href={"/ke-hoach/ke-hoach-tau"}
        onClick={() => {
          setCollapsed(true);
          localStorage.removeItem("activeIndex_3"); // Reset activeIndex của category "3"
          localStorage.removeItem("selectedData");
          clearShipInfo();
        }}
      >
        <p>Kế Hoạch</p>
      </Link>,
      "3",
      <UserOutlined />
    ),
    getItem(
      <p
        onClick={() => {
          setCollapsed(!collapsed);
          localStorage.removeItem("activeIndex_4"); // Reset activeIndex của category "4"
          localStorage.removeItem("selectedData");
          clearShipInfo();
        }}
      >
        Pre-Planning
      </p>,
      "4",
      <TeamOutlined />
    ),
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={!collapsed ? "sider" : "siderMain"}
      style={{
        background: "#fff",
        textAlign: "center",
        minWidth: `${collapsed ? "71px" : "250px !important "}`,
        height: "100vh",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <div className="logo-layout">
            <div
              style={{
                textAlign: "right",
                flexGrow: "1",
                paddingRight: `${!collapsed ? "20px" : ""}`,
              }}
            >
              <Image
                src="https://cehsoft.com/wp-content/uploads/2024/09/logo-cehsoft-300x87.png"
                width={110}
                height={35.24}
                alt="CEHSOFT Logo"
                style={{ display: `${collapsed ? "none" : ""}` }}
              />
            </div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
          <Menu
            theme="light"
            style={{ width: `${collapsed ? "71px" : "249px"}` }}
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedMenuItem]}
            mode="inline"
            items={items}
            onClick={(e) => {
              setSelectedMenuItem(e.key);
            }}
          />
        </div>
        {collapsed ? (
          <SiderComponents
            categories={categoriesData[selectedMenuItem]}
            titleIcon={selectedModule.icon}
            titleText={selectedModule.title}
            selectedMenuItem={selectedMenuItem} // Pass selected category
          />
        ) : (
          ""
        )}
      </div>
    </Sider>
  );
};

export default SiderMain;
