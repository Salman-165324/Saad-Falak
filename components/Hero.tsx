import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold lg:text-[36px] xl:text-[42px] text-[24px] xxs:text-[28px] text-white ss:leading-[50px] leading-[37px]">
          Your Trusted UK <span className="text-gradient">Business Loan</span>{" "}
        </h1>
      </div>
      <h1 className="w-full font-poppins font-semibold lg:text-[32px] xl:text-[38px] ss:text-[28px] text-[26px] xxs:text-[26px] text-white ss:leading-[50px] leading-[37px]">
        & Merchant Card Machine Consultant
      </h1>
      <p
        className={`${styles.paragraph} max-w-[5200px] mt-5 text-sm lg:text-base`}
      >
        With over 6 years of experience in the UK payment and finance industry,
        I help business owners secure the right business loan and card machine
        solutions from trusted providers —
      </p>
      <div className="flex flex-row items-center mt-8">
        <a
          href="tel:+447577004838"
          className="flex items-center justify-center bg-blue-gradient text-white font-poppins font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <span>Call Now</span>
        </a>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="billings"
        quality={100}
        className="w-[90%] h-[90%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
