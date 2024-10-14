import React, { useState, useEffect } from "react";
import "./index.scss";
import Link from "next/link";

interface Category {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface SiderComponentsProps {
  categories: Category[];
  titleIcon: JSX.Element;
  titleText: string;
  selectedMenuItem: string; // Nhận key của category hiện tại
}

const SiderComponents: React.FC<SiderComponentsProps> = ({
  categories,
  titleIcon,
  titleText,
  selectedMenuItem, // category key
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Khi reload, lấy activeIndex từ localStorage
  useEffect(() => {
    const savedIndex = localStorage.getItem(`activeIndex_${selectedMenuItem}`);
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10)); // Lấy activeIndex từ localStorage
    } else {
      setActiveIndex(0); // Nếu chưa có thì set mặc định là 0
    }
  }, [selectedMenuItem]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    localStorage.setItem(`activeIndex_${selectedMenuItem}`, index.toString()); // Lưu lại activeIndex khi click
  };

  return (
    <div className="sider-main">
      <div className="sider-main__title">
        {titleIcon}
        <p>{titleText}</p>
      </div>
      <div className="sider-main__category">
        {categories.map((category, index) => (
          <div key={index}>
            <Link
              href={category.link}
              className={`category ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="icon">{category.icon}</div>
              <p>{category.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiderComponents;
