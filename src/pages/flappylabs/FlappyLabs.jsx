import React from "react";
import "./flappylabs.css";
import CommonGradiantButton from "../../components/common gradiant button/CommonGradiantButton";
import { TbCloudComputing } from "react-icons/tb";
import { BsBriefcase,BsTwitter } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {AiFillGithub} from "react-icons/ai"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// staked collection card demo data
let cardData = [
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/radrugs_logo-768x768.png",
    title: "RadRugs",
    details:
      "Multi-chain #NFT app to help you #DYOR. Stake your RadRugs NFT and get $SAFE",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/tNxppJQdSYHi-H8nIuRma-Ap2gp3W13WUgdvGq5bx1s-1024x1024.png",
    title: "Narentines",
    details:
      "The Narentines is a collection of 3333 randomly generated NFTs living on the Solana blockchain",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/ppbE5XK172cmdCFf4R6ckIlW_zHlB4xRcYm-TEdxucE.webp",
    title: "Fellowship DAO",
    details:
      "The Fellowship is a community of creators, artists, developers, and Solana enthusiasts",
  },
  {
    image:
      "	https://testing.thernloven.com/examples/wp-content/uploads/2023/02/3958.webp",
    title: "Stoned Ninjas",
    details:
      "4200 Stoned Ninjas from The Ninjas Collection. Daily rewards of $KUNAI utility token",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/2204-768x796.jpeg",
    title: "BrainDead",
    details:
      "Brainless people need to die in order to resurrect and start their braindead life",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/67JyuVofgGlisi1B0WXmjHAyg_Z8-IYhJ0XY9xiiMzk.webp",
    title: "Angry DAO",
    details:
      "Game-FI DAO and P2E Games. Earn $ANGRY. #NEAR & #Solana. Ascend with the Key",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/3HcNb4ubI4Ge8yXy2OVahhYcO-OLjDbWWsCwBbrXR54-1024x1024.png",
    title: "ApeX Club",
    details:
      "Staking will be used to earn $APX coins. Each staked Ape will earn 1 $APX in every 24 hours",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/3958.webp",
    title: "Blockchain Ballers",
    details:
      "They’re an ASIC mining backed NFT with a core of degenerative soul art",
  },
  {
    image:
      "	https://testing.thernloven.com/examples/wp-content/uploads/2023/02/logo-6-768x768.png",
    title: "Solana Faction Cards",
    details:
      "Solana Faction Cards enables staking, governance and cross-chain multiverse",
  },
  {
    image:
      "	https://testing.thernloven.com/examples/wp-content/uploads/2023/02/FYCREtNX0AQZ4xz-768x765.jpeg",
    title: "BLXCK-FLIP",
    details:
      "BLXCK-FLIP are 5555 generated art NFTs directly relating to mainstream media events",
  },
  {
    image:
      "	https://testing.thernloven.com/examples/wp-content/uploads/2023/02/bubba-chimp-crew.png",
    title: "Bubba chimp crew",
    details:
      "This is the staking page for the awesome Bubba Chimp Crew! Bubba Bubba ♥",
  },
  {
    image:
      "https://testing.thernloven.com/examples/wp-content/uploads/2023/02/KlZLVGUtSYP_KTHQT1m6B9CyBiz1kqr-3f_p-cGlARk-1024x1024.png",
    title: "Arctic Frenz",
    details:
      "An exclusive family, 69 NFTs per collection. Liquidity added to a Raydium LP for rewarding",
  },
];

const FlappyLabs = () => {
  return (
    <>
      <div className="max-w-container px-[10px] mx-auto">
        {/* banner start */}
        <div className="pt-[30vh] md:pt-[45vh] ">
          <h1 className="font-lexend text-white font-light mb-5 capitalize w-full md:w-[70%] text-[30px] md:text-[45px] lg:text-[75px] leading-[35px] md:leading-[50px] lg:leading-[85px]">
            Three words, Solana NFT staking. <br />
            <span className="gradiant-text  font-thin"> One price, free.</span>
          </h1>
          <p className="text-white font-nokora mb-10 text-[18px] md:text-[28px] font-thin">
            Setting up a staking website for your project is a{" "}
            <span className="gradiant-text font-raleway font-semibold italic">
              breeze.
            </span>
          </p>
          <div className="inline-block">
            <CommonGradiantButton title="set up staking" />
          </div>
        </div>
        {/* banner end */}
        {/* services start */}
        
     <ParallaxProvider>
     <div className="py-[20vh] md:py-[30vh] flex flex-col md:flex-row gap-y-20 gap-x-7 ">
          <Parallax speed={-10} className="w-full md:w-[25%] text-white">
            <TbCloudComputing className="text-[40px] duration-300 hover:scale-[1.1] font-thin mb-[20px] md:mb-[45px]" />
            <h4 className="font-raleway font-semibold text-[18px] md:text-[28px] mb-4">
              Escrow staking
            </h4>
            <p className="font-nokora text-[18px] text-gray font-thin">
              Fully on-chain solution. Staked NFTs secured in the escrow wallet.
              Reward stakers with your own token or native SOL.
            </p>
          </Parallax>

          <Parallax speed={10} className="w-full md:w-[25%] text-white">
            <BsBriefcase className="text-[40px] duration-300 hover:scale-[1.1] font-thin mb-[20px] md:mb-[45px]" />
            <h4 className="font-raleway font-semibold text-[18px] md:text-[28px] mb-4">
              Self-service
            </h4>
            <p className="font-nokora text-[18px] text-gray font-thin">
              No need to contact the team. Follow a simple wizard and get your
              staking website up and running in less than 10 minutes.
            </p>
          </Parallax>

          <Parallax speed={20} className="w-full md:w-[25%] text-white">
            <GiWallet className="text-[40px] duration-300 hover:scale-[1.1] font-thin mb-[20px] md:mb-[45px]" />
            <h4 className="font-raleway font-semibold text-[18px] md:text-[28px] mb-4">
              Free, forever
            </h4>
            <p className="font-nokora text-[18px] text-gray font-thin">
              The service is completely free to the project. We charge a small
              transaction fee (0.01 SOL) to stakers for stake & unstake.
            </p>
          </Parallax>

          <Parallax speed={30} className="w-full md:w-[25%] text-white">
            <VscTools className="text-[40px] duration-300 hover:scale-[1.1] font-thin mb-[20px] md:mb-[45px]" />
            <h4 className="font-raleway font-semibold text-[18px] md:text-[28px] mb-4">
              Creator tools
            </h4>
            <p className="font-nokora text-[18px] text-gray font-thin">
              Staking analytics, customization, holder snapshot, token
              management, configuration updates, and more.
            </p>
          </Parallax>
        </div>
     </ParallaxProvider>
        {/* services end */}
        {/* stacked collection cards start */}
        <ParallaxProvider>

        <Parallax speed={30}>
        <h2 className="text-white mb-[30px] font-raleway font-semibold text-center text-[30px] md:text-[45px]">
          80,000+ NFTs, from <span className="gradiant-text ">250+</span>{" "}
          collections, already staked!
        </h2>
        </Parallax>
        </ParallaxProvider>

        <div className="flex flex-col md:flex-row flex-wrap justify-between  gap-y-10 md:gap-y-20">
          {cardData.map((item) => (
            <div key={item.image} className="md:w-[23%]  group text-white overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt=""
                className="group-hover:scale-[1.1] duration-500"
              />
              <div className="bg-softblack p-5 rounded-b-2xl text-white relative z-10">
                <h4 className="font-raleway font-semibold text-[18px] md:text-[24px] mb-3">
                  {item.title}
                </h4>
                <p className="font-nokora text-[16px] text-gray font-thin">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* stacked collection cards end */}
      </div>
      {/* join us start */}
      <div className="bg-pinkGradiant mt-20">
        <div className="max-w-container px-[10px] mx-auto py-10 md:py-20">
          <p className="font-lexend text-white text-[20px] text-center md:text-[25px] font-thin ">
            FloppyLabs is a revenue sharing staking-as-a-service platform
            focused on quality, speed, and self-service. Free and painless
            set-up for the project owner. Revenue stream generated through small
            transaction fees will be shared with FloppyHeads NFTs holders,
            minting in April 2022.
          </p>
          <div className="mt-8 md:flex  gap-y-4  justify-center gap-x-8">
            <div className="inline-block">
              <CommonGradiantButton title="join our discord" />
            </div>
            <div className="inline-block mt-[20px] md:mt-0">
              <CommonGradiantButton title="follow us on twitter" />
            </div>
          </div>
        </div>
      </div>
      {/* join us end */}
      {/* footer start */}
      <div className="bg-black py-10">
        <div className="max-w-container mx-auto px-[10px] flex flex-col gap-y-5 justify-center items-center text-white">
             <img src="https://testing.thernloven.com/examples/wp-content/uploads/elementor/thumbs/Screen_Shot_2023-02-23_at_6.09.54_PM-removebg-preview-q2sd4f64qn28c1i5o3a1xaf83qk7nquzpm4yxy8x6o.png" className="w-[190px]" alt="" />
             <ul className="flex gap-x-5"> 
                    <li><Link className="text-[20px]"><AiFillGithub/></Link></li>
                    <li><Link className="text-[20px]"><BsTwitter/></Link></li>
             </ul>
             <a href="#"> hello@floppylabs.io</a>
        </div>
      </div>
      {/* footer end */}
    </>
  );
};

export default FlappyLabs;
