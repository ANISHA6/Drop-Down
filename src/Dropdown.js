import { useState } from "react";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Yes", "Probably not"];
  return (
    <div className="container">
      <div className="dropdown">
        <div className="text-div">
          <h1 className="text">Should you use a dropdown ?</h1>
        </div>
        <div
          className="dropdown-btn"
          onMouseOver={(e) => setIsActive(!isActive)}
        >
          {selected}
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5485/5485853.png"
              alt="img"
            ></img>{" "}
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
