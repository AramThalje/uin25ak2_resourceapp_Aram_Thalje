import React, { useEffect } from "react";
import Nav from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const currentDate = new Date();

  const navigate = useNavigate();
  

  useEffect(() => {
    navigate("/html", { replace: true });
  }, []); // Empty array: runs only on initial load or refresh

  return (
    <>
      <section>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </section>
      
      <footer>&copy; {currentDate.getFullYear()}</footer>
    </>
  );
}

export default Layout;
