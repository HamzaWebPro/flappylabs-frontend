import React from "react";
import CommonGradiantButton from "../../components/common gradiant button/CommonGradiantButton";

const Admin = () => {
  return (
    <div className="max-w-container mx-auto px-[10px] h-[100vh] pt-[150px] ">
      <div className="flex flex-col gap-y-5 md:flex-row gap-x-6">
        <div className="p-6 rounded-2xl flex items-center bg-transparentBlack w-full md:w-[45%]">
          <img
            className="h-[80px] md:h-[116px] w-[80px] md:w-[116px] rounded-full "
            src="https://testing.thernloven.com/examples/wp-content/uploads/2023/03/fl_pfp.gif"
            alt=""
          />

          <div className="pl-[30px]">
            <h2 className="font-lexend text-[25px] md:text-[35px]  font-bold text-white mb-1">
              FloppyLabs
            </h2>
            <p className="font-lexend text-[16px] text-white font-thin">
              Solana Staking as a Self-Service platform. Revenue sharing with
              holders.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="p-6 rounded-2xl  bg-transparentBlack w-full md:w-[27.5%]">
          <div className="pl-[30px]">
            <p className="font-lexend text-[16px] text-white font-thin mb-1">
              NFT's staked
            </p>
            <h2 className="font-lexend text-[25px] md:text-[35px] font-bold text-white mb-1">
              1307 / 1440
            </h2>
            <small className="font-lexend  text-white font-thin">
              90.76% of the total
            </small>
          </div>
        </div>
        {/*  */}
        <div className="p-6 rounded-2xl  bg-transparentBlack w-full md:w-[27.5%]">
          <div className="pl-[30px]">
            <p className="font-lexend text-[16px] text-white font-thin mb-1">
              Daily rewards / NFT
            </p>
            <h2 className="font-lexend text-[25px] md:text-[35px]  font-bold text-white mb-1">
              20 <span className="font-thin">$DISK</span>
            </h2>
            <small className="font-lexend  text-white font-thin">
              1M in rewards wallet ⧉
            </small>
          </div>
        </div>
      </div>
      <div className="bg-transparentBlack flex flex-col gap-y-5 md:flex-row items-center p-6 rounded-2xl mt-10">
        <div className="mr-0 md:mr-5 flex md:justify-center ">
          <CommonGradiantButton title="wallet" />
        </div>
        <div className="text-white font-lexend text-center md:text-left font-thin w-[100%]">
          {" "}
          <a href="#" className="uppercase">Staked</a>
        </div>
        <div className="text-white font-lexend text-center md:text-end font-thin w-[100%]">
          {" "}
          <a href="#" className="uppercase">Stake All</a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
