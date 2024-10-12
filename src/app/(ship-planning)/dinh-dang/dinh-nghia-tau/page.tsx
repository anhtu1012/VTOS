"use client";
import LayoutContent from "@/components/layoutContent";
import type { TableColumnsType, TableProps } from "antd";
import { Button, Form, Input, Table } from "antd";
import React, { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./index.scss";
import { Ship } from "@/model/ship-definition/ship";

const data: Ship[] = [
  {
    shipId: "S001",
    shipName: "Titanic",
    shipBrand: "White Star Line",
  },
  {
    shipId: "S002",
    shipName: "Queen Mary",
    shipBrand: "Cunard Line",
  },
  {
    shipId: "S003",
    shipName: "Oasis of the Seas",
    shipBrand: "Royal Caribbean",
  },
  {
    shipId: "S004",
    shipName: "Symphony of the Seas",
    shipBrand: "Royal Caribbean",
  },
  {
    shipId: "S005",
    shipName: "Allure of the Seas",
    shipBrand: "Royal Caribbean",
  },
  {
    shipId: "S006",
    shipName: "Harmony of the Seas",
    shipBrand: "Royal Caribbean",
  },
  {
    shipId: "S007",
    shipName: "Norwegian Bliss",
    shipBrand: "Norwegian Cruise Line",
  },
  {
    shipId: "S008",
    shipName: "Norwegian Joy",
    shipBrand: "Norwegian Cruise Line",
  },
  {
    shipId: "S009",
    shipName: "Celebrity Edge",
    shipBrand: "Celebrity Cruises",
  },
  {
    shipId: "S010",
    shipName: "Celebrity Apex",
    shipBrand: "Celebrity Cruises",
  },
  {
    shipId: "S011",
    shipName: "MSC Bellissima",
    shipBrand: "MSC Cruises",
  },
  {
    shipId: "S012",
    shipName: "MSC Grandiosa",
    shipBrand: "MSC Cruises",
  },
  {
    shipId: "S013",
    shipName: "AIDAnova",
    shipBrand: "AIDA Cruises",
  },
  {
    shipId: "S014",
    shipName: "Costa Smeralda",
    shipBrand: "Costa Cruises",
  },
  {
    shipId: "S015",
    shipName: "Scarlet Lady",
    shipBrand: "Virgin Voyages",
  },
  {
    shipId: "S016",
    shipName: "Viking Orion",
    shipBrand: "Viking Cruises",
  },
  {
    shipId: "S017",
    shipName: "Carnival Vista",
    shipBrand: "Carnival Cruise Line",
  },
  {
    shipId: "S018",
    shipName: "Carnival Horizon",
    shipBrand: "Carnival Cruise Line",
  },
  {
    shipId: "S019",
    shipName: "Majestic Princess",
    shipBrand: "Princess Cruises",
  },
  {
    shipId: "S020",
    shipName: "Regal Princess",
    shipBrand: "Princess Cruises",
  },
];

function ShipDefinition() {
  const [form] = Form.useForm();
  const [selectedRowKey, setSelectedRowKey] = useState<React.Key | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedData, setSelectedData] = useState<Ship | null>(null);

  const onRowClick = (record: Ship) => {
    if (record.shipId === selectedRowKey) {
      form.resetFields();
      setSelectedRowKey(null);
      setSelectedData(null);
      setIsEditing(false);
    } else {
      setSelectedRowKey(record.shipId);
      setSelectedData(record);
      setIsEditing(true);
      form.setFieldsValue(record);
    }
  };

  const handleSave = (values: Ship) => {
    console.log("Saved Values: ", values);
    // Handle saving the edited data
  };

  const handleDelete = () => {
    console.log("Deleted Record: ", selectedData);
    // Handle deletion of the selected row
  };

  const columns: TableColumnsType<Ship> = [
    {
      title: "",
      dataIndex: "key",
      key: "index",
      width: "50px",
      render: (_, __, index) => index + 1,
      sorter: (a, b) => a.key - b.key,
      fixed: true,
    },
    {
      title: "Mã tàu",
      dataIndex: "shipId",
      key: "shipId",
      sorter: (a, b) => a.shipId.localeCompare(b.shipId),
    },
    {
      title: "Tên tàu",
      dataIndex: "shipName",
      key: "shipName",
      sorter: (a, b) => a.shipName.localeCompare(b.shipName),
    },
    {
      title: "Hãng tàu",
      dataIndex: "shipBrand",
      key: "shipBrand",
      sorter: (a, b) => a.shipBrand.localeCompare(b.shipBrand),
    },
  ];

  const onChange: TableProps<Ship>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const formItem = (
    <>
      <Form.Item
        className="antd-form__item"
        name="shipId"
        label="Ship ID"
        rules={[{ required: true, message: "Please input the ship ID!" }]}
        required={false}
      >
        <Input placeholder="Enter ship ID" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="shipName"
        label="Ship Name"
        rules={[{ required: true, message: "Please input the ship name!" }]}
        required={false}
      >
        <Input placeholder="Enter ship name" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="shipBrand"
        label="Ship Brand"
        rules={[{ required: true, message: "Please input the ship brand!" }]}
        required={false}
      >
        <Input placeholder="Enter ship brand" />
      </Form.Item>
    </>
  );

  const rowClassName = (record: Ship) => {
    return record.shipId === selectedRowKey ? "selected-row" : "";
  };

  return (
    <>
        <LayoutContent
          layoutType={2}
          content1={
            <div className="tableHT">
              <Table<Ship>
                columns={columns}
                pagination={{ pageSize: 14 }}
                dataSource={data}
                onChange={onChange}
                rowClassName={rowClassName}
                onRow={(record) => ({
                  onClick: () => onRowClick(record),
                })}
                scroll={{ x: "max-content" }}
              />
            </div>
          }
          content2={
            <Form
              form={form}
              colon={false}
              onFinish={isEditing ? handleSave : undefined}
              layout="vertical"
              className="antd-form"
            >
              {formItem}
              <Form.Item style={{ textAlign: "right" }}>
                {isEditing ? (
                  <>
                    <Button
                      style={{
                        padding: "20px",
                        borderRadius: "10px",
                        fontWeight: "bold",
                      }}
                      type="primary"
                      htmlType="submit"
                    >
                      <FaRegSave size={20} /> Lưu
                    </Button>
                    <Button
                      danger
                      style={{
                        marginLeft: "10px",
                        padding: "20px",
                        borderRadius: "10px",
                        fontWeight: "bold",
                      }}
                      onClick={handleDelete}
                    >
                      <RiDeleteBin6Line size={20} /> Xóa
                    </Button>
                  </>
                ) : (
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    <IoIosAddCircle size={20} /> Thêm mới
                  </Button>
                )}
              </Form.Item>
            </Form>
          }
        />
    </>
  );
}

export default ShipDefinition;
