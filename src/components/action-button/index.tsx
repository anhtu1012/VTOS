import React from "react";
import { Button, Popconfirm } from "antd";
import { FaRegSave } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi"; // Icon cho nút Truy vấn

type ActionButtonsProps = {
  onAdd: () => void;
  onSave: () => void;
  onDelete: () => void;
  onQuery: () => void; // Thêm hàm cho nút Truy vấn
  isAddHidden?: boolean;
  isSaveHidden?: boolean;
  isDeleteHidden?: boolean;
  isQueryHidden?: boolean; // Ẩn hoặc hiện nút Truy vấn
};

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onAdd,
  onSave,
  onDelete,
  onQuery,
  isAddHidden = false,
  isSaveHidden = false,
  isDeleteHidden = false,
  isQueryHidden = false, // Mặc định là không ẩn
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
      <>
        {/* Button Add */}
        <Button
          type="primary"
          onClick={onAdd}
          disabled={isAddHidden}
          style={{
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
            backgroundColor: "#5DC9EF",
            color: "white",
            opacity: isAddHidden ? 0.5 : 1,
          }}
        >
          <IoIosAddCircle size={20} /> Thêm mới
        </Button>

        {/* Button Save */}
        <Button
          type="primary"
          onClick={onSave}
          disabled={isSaveHidden}
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: isSaveHidden ? "#ffcc80" : "orange", 
            fontWeight: "bold",
            opacity: isSaveHidden ? 0.5 : 1, 
          }}
        >
          <FaRegSave size={20} /> Lưu
        </Button>

        {/* Button Query */}
        <Button
          type="default"
          onClick={onQuery}
          disabled={isQueryHidden}
          style={{
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
            backgroundColor: isQueryHidden ? "#30d1b0" : "#1abc9c", 
            color: "white",
            opacity: isQueryHidden ? 0.5 : 1,
          }}
        >
          <BiSearchAlt size={20} /> Truy vấn
        </Button>

        {/* Button Delete */}
        <Popconfirm
          title="Are you sure to delete this item?"
          onConfirm={onDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button
            danger
            disabled={isDeleteHidden}
            style={{
              padding: "20px",
              borderRadius: "10px",
              fontWeight: "bold",
              opacity: isDeleteHidden ? 0.5 : 1,
            }}
          >
            <RiDeleteBin6Line size={20} /> Xóa
          </Button>
        </Popconfirm>
      </>
    </div>
  );
};

export default ActionButtons;
