import React from "react";


function Wrapper(props) {
  return(
  <div className = "d-flex flex-wrap p-2 mt-4 align-content-center justify-content-center">{props.children}</div>
  );
};

export default Wrapper;