"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal, Table, Checkbox } from "antd";
import ActionButtons from "@/components/action-button";
import LayoutContent from "@/components/layoutContent";
import { ShipInfo } from "@/model/ship-definition/shipInfo";

import EditableCell from "@/components/editableCell";
import generateFieldConfig from "@/utils/validationEditCell";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

const shipFields = {
  bay: Number,
  tier: Number,
  khoang: Number,
};
// Sinh ra fieldConfig tự động dựa trên shipFields
const fieldConfig = generateFieldConfig(shipFields);
function InfoShip() {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingRows, setEditingRows] = useState<number[]>([]); // Chỉ lưu id của các row đang được chỉnh sửa
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [data, setData] = useState<ShipInfo[]>([
    { id: 1, bay: 1, tier: 2, khoang: 3 },
    { id: 2, bay: 2, tier: 3, khoang: 4 },
  ]);

  const [rowForms, setRowForms] = useState<{ [key: number]: ShipInfo }>({});

  const isEditing = (record: ShipInfo) => editingRows.includes(record.id);

  const onRowDoubleClick = (record: ShipInfo) => {
    if (!isEditing(record)) {
      setEditingRows([...editingRows, record.id]);
      setRowForms((prev) => ({
        ...prev,
        [record.id]: { ...record },
      }));
    }
  };

  const saveAll = () => {
    try {
      // Mảng để lưu các hàng đã được chỉnh sửa
      const updatedRows = [];

      const updatedData = data.map((row) => {
        if (rowForms[row.id]) {
          const hasChanges = Object.keys(rowForms[row.id]).some(
            (key) => rowForms[row.id][key] !== row[key as keyof ShipInfo]
          );

          if (hasChanges) {
            updatedRows.push(rowForms[row.id]); // Thêm các hàng đã chỉnh sửa vào mảng
            return { ...rowForms[row.id] }; // Cập nhật hàng đã chỉnh sửa
          }
        }
        return row;
      });

      // Cập nhật dữ liệu trong state
      setData(updatedData);

      // Log ra mảng các hàng đã chỉnh sửa
      if (updatedRows.length > 0) {
        console.log("Updated rows:", updatedRows);
      } else {
        console.log("No rows updated.");
      }

      // Xóa trạng thái chỉnh sửa và form
      setEditingRows([]);
      setRowForms({});
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  const handleDelete = () => {
    const newData = data.filter((item) => !selectedRows.includes(item.id));
    setData(newData);
    setSelectedRows([]);
  };

  const handleAdd = (values: ShipInfo) => {
    const newData = {
      id: data.length + 1,
      bay: values.bay,
      tier: values.tier,
      khoang: values.khoang,
    };
    toast.success("Thêm thành công");
    setData([...data, newData]);
    setModalVisible(false);
    form.resetFields();
  };

  const handleSelect = (id: number) => {
    const updatedSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((selectedId) => selectedId !== id)
      : [...selectedRows, id];
    setSelectedRows(updatedSelectedRows);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(data.map((row) => row.id)); // Chọn tất cả
    } else {
      setSelectedRows([]); // Bỏ chọn tất cả
    }
  };

  const columns = [
    {
      title: "",
      dataIndex: "key",
      key: "index",
      width: "50px",
      render: (_, __, index) => index + 1,
    },
    {
      title: (
        <Checkbox
          checked={selectedRows.length === data.length}
          indeterminate={
            selectedRows.length > 0 && selectedRows.length < data.length
          }
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
      ),
      width: "50px",
      dataIndex: "select",
      key: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedRows.includes(record.id)}
          onChange={() => handleSelect(record.id)}
        />
      ),
    },
    {
      title: "Số bay",
      dataIndex: "bay",
      key: "bay",
      editable: true,
      sorter: (a, b) => a.bay - b.bay,
    },
    {
      title: "Số tier",
      dataIndex: "tier",
      key: "tier",
      editable: true,
      sorter: (a, b) => a.tier - b.tier,
    },
    {
      title: "Số khoang",
      dataIndex: "khoang",
      key: "khoang",
      editable: true,
      sorter: (a, b) => a.khoang - b.khoang,
    },
  ].map((col) => ({
    ...col,
    onCell: (record: ShipInfo) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
      onUpdateRow: (updatedRow: ShipInfo) => {
        setRowForms((prev) => {
          const previousRow = prev[record.id] || record;
          // Chỉ cập nhật giá trị nào đã thay đổi, giữ nguyên các giá trị khác
          const mergedRow = {
            ...previousRow,
            [col.dataIndex]:
              updatedRow[col.dataIndex] ?? previousRow[col.dataIndex],
          };
          return {
            ...prev,
            [record.id]: mergedRow,
          };
        });
      },
      fieldConfig,
    }),
  }));

  return (
    <>
      <LayoutContent
        layoutType={3}
        content1={
          <ActionButtons
            onAdd={() => setModalVisible(true)}
            onSave={saveAll}
            onDelete={handleDelete}
            onQuery={() => {}}
            isQueryHidden
          />
        }
        content2={
          <Form form={form} component={false}>
            <div className="tableHT">
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                columns={columns}
                pagination={{ pageSize: 14 }}
                dataSource={data}
                onRow={(record) => ({
                  onDoubleClick: () => onRowDoubleClick(record),
                })}
                scroll={{ x: "max-content" }}
                rowKey="id"
              />
            </div>
          </Form>
        }
      />
      <Modal
        title="Thêm Thông tin tàu"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <Form.Item
            name="bay"
            label="Số bay"
            className="antd-form__item"
            required={false}
            rules={[{ required: true, message: "Vui lòng nhập số bay" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            className="antd-form__item"
            required={false}
            name="tier"
            label="Số tier"
            rules={[{ required: true, message: "Vui lòng nhập số tier" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            className="antd-form__item"
            required={false}
            name="khoang"
            label="Số khoang"
            rules={[{ required: true, message: "Vui lòng nhập số khoang" }]}
          >
            <Input type="number" />
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

export default InfoShip;
