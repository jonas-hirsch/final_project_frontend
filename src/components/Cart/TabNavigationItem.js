import React from "react";

const TabNavigationItem = ({ cartName, index, openTab, setOpenTab }) => {
  return (
    <li className="last:mr-0 flex-auto text-center navItem">
      <a href="/#"
        className={`font-normal 
        text-md px-4 py-2 uppercase 
        tracking-wide ${
          openTab === index + 1
            ? "text-secondary  border-b-2 font-semibold border-secondary"
            : " text-body"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(index + 1);
        }}
        data-toggle="tab"
        role="tablist"
      >
        {cartName}
      </a>
    </li>
  );
};

export default TabNavigationItem;
