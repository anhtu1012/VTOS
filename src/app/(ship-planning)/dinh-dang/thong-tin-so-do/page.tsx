"use client";
import ActionButtons from "@/components/action-button";
import LayoutContent from "@/components/layoutContent";
import { Button, Form, Input, Modal, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

interface ShipInfo {
  bay: number;
  tier: number;
  khoang: number;
}

function InfoShip() {
  const [form] = Form.useForm();
  const [editingRow, setEditingRow] = useState<ShipInfo | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [editingRow, setEditingRow] = useState<ShipInfo | null>(null);
  const isEditing = (record: ShipInfo) => editingRow?.bay === record.bay;

  const onRowDoubleClick = (record: ShipInfo) => {
    if (isEditing(record)) {
      // If the row is already being edited, close it
      setEditingRow(null);
      form.resetFields(); // Reset form if editing is canceled
    } else {
      // Set the clicked row as the editing row and populate the form
      setEditingRow(record);
      form.setFieldsValue({ ...record });
    }
  };

  // // Cancel editing for the row
  // const cancel = () => {
  //   setEditingKeys([]);
  //   form.resetFields();
  // };

  const saveAll = async () => {
    try {
      const currentValues = await form.validateFields();
      const newData = data.map((item) => {
        if (editingRow && item.bay === editingRow.bay) {
          return { ...item, ...currentValues };
        }
        return item;
      });

      setData(newData);
      setEditingRow(null); // Clear editing row after save
      form.resetFields(); // Reset form fields
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  // Add new entry handler
  // const handleAdd = () => {
  //   setIsModalVisible(true);
  //   form.resetFields();
  // };

  const handleSave = (values: ShipInfo) => {
    const newShip: ShipInfo = { bay: data.length + 1, ...values };
    setData([...data, newShip]);
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    if (editingRow) {
      const newData = data.filter((item) => item.bay !== editingRow.bay);
      setData(newData);
      setEditingRow(null); // Clear editing row after delete
      form.resetFields(); // Reset form fields
    }
  };

  const columns: TableColumnsType<ShipInfo> = [
    {
      title: "",
      dataIndex: "key",
      key: "index",
      width: "50px",
      editable: true,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Số bay",
      dataIndex: "bay",
      key: "bay",
      editable: true,
      sorter: (a, b) => parseInt(a.bay) - parseInt(b.bay),
    },
    {
      title: "Số tier",
      dataIndex: "tier",
      key: "tier",
      editable: true,
      sorter: (a, b) => parseInt(a.tier) - parseInt(b.tier),
    },
    {
      title: "Số khoang",
      dataIndex: "khoang",
      key: "khoang",
      editable: true,
      sorter: (a, b) => parseInt(a.khoang) - parseInt(b.khoang),
    },
  ].map((col) => ({
    ...col,
    onCell: (record: ShipInfo) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
    }),
  }));

  const [data, setData] = useState<ShipInfo[]>([
    {
      bay: 1,
      tier: 2,
      khoang: 3,
    },
    {
      bay: 2,
      tier: 3,
      khoang: 4,
    },
    {
      bay: 3,
      tier: 1,
      khoang: 2,
    },
    {
      bay: 4,
      tier: 4,
      khoang: 5,
    },
    {
      bay: 5,
      tier: 5,
      khoang: 6,
    },
    {
      bay: 6,
      tier: 6,
      khoang: 7,
    },
    {
      bay: 7,
      tier: 7,
      khoang: 8,
    },
    {
      bay: 8,
      tier: 8,
      khoang: 9,
    },
    {
      bay: 9,
      tier: 9,
      khoang: 10,
    },
    {
      bay: 10,
      tier: 10,
      khoang: 11,
    },
    {
      bay: 11,
      tier: 11,
      khoang: 12,
    },
    {
      bay: 12,
      tier: 12,
      khoang: 13,
    },
    {
      bay: 13,
      tier: 13,
      khoang: 14,
    },
    {
      bay: 14,
      tier: 14,
      khoang: 15,
    },
    {
      bay: 15,
      tier: 15,
      khoang: 16,
    },
  ]);

  // const rowClassName = (record: ShipInfo) => (selectedRow && record.bay === selectedRow.bay ? "selected-row" : "");

  const closeModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      <LayoutContent
        layoutType={3}
        content1={
          <ActionButtons
            onAdd={() => setIsModalVisible(true)}
            onSave={saveAll}
            onDelete={handleDelete}
          />
        }
        content2={
          <Form form={form} component={false}>
            <div className="tableHT">
              <Table<ShipInfo>
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                columns={columns}
                pagination={{ pageSize: 14 }}
                dataSource={data}
                // rowClassName={rowClassName}
                onRow={(record) => ({
                  onDoubleClick: () => onRowDoubleClick(record),
                })}
                scroll={{ x: "max-content" }}
              />
            </div>
          </Form>
        }
      />
      <Modal
        title={"Add New Ship"}
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <Form form={form} colon={false} onFinish={handleSave} layout="vertical">
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
            rules={[
              { required: true, message: "Please input the ship brand!" },
            ]}
            required={false}
          >
            <Input placeholder="Enter ship brand" />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              <IoIosAddCircle size={20} /> Add New
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
const EditableCell: React.FC<any> = ({
  editing,
  dataIndex,
  title,
  children,
  ...restProps
}) => {
  // Validate if the value is numeric and not empty
  const validateNumeric = (value: any) => {
    return (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !isNaN(value) &&
      Number.isFinite(Number(value))
    );
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
            },
            {
              validator: (_, value) => {
                return validateNumeric(value)
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(`${title} must be a valid number!`)
                    );
              },
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export default InfoShip;
