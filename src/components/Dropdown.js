import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectChange, label }) => {
  const [open, setOpen] = useState(false); // vilken dropdown som är öppen.
  // reference punkt till useRef
  const ref = useRef();

  useEffect(() => {
    // toggle current target
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      } else {
      setOpen(false);
      }
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    // ingen memory leak
    return () => {
      document.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        onClick={() => {
          onSelectChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
