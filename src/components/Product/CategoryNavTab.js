import React from "react";
import "./CategoryNavTab.css";

const CategoryNavTab = ({
  categoryName,
  categoryId,
  isLastCategory,
  curentlySelectedCategory,
  selectCategory,
}) => {
  return (
    <>
      <li className=" last:mr-0 flex-0 text-center last:border-r-0">
        <a
          className={`font-normal 
            text-md px-4 py-1 
            border-light  
            tracking-wide 
            navItem
            ${
              curentlySelectedCategory === categoryId
                ? "text-secondary font-semibold  border-secondary"
                : " text-body"
            }
            ${isLastCategory && " border-r-2 "}
            `}
          onClick={(e) => selectCategory(e, categoryId)}
          data-toggle="tab"
          role="tablist"
        >
          {categoryName}
        </a>
      </li>
    </>
  );
};

export default CategoryNavTab;
