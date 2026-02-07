import React, { useState } from "react";

const items = Array.from({ length: 50 }, (_, i) => `Option ${i + 1}`);
const PAGE_SIZE = 5;

const DropdownInfiniteScroll = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleScroll = (e:any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setVisibleCount((prev) =>
        Math.min(prev + PAGE_SIZE, items.length)
      );
    }
  };

  return (
    <div style={{ width: "200px" }} className="mx-auto mt-5">
      <div
        style={{
          border: "1px solid #ccc",
          maxHeight: "150px",
          overflowY: "auto",
          padding: "5px"
        }}
        onScroll={handleScroll}
      >
        {items.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            style={{
              padding: "6px",
              borderBottom: "1px solid #eee",
              cursor: "pointer"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownInfiniteScroll;
