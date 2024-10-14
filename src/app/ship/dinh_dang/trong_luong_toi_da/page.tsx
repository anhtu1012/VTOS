"use client";
import LayoutContent from "@/components/layoutContent";
import { maxWeight } from "@/model/ship-definition/maxWeight";
import { Table } from "antd";
import React, { useState } from "react";

function WeightMax() {
  const [data, setData] = useState<maxWeight[]>([
    {
      cVBay: "cVBay1",
      cVRow: "cVRow1",
      cLoai: "cLoai1",
      maxWeight: 10,
    },
    {
      cVBay: "cVBay2",
      cVRow: "cVRow2",
      cLoai: "cLoai2",
      maxWeight: 20,
    },
    {
      cVBay: "cVBay3",
      cVRow: "cVRow3",
      cLoai: "cLoai3",
      maxWeight: 30,
    },
  ]);

  const columns = [
    {
      title: "",
      dataIndex: "key",
      width: "60px",
      key: "index",
      render: (_, __, index) => index + 1,
      sorter: (a, b) => a.key - b.key,
      fixed: true,
    },
    {
      title: "cVBay",
      dataIndex: "cVBay",
      key: "cVBay",
      // Enable sorting if you have relevant data, otherwise keep it undefined
      sorter: (a, b) => a.cVBay.localeCompare(b.cVBay), // Example sorter, adjust as needed
    },
    {
      title: "cVRow",
      dataIndex: "cVRow",
      key: "cVRow",
      sorter: (a, b) => a.cVRow.localeCompare(b.cVRow), // Sorting based on string values
    },
    {
      title: "cLoai",
      dataIndex: "cLoai",
      key: "cLoai",
      sorter: (a, b) => a.cLoai.localeCompare(b.cLoai), // Sorting based on string values
    },
    {
      title: "Trọng lượng tối đa (kg)",
      dataIndex: "maxWeight",
      key: "maxWeight",
      sorter: (a, b) => parseFloat(a.maxWeight) - parseFloat(b.maxWeight), // Sorting based on number values
    },
  ];

  return (
    <LayoutContent
      layoutType={1}
      content1={
        <div className="tableHT">
          <Table<maxWeight>
            columns={columns}
            dataSource={data}
            rowKey="cVBay" // Set a unique key for each row
            scroll={{ x: "max-content" }}
          />
        </div>
      }
    />
  );
}

export default WeightMax;
