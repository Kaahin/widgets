import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };
  // loopa igenom varje item och ge oss varje information av varje accordion.
  const renderedItems = items.map((item, index) => {
    // räkna ut vilken flik som är öppen.
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
