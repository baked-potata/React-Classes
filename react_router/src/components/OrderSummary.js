import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary(props) {
  const navigate = useNavigate();
  return (
    <div>
      order Summary
      <button className="btn btn-success" onClick={() => navigate(-1)}>
        go back
      </button>
    </div>
  );
}

export default OrderSummary;
