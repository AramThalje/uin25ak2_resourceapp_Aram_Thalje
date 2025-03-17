import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectToHtml() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/html", { replace: true });
  }, [navigate]);

  return null;
}

 