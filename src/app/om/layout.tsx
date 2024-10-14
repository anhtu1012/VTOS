"use client";
import React, { useState, useEffect } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import HeaderMain from "@/components/layout/header";
import SiderMain from "@/components/layout/sider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingTruck from "@/components/loading";

const { Content } = Layout;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [ready, setReady] = useState(false); // Thêm biến ready để chờ trạng thái collapsed
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [shipInfo, setShipInfo] = useState<{
    shipId: string;
    trip?: number;
    year?: number;
    shipName?: string;
    shipBrand?: string;
  } | null>(null);

  const clearShipInfo = () => {
    setShipInfo(null); // Hàm để xóa shipInfo
  };
  // Sử dụng useEffect để lưu trạng thái collapsed vào localStorage
  useEffect(() => {
    const storedCollapsed = localStorage.getItem("siderCollapsed");
    if (storedCollapsed) {
      setCollapsed(JSON.parse(storedCollapsed));
    }
    setReady(true); // Sau khi kiểm tra trạng thái, đánh dấu ready là true
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("siderCollapsed", JSON.stringify(collapsed));
    }
  }, [collapsed, ready]);

  if (!ready) {
    // Render loader hoặc trang trắng trong khi trạng thái collapsed đang được tải
    return (
      <div>
        <LoadingTruck />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5DC9EF",
          colorBgLayout: "#F3F4F6",
          colorTextMenuSelected: "#10B981",
        },
        components: {
          Radio: {
            colorBgContainer: "#e8f7fd",
            colorBorder: "#5DC9EF",
          },
        },
      }}
    >
      <Layout>
        <SiderMain
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          clearShipInfo={clearShipInfo}
        />
        <Layout>
          <HeaderMain
            collapsed={collapsed}
            shipInfo={shipInfo}
            setShipInfo={setShipInfo}
          />
          <Content
            style={{
              margin: collapsed ? "24px 16px 24px 274px" : "24px 24px",
              minHeight: 280,
              background: "transparent",
              borderRadius: borderRadiusLG,
              transition: "margin 0.2s ease-in-out",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <ToastContainer />
    </ConfigProvider>
  );
};

export default RootLayout;
