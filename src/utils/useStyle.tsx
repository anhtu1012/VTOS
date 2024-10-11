import { createStyles } from "antd-style";
const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      .${antCls}-table-container {
        .${antCls}-table-body, .${antCls}-table-content {
          overflow-x: auto;

          scrollbar-width: thin;
          scrollbar-color: #5dc9ef #f5f5f5;

          &::-webkit-scrollbar {
            height: 6px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #5dc9ef;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-track {
            background-color: #f5f5f5;
          }
        }
      }
    `,
  };
});
export default useStyle;
