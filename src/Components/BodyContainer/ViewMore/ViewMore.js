import React from "react";
import { Link } from "react-router-dom";

const ViewMore = () => {
  return (
    <div className="view-more mt-5">
      <Link to="/viewmore" style={{ textDecoration: "none" }}>
        <div className="view px-2"> View More</div>
      </Link>

      <i
        class="fa-sharp fa-solid fa-chevron-down"
        style={{ fontSize: "23px" }}
      ></i>
    </div>
  );
};

export default ViewMore;
