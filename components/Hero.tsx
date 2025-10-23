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
      <p className={`${styles.paragraph} max-w-[5200px] mt-5 text-sm lg:text-base`}>
        With over 6 years of experience in the UK payment and finance industry,
        I help business owners secure the right business loan and card machine
        solutions from trusted providers —
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
