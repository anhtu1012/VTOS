"use client";
import LayoutContent from "@/components/layoutContent";
import { Setting } from "@/model/setting";
import { Table } from "antd";
import { useState } from "react";

const SetTing = () => {
  // Sample data
  const [data, setData] = useState<Setting[]>([
    {
      choose: "chosse 1",
      terminal: "Terminal 1",
      code: "Code 1",
      dienGai: "Event 1",
    },
    {
      choose: "chosse 2",
      terminal: "Terminal 2",
      code: "Code 2",
      dienGai: "Event 2",
    },
    {
      choose: "chosse 3",
      terminal: "Terminal 3",
      code: "Code 3",
      dienGai: "Event 3",
    },
  ]);

  // Handle checkbox change
  const handleCheckboxChange = (checkedValues: any) => {
    console.log("Checked values: ", checkedValues);
  };

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
      title: "Chọn",
      dataIndex: "choose",
      key: "choose",
      // Enable sorting if you have relevant data, otherwise keep it undefined
      sorter: (a, b) => (a.select ? 1 : 0) - (b.select ? 1 : 0), // Example sorter, adjust as needed
    },
    {
      title: "Terminal",
      dataIndex: "terminal",
      key: "terminal",
      sorter: (a, b) => a.terminal.localeCompare(b.terminal), // Sorting based on string values
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      sorter: (a, b) => a.code.localeCompare(b.code), // Sorting based on string values
    },
    {
      title: "Diễn giải",
      dataIndex: "dienGai",
      key: "dienGai",
      sorter: (a, b) => a.dienGai.localeCompare(b.dienGai), // Sorting based on string values
    },
  ];

  return (
      <LayoutContent
        layoutType={1}
        content1={
          <div className="tableHT">
            <Table<Setting>
              columns={columns}
              dataSource={data}
              rowKey="terminal" // Set a unique key for each row
              scroll={{ x: "max-content" }}
            />
          </div>
        }
      />
  );
};

export default SetTing;
