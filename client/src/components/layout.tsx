import type { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen container mx-auto py-8 md:px-16">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
