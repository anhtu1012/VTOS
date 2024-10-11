import React from "react";

type LayoutContentProps = {
  layoutType: number;
  content1: React.ReactNode; // Content for the left section
  content2?: React.ReactNode; // Content for the right section
};

function LayoutContent({ layoutType, content1, content2 }: LayoutContentProps) {
  if (layoutType === 1) {
    return (
      <section
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "#fff",
          padding: "12px",
          borderRadius: "10px",
        }}
      >
        {content1}
      </section>
    );
  } else if (layoutType === 2) {
    return (
      <section
        style={{
          display: "flex",
          gap: "24px",
          backgroundColor: "transparent",
          borderRadius: "10px",
        }}
      >
        <section
          style={{
            flex: 6,
            padding: "12px",
            width: "65%",
            height: "auto",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          {content1} {/* Left content */}
        </section>
        <section
          style={{
            flex: 4,
            width: "35%",
            height: "fit-content",
            padding: "12px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          {content2} {/* Right content */}
        </section>
      </section>
    );
  } else if (layoutType === 3) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          backgroundColor: "#fff",
          padding: "12px",
          borderRadius: "10px",
        }}
      >
        <div style={{ flex: 2, backgroundColor: "#fafafa", padding: "12px" }}>
          {content1}
        </div>
        <div style={{ flex: 8, backgroundColor: "#f5f5f5", padding: "12px" }}>
          {content2}
        </div>
      </div>
    );
  }

  return null;
}

export default LayoutContent;
