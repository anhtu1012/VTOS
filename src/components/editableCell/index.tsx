import React from "react";
import { Form, Input, Checkbox, DatePicker, InputNumber } from "antd";
import moment from "moment";

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: string;
  record: any;
  rowForms: any;
  onUpdateRow: (updatedRow: any) => void;
  fieldConfig: any; // Nhận fieldConfig từ component cha
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  record,
  rowForms = { ...record },
  fieldConfig, // Nhận fieldConfig
  children,
  ...restProps
}) => {
  const getInputComponent = () => {
    const config = fieldConfig[dataIndex];
    switch (config?.inputType) {
      case "number":
        return (
          <InputNumber
            defaultValue={record ? record[dataIndex] : ""}
            onChange={(value) => handleUpdateRow(value)}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            defaultChecked={record[dataIndex]}
            onChange={(e) => handleUpdateRow(e.target.checked)}
          />
        );
      case "Date":
        return (
          <DatePicker
            defaultValue={
              record[dataIndex] ? moment(record[dataIndex]) : undefined
            }
            format="YYYY-MM-DD"
            onChange={(date, dateString) => handleUpdateRow(dateString)}
          />
        );
      default:
        return (
          <Input
            type="text"
            defaultValue={record ? record[dataIndex] : ""}
            onChange={(e) => handleUpdateRow(e.target.value)}
          />
        );
    }
  };

  const handleUpdateRow = (value: any) => {
    if (record) {
      const previousRow = rowForms[record.id] || record;
      const updatedRow = {
        ...previousRow,
        [dataIndex]: value,
      };
      restProps.onUpdateRow(updatedRow);
    }
  };

  return (
    <td {...restProps}>
      {editing && fieldConfig[dataIndex] ? (
        <Form.Item
          name={`${record?.id}_${dataIndex}`}
          style={{ margin: 0 }}
          rules={fieldConfig[dataIndex].rules}
        >
          {getInputComponent()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
