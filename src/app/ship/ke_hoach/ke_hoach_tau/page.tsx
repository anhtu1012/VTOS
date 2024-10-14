"use client";
import LayoutContent from "@/components/layoutContent";
import { Schedule } from "@/model/ship-schedule/schedule";
import {
  Button,
  Form,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";
import React, { useState } from "react";
import "./index.scss";

function ShipPlan() {
  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const [data, setData] = useState<Schedule[]>([
    {
      shipId: "ABC123",
      trip: 1001,
      year: 2024,
      shipKey: 5001,
      imVoyNo: 2001,
      outVoyNo: 3001,
      serviceIn: "Service_A",
      shipBrand: "Brand_X",
      ATB: "2024-10-11T12:00:00",
      ATD: "2024-10-11T14:00:00",
    },
    {
      shipId: "XYZ456",
      trip: 1002,
      year: 2023,
      shipKey: 5002,
      imVoyNo: 2002,
      outVoyNo: 3002,
      serviceIn: "Service_B",
      shipBrand: "Brand_Y",
      ATB: "2023-09-15T08:30:00",
      ATD: "2023-09-15T10:00:00",
    },
    {
      shipId: "LMN789",
      trip: 1003,
      year: 2022,
      shipKey: 5003,
      imVoyNo: 2003,
      outVoyNo: 3003,
      serviceIn: "Service_C",
      shipBrand: "Brand_Z",
      ATB: "2022-07-21T07:45:00",
      ATD: "2022-07-21T09:15:00",
    },
    {
      shipId: "DEF101",
      trip: 1004,
      year: 2021,
      shipKey: 5004,
      imVoyNo: 2004,
      outVoyNo: 3004,
      serviceIn: "Service_D",
      shipBrand: "Brand_W",
      ATB: "2021-06-30T11:00:00",
      ATD: "2021-06-30T12:30:00",
    },
    {
      shipId: "GHI202",
      trip: 1005,
      year: 2020,
      shipKey: 5005,
      imVoyNo: 2005,
      outVoyNo: 3005,
      serviceIn: "Service_E",
      shipBrand: "Brand_V",
      ATB: "2020-05-12T13:15:00",
      ATD: "2020-05-12T15:00:00",
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
      title: "Mã tàu",
      dataIndex: "shipId",
      key: "shipId",
      // Enable sorting if you have relevant data, otherwise keep it undefined
      sorter: (a, b) => a.shipId.localeCompare(b.shipId), // Example sorter, adjust as needed
      width: "315px",
    },
    {
      title: "Chuyến",
      dataIndex: "trip",
      key: "trip",
      sorter: (a, b) => parseFloat(a.trip) - parseFloat(b.trip), // Sorting based on string values
      width: "315px",
    },
    {
      title: "Năm",
      dataIndex: "year",
      key: "year",
      sorter: (a, b) => parseFloat(a.year) - parseFloat(b.year), // Sorting based on string values
      width: "315px",
    },
    {
      title: "Key tàu",
      dataIndex: "shipKey",
      key: "shipKey",
      sorter: (a, b) => parseFloat(a.shipKey) - parseFloat(b.shipKey), // Sorting based on number values
      width: "315px",
    },
    {
      title: "Im-Voy.No",
      dataIndex: "imVoyNo",
      key: "imVoyNo",
      width: "315px",
      sorter: (a, b) => parseFloat(a.imVoyNo) - parseFloat(b.imVoyNo), // Sorting based on number values
    },
    {
      title: "Out-Voy.No",
      dataIndex: "outVoyNo",
      key: "outVoyNo",
      width: "315px",
      sorter: (a, b) => parseFloat(a.outVoyNo) - parseFloat(b.outVoyNo), // Sorting based on number values
    },
    {
      title: "Service in",
      dataIndex: "serviceIn",
      key: "serviceIn",
      width: "315px",
      sorter: (a, b) => a.serviceIn.localeCompare(b.serviceIn), // Sorting based on number values
    },
    {
      title: "Hãng tàu",
      dataIndex: "shipBrand",
      key: "shipBrand",
      width: "315px",
      sorter: (a, b) => a.shipBrand.localeCompare(b.shipBrand), // Sorting based on number values
    },
    {
      title: "ATB",
      dataIndex: "ATB",
      key: "ATB",
      width: "315px",
      sorter: (a, b) => a.ATB.localeCompare(b.ATB), // Sorting based on number values
    },
    {
      title: "ATD",
      dataIndex: "ATD",
      key: "ATD",
      width: "315px",
      sorter: (a, b) => a.ATD.localeCompare(b.ATD), // Sorting based on number values
    },
  ];

  const [form] = Form.useForm();
  const [selectedRowKey, setSelectedRowKey] = useState<React.Key | null>(null);
  const [selectedData, setSelectedData] = useState<Schedule | null>(null);

  const onRowClick = (record: Schedule) => {
    if (record.shipId === selectedRowKey) {
      form.resetFields();
      setSelectedRowKey(null);
      setSelectedData(null);
    } else {
      setSelectedRowKey(record.shipId);
      setSelectedData(record);
      form.setFieldsValue(record);
    }
  };

  const onChange: TableProps<Schedule>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const rowClassName = (record: Schedule) => {
    return record.shipId === selectedRowKey ? "selected-row" : "";
  };

  const onButtonClick = () => {
    if (selectedData) {
      localStorage.setItem("selectedData", JSON.stringify(selectedData));
      // Trigger a custom event to notify other components that localStorage has changed
      const storageEvent = new Event("localStorageUpdate");
      window.dispatchEvent(storageEvent);
    } else {
      console.log("No data selected");
    }
  };

  return (
    <LayoutContent
      layoutType={1}
      content1={
        <>
          <div className="antd-components">
            <div className="antd-components__radio">
              <Radio.Group onChange={onChangeRadio} value={value}>
                <Space direction="horizontal">
                  <Radio value={1}>Trước khi tàu cập bến</Radio>
                  <Radio value={2}>Sau khi tàu cập bến</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className="antd-components__rightside">
              <Select
                showSearch
                placeholder="Năm"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "2024" },
                  { value: "2", label: "2023" },
                  { value: "3", label: "2022" },
                ]}
              />
              <Button type="primary" size="large" onClick={onButtonClick}>
                Mở
              </Button>
            </div>
          </div>
          <div className="tableHT">
            <Table<Schedule>
              columns={columns}
              dataSource={data}
              onChange={onChange}
              rowClassName={rowClassName}
              rowKey="shipId" // Set a unique key for each row
              onRow={(record) => ({
                onClick: () => onRowClick(record),
              })}
              scroll={{ x: "max-content" }}
            />
          </div>
        </>
      }
    />
  );
}

export default ShipPlan;
