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
      link: "/ship/he_thong/thiet_lap_quy_luat",
    },
  ],
  "2": [
    {
      icon: <GiTruck />,
      title: "Định nghĩa tàu",
      link: "/ship/dinh_dang/dinh_nghia_tau",
    },
    {
      icon: <GiCarWheel />,
      title: "Thông tin tàu",
      link: "/ship/dinh_dang/thong_tin_tau",
    },
    {
      icon: <GiBus />,
      title: "Thông tin sơ đồ",
      link: "/ship/dinh_dang/thong_tin_so_do",
    },
    {
      icon: <GiBus />,
      title: "Thiết kế tàu",
      link: "/ship/dinh_dang/thiet_ke_tau",
    },
    {
      icon: <GiBus />,
      title: "Trọng lượng tối đa",
      link: "/ship/dinh_dang/trong_luong_toi_da",
    },
    {
      icon: <GiBus />,
      title: "In sơ đồ tàu",
      link: "/ship/dinh_dang/in_so_do_tau",
    },
  ],
  "3": [
    {
      icon: <GiTruck />,
      title: "Kế hoạch tàu",
      link: "/ship/ke_hoach/ke_hoach_tau",
    },
    {
      icon: <GiCarWheel />,
      title: "Kế hoạch dỡ container",
      link: "/ship/ke_hoach/ke_hoach_do_container",
    },
    {
      icon: <GiBus />,
      title: "Kế hoạch xếp container",
      link: "/ship/ke_hoach/ke_hoach_xep_container",
    },
    {
      icon: <GiBus />,
      title: "Danh sách container xuất tàu",
      link: "/ship/ke_hoach/danh_sach_container_xuat_tau",
    },
    {
      icon: <GiBus />,
      title: "Giám sát bãi",
      link: "/ship/ke_hoach/giam_sat_bai",
    },
    {
      icon: <GiBus />,
      title: "Thống kê kế hoạch xếp dỡ",
      link: "/ship/ke-hoach/thong_ke_ke_hoach_xep_do",
    },
    {
      icon: <GiBus />,
      title: "Gán cẩu",
      link: "/ship/ke_hoach/gan_cau",
    },
    {
      icon: <GiBus />,
      title: "Cập nhật danh sách container xuất tàu",
      link: "/ship/ke_hoach/cap_nhat_danh_sach_container_xuat_tau",
    },
    {
      icon: <GiBus />,
      title: "In kế hoạch",
      link: "/ship/ke_hoach/in_ke_hoach",
    },
    {
      icon: <GiBus />,
      title: "CMC",
      link: "/ship/ke_hoach/CMC",
    },
    {
      icon: <GiBus />,
      title: "Out Bound Prelan",
      link: "/ship/ke_hoach/out_bound_preplan",
    },
  ],
  "4": [
    { icon: <GiTruck />, title: "Pre-Plan 1", link: "/ship/pre-plan-1" },
    { icon: <GiCarWheel />, title: "Pre-Plan 2", link: "/ship/pre-plan-2" },
    { icon: <GiBus />, title: "Pre-Plan 3", link: "/ship/pre-plan-3" },
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
        prefetch={false}
        href={"/ship/he_thong/thiet_lap_quy_luat"}
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
        prefetch={false}
        href={"/ship/dinh_dang/dinh_nghia_tau"}
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
        prefetch={false}
        href={"/ship/ke_hoach/ke_hoach_tau"}
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
