import { ReactNode } from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
