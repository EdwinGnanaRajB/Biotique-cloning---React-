import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../index.css";

function Layout() {
  return (
    <div className="app-container">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
