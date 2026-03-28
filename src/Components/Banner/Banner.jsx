import React from "react";
import BannerIMG from "../../assets/banner-main.png";
import BackgroundIMG from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="max-w-330 mx-auto p-16 text-center space-y-4 rounded-4xl mt-6"
      style={{
        backgroundImage: ` url(${BackgroundIMG}), linear-gradient(#000000, #000000)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <img className="mx-auto" src={BannerIMG} alt="" />
        <h1 className="text-[2.5rem] text-white font-bold">
          Assemble Your Ultimate Dream
        </h1>
        <h3 className="font-medium text-[1.5rem] text-white/70  ">
          Beyond Boundaries Beyond Limits
        </h3>
        <button className="btn btn-success rounded-md bg-[#E7FE29] border-[#E7FE29] shadow-none text-black font-bold">
          Claim Free Credit
        </button>
    </div>
  );
};

export default Banner;
