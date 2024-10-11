import { Layout } from "antd";
import "./index.scss";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
const { Header } = Layout;

const HeaderMain = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Header
      style={{
        padding: 0,
        margin: collapsed ? "0px 16px 0px 250px" : "0px 16px",
      }}
      className="headerS"
    >
      <div className="headerS__title-left">
        <p>VIETNAM TERMINAL OPERATION SYSTEM</p>
        <span>Ship Planning</span>
      </div>
      <div className="headerS__title-right">
        {/* <div className="search">
          <CiSearch size={20} className="search__icon" />
          <input type="text" placeholder="Search...." />
        </div> */}
        <div className="user">
          <FaRegUser size={20} />
          <span>nguyenvana@gmail.com</span>
        </div>
        <div className="icon">
          <IoSettingsOutline size={20} />
          <IoMdNotificationsOutline size={20} />
          <IoMdLogOut size={20} />
        </div>
      </div>
    </Header>
  );
};

export default HeaderMain;
