"use client";
import Link from "next/link";
import React from "react";
import { GiBus, GiShipWheel, GiAnchor } from "react-icons/gi"; // Đảm bảo cài đặt react-icons

// JSON data mẫu
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
      menu: "CT/dinhdang/thietketau",
      scope: ["view", "update", "create", "delete"],
    },
  ],
};

// Danh sách các icon và title thay thế
const iconTitleMapping = {
  "thietketau": { icon: <GiShipWheel />, title: "Thiết kế tàu" },
  "dinhdang": { icon: <GiAnchor />, title: "Định dạng tàu" },
};

// Tạo categoriesData từ JSON và thay thế icon, title dựa trên danh sách cung cấp
const createCategoriesData = (jsonData) => {
  const categoriesData = [];

  // Lọc chỉ các mục có menu bắt đầu với 'ship'
  const shipPermissions = jsonData.permission.filter((permissionItem) =>
    permissionItem.menu.startsWith("ship")
  );

  shipPermissions.forEach((permissionItem) => {
    const menu = permissionItem.menu; // Lấy đường dẫn menu từ JSON
    const key = menu.split("/").pop(); // Lấy phần cuối của menu để đối chiếu với iconTitleMapping

    // Lấy icon và title từ danh sách cung cấp, nếu không có dùng mặc định
    const category = {
      icon: iconTitleMapping[key]?.icon || <GiBus />, // Nếu không có icon trong danh sách thì dùng icon mặc định
      title: iconTitleMapping[key]?.title || key.replace(/-/g, " "), // Nếu không có title trong danh sách thì dùng mặc định
      link: `/${menu}`, // Đường dẫn
    };
    categoriesData.push(category);
  });

  return categoriesData;
};

// Component chính để render trang
const ShipPermissionsPage = () => {
  // Gọi hàm để tạo categoriesData từ jsonData, lọc chỉ 'ship'
  const categoriesData = createCategoriesData(jsonData);
  console.log(categoriesData);

  return (
    <div>
      <h1>Ship Permissions</h1>
     
        {categoriesData.map((category, index) => (
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
  );
};

export default ShipPermissionsPage;
