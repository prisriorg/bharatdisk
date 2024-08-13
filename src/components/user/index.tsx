import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import navData from "./Datas";

export const UserHome = ({ page }: { page: string }) => {
  const currentPage = navData.find((item) => page === item.link);
  return (
    <div className="main-background">
      <Header activeLink={page}></Header>
      <div className="sm:ml-64  mt-14 ">
        <div className="p-4  rounded-lg">
          {currentPage ? currentPage.page : <p>Page not found</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};
