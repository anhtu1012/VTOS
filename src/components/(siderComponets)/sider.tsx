import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";

interface Category {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface SiderComponentsProps {
  categories: Category[];
  titleIcon: JSX.Element; // Accepting the title icon as a prop
  titleText: string;
}

const SiderComponents: React.FC<SiderComponentsProps> = ({
  categories,
  titleIcon,
  titleText,
}) => {
  // Initialize activeIndex from localStorage or set to 0
  const [activeIndex, setActiveIndex] = useState<number>(
    () => Number(localStorage.getItem("activeIndex")) || 0
  );

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  // Save activeIndex to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("activeIndex", String(activeIndex));
  }, [activeIndex]);

  return (
    <div className="sider-main">
      <div className="sider-main__title">
        {titleIcon}
        <p>{titleText}</p>
      </div>
      <div className="sider-main__category">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <Link
              href={category.link}
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
