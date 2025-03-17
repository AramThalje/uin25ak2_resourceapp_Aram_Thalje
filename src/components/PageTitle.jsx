import React from "react";

function PageTitle({ category }) {
  return <h2>{category.toUpperCase()}</h2>;
}

export default PageTitle;
