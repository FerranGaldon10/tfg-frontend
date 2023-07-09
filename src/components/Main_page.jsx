import React from "react";

function Main_page() {
  return (
    <div className="w-screen h-screen mt-16 bg-red-300 flex">

      <div className="w-1/3 h-screen image-main1 bg-cover bg-center md:w-full lg:w-1/2"></div>
      <div className="w-1/3 h-screen image-main2 bg-cover bg-center md:hidden lg:block lg:w-1/2"></div>
      <div className="w-1/3 h-screen image-main3 bg-cover bg-center md:hidden lg:hidden"></div>

      <div className="absolute flex flex-col w-full h-full justify-center items-center">
        <img src="/Camals_MainPage.png" className="w-2/3 h-auto md:hidden" alt="" />
        <img src="/Camals_MainPage_md.png" className="w-80 h-auto hidden md:block" alt="" />
        <img src="/Camals_MainPage_Slogan.png" className="w-80 md:w-44 h-auto" alt="" />
      </div>
    </div>
  );
}

export default Main_page;


