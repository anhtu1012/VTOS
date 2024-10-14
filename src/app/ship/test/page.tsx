"use client";
import Link from "next/link";
import React from "react";
import {
  GiBus,
  GiShipWheel,
  GiAnchor,
  GiTruck,
  GiCarWheel,
} from "react-icons/gi"; // Đảm bảo cài đặt react-icons

// JSON data mẫu với nhiều phân hệ cho 'ship', 'OM', 'YAD', và 'CT'
const jsonData = {
  permission: [
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/dinhdang/thietketau",
      scope: ["view", "update", "create", "delete"],
    },
    
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/dinhdang/thong-tin-so-do",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/dinhdang/trong-luong-toi-da",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/dinhdang/in-so-do-tau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/ke-hoach-tau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/ke-hoach-do-container",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/danh-sach-container-xuat-tau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/thong-ke-ke-hoach-xep-do",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/gan-cau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/in-ke-hoach",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "ship/kehoach/cap-nhat-danh-sach-container-xuat-tau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "OM/dinhdang/thietketau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "YAD/dinhdang/thietketau",
      scope: ["view", "update", "create", "delete"],
    },
    {
      scopes: [
        { id: "560c50e4-c513-42d0-99cd-76e460ee55fd", name: "update" },
        { id: "e15f07fc-a6a3-406e-8057-56eb280375a0", name: "create" },
        { id: "17215afb-cc9f-4293-9a6c-1c642dbdb74e", name: "view" },
        { id: "39b7d4d1-ba2a-49a9-93cf-73bd53088f9f", name: "delete" },
      ],
      status: "PERMIT",
      menu: "CT/dinhdang/thietketau",
      scope: ["view", "update", "create", "delete"],
    },
    // Các phân hệ khác có thể tiếp tục thêm ở đây...
  ],
};

// Danh sách các icon và title thay thế
const iconTitleMapping = {
  thietketau: { icon: <GiShipWheel />, title: "Thiết kế tàu" },
  dinhdang: { icon: <GiAnchor />, title: "Định dạng tàu" },
  "thong-tin-tau": { icon: <GiBus />, title: "Thông tin tàu" },
  "thong-tin-so-do": { icon: <GiBus />, title: "Thông tin sơ đồ" },
  "trong-luong-toi-da": { icon: <GiBus />, title: "Trọng lượng tối đa" },
  "in-so-do-tau": { icon: <GiBus />, title: "In sơ đồ tàu" },
  "ke-hoach-tau": { icon: <GiTruck />, title: "Kế hoạch tàu" },
  "ke-hoach-do-container": {
    icon: <GiCarWheel />,
    title: "Kế hoạch dỡ container",
  },
  "ke-hoach-xep-container": {
    icon: <GiBus />,
    title: "Kế hoạch xếp container",
  },
  "danh-sach-container-xuat-tau": {
    icon: <GiBus />,
    title: "Danh sách container xuất tàu",
  },
  "thong-ke-ke-hoach-xep-do": {
    icon: <GiBus />,
    title: "Thống kê kế hoạch xếp dỡ",
  },
  "gan-cau": { icon: <GiBus />, title: "Gán cẩu" },
  "in-ke-hoach": { icon: <GiBus />, title: "In kế hoạch" },
  "cap-nhat-danh-sach-container-xuat-tau": {
    icon: <GiBus />,
    title: "Cập nhật danh sách container xuất tàu",
  },
};

// Hàm tạo dữ liệu phân hệ ship theo các nhóm được đánh số thứ tự 1, 2, 3...
const createShipCategoriesData = (jsonData) => {
  const shipCategoriesData = {};
  let groupCounter = 1; // Bộ đếm nhóm bắt đầu từ 1
  const groupMap = {}; // Để theo dõi các nhóm đã tạo

  jsonData.permission.forEach((permissionItem) => {
    const menu = permissionItem.menu;

    if (menu.startsWith("ship")) {
      const splitMenu = menu.split("/"); // Tách chuỗi menu theo dấu "/"
      const groupKey = splitMenu[1]; // Lấy phần sau "ship" làm khóa nhóm (ví dụ: "dinh-dang")
      const key = splitMenu[2]; // Lấy phần cuối của menu (ví dụ: "thiet-ke-tau")

      // Lấy icon và title từ danh sách cung cấp, nếu không có dùng mặc định
      const category = {
        icon: iconTitleMapping[key]?.icon || <GiBus />,
        title: iconTitleMapping[key]?.title || key.replace(/-/g, " "),
        link: `/${menu}`,
      };

      // Nếu groupKey chưa có trong groupMap, gán nó vào số thứ tự mới
      if (!groupMap[groupKey]) {
        groupMap[groupKey] = groupCounter;
        shipCategoriesData[groupCounter] = []; // Tạo nhóm mới
        groupCounter++; // Tăng số thứ tự nhóm
      }

      // Thêm mục vào nhóm đã được đánh số
      const groupNumber = groupMap[groupKey];
      shipCategoriesData[groupNumber].push(category);
    }
  });

  return shipCategoriesData;
};
// Component chính để render trang
const ShipPermissionsPage = () => {
  // Gọi hàm để tạo categoriesData từ jsonData chỉ lọc phân hệ 'ship'
  const categoriesData = createShipCategoriesData(jsonData);
  console.log(categoriesData);

  return (
    <div>
      <h1>Ship Permissions</h1>
      {Object.keys(categoriesData).map((groupKey) => (
        <div key={groupKey}>
          <h2>{groupKey.replace(/-/g, " ")}</h2> {/* Hiển thị tên nhóm */}
          {categoriesData[groupKey].map((category, index) => (
            <h1 key={index}>
              <Link
                href={category.link}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="icon">{category.icon}</div>
                <span style={{ marginLeft: "8px" }}>{category.title}</span>
              </Link>
            </h1>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShipPermissionsPage;
