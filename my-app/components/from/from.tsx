import React from "react";
import AddFormBrand from "../brand/addFormBrand";
import UpdateFormBrand from "../brand/updateFormBrand";

function from() {
  const flag = true;

  return (
    <div className="">{flag ? <AddFormBrand /> : <UpdateFormBrand />}</div>
  );
}

export default from;
