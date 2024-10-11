"use client";
import React, { useState } from "react";
import { Table, ConfigProvider, Form, Input, Button } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import "./index.scss";
import LayoutContent from "@/components/layoutContent";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  occupation: string;
  company: string;
  hobby: string;
  status: string;
}

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    email: "john.brown@example.com",
    phone: "123-456-7890",
    occupation: "Developer",
    company: "Tech Corp",
    hobby: "Reading",
    status: "Active",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    email: "jim.green@example.com",
    phone: "098-765-4321",
    occupation: "Designer",
    company: "Creative Co",
    hobby: "Traveling",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    email: "joe.black@example.com",
    phone: "234-567-8901",
    occupation: "Developer",
    company: "Tech Corp",
    hobby: "Gaming",
    status: "Active",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    email: "jim.red@example.com",
    phone: "345-678-9012",
    occupation: "Designer",
    company: "Creative Co",
    hobby: "Photography",
    status: "Inactive",
  },
];

function Planning() {
  const [form] = Form.useForm();
  const [selectedRowKey, setSelectedRowKey] = useState<React.Key | null>(null); // State for selected row key
  const [isEditing, setIsEditing] = useState(false); // State to toggle between submit and save/delete
  const [selectedData, setSelectedData] = useState<DataType | null>(null); // State for storing selected row data

  const onRowClick = (record: DataType) => {
    if (record.key === selectedRowKey) {
      // If the same row is clicked again, reset the form and state
      form.resetFields(); // Clear the form fields
      setSelectedRowKey(null); // Deselect the row
      setSelectedData(null); // Reset the selected data
      setIsEditing(false); // Switch back to submit mode
    } else {
      // If a different row is clicked, populate the form and set the row as selected
      setSelectedRowKey(record.key); // Set selected row key
      setSelectedData(record); // Store the data of the selected row
      setIsEditing(true); // Toggle the form to editing mode
      form.setFieldsValue(record); // Populate the form with the selected row data
    }
  };

  const handleSave = (values: DataType) => {
    console.log("Saved Values: ", values);
    // Handle saving the edited data
  };

  const handleDelete = () => {
    console.log("Deleted Record: ", selectedData);
    // Handle deletion of the selected row
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "key",
      key: "index",
      render: (_, __, index) => index + 1,
      sorter: (a, b) => a.key - b.key,
      fixed: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            { text: "Green", value: "Green" },
            { text: "Black", value: "Black" },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
      fixed: "left",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
      filters: [
        { text: "Developer", value: "Developer" },
        { text: "Designer", value: "Designer" },
      ],
      onFilter: (value, record) =>
        record.occupation.indexOf(value as string) === 0,
      sorter: (a, b) => a.occupation.localeCompare(b.occupation),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      sorter: (a, b) => a.company.localeCompare(b.company),
    },
    {
      title: "Hobby",
      dataIndex: "hobby",
      key: "hobby",
      filters: [
        { text: "Reading", value: "Reading" },
        { text: "Traveling", value: "Traveling" },
      ],
      onFilter: (value, record) => record.hobby.indexOf(value as string) === 0,
      sorter: (a, b) => a.hobby.localeCompare(b.hobby),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const formItem = (
    <>
      {" "}
      <Form.Item
        className="antd-form__item"
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the name!" }]}
        required={false}
      >
        <Input placeholder="Enter name" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="age"
        label="Age"
        rules={[{ required: true, message: "Please input the age!" }]}
        required={false}
      >
        <Input type="number" placeholder="Enter age" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input the address!" }]}
        required={false}
      >
        <Input placeholder="Enter address" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input the email!",
          },
        ]}
        required={false}
      >
        <Input type="email" placeholder="Enter email" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="phone"
        label="Phone"
        rules={[{ required: true, message: "Please input the phone!" }]}
        required={false}
      >
        <Input placeholder="Enter phone number" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="occupation"
        label="Occupation"
        rules={[{ required: true, message: "Please input the occupation!" }]}
        required={false}
      >
        <Input placeholder="Enter occupation" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="company"
        label="Company"
        rules={[{ required: true, message: "Please input the company!" }]}
        required={false}
      >
        <Input placeholder="Enter company" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="hobby"
        label="Hobby"
        rules={[{ required: true, message: "Please input the hobby!" }]}
        required={false}
      >
        <Input placeholder="Enter hobby" />
      </Form.Item>
      <Form.Item
        className="antd-form__item"
        name="status"
        label="Status"
        rules={[{ required: true, message: "Please input the status!" }]}
        required={false}
      >
        <Input placeholder="Enter status" />
      </Form.Item>
    </>
  );

  const rowClassName = (record: DataType) => {
    return record.key === selectedRowKey ? "selected-row" : "";
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5DC9EF",
            colorBgHeader: "#5DC9EF",
          },
        }}
      >
        <LayoutContent
          layoutType={2}
          content1={
            <div className="tableHT">
              <Table<DataType>
                columns={columns}
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
      </ConfigProvider>
    </>
  );
}

export default Planning;
