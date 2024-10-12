import React from "react";
import { Button } from "antd";
import { FaRegSave } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

type ActionButtonsProps = {
  onAdd: () => void;
  onSave: () => void;
  onDelete: () => void;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onAdd,
  onSave,
  onDelete,
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
      <>
        <Button
          type="primary"
          onClick={onAdd}
          style={{
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          <IoIosAddCircle size={20} /> Add New
        </Button>
        <Button
          type="primary"
          onClick={onSave}
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "orange",
            fontWeight: "bold",
          }}
        >
          <FaRegSave size={20} /> Save
        </Button>
        <Button
          danger
          onClick={onDelete}
          style={{
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          <RiDeleteBin6Line size={20} /> Delete
        </Button>
      </>
    </div>
  );
};

export default ActionButtons;
