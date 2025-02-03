import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ResponsiveNavbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
