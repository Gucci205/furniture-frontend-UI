import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />  
        {/* Home page, error page, etc.. will be appear in Outlet */}
      </div>
    </>
  );
}

export default RootLayout;

// these components will be on every screen that changed, we keep it in RootLayout file