import styles from "@/styles/style";
import { logo2 } from "@/public/assets";
import { socialMedia } from "@/constants";
import Image from "next/image";
const Footer: React.FC = () => (
  <section id="contact" className={`${styles.paddingY} flex flex-col`}>
    <div
      className={`flex xl:flex-row flex-col mb-8 w-full items-center xl:items-start justify-center xl:justify-between gap-10 xl:gap-6`}
    >
      <div className="order-1 xl:order-2 flex-[1.5] w-full flex flex-col items-center xl:items-start mt-10 xl:mt-0">
        <div className="w-full">
          <h4 className="font-poppins font-semibold text-[24px] lg:text-[32px] leading-[32px] text-white mb-8 text-center">
            Let's Discuss Your Business Goals
          </h4>

          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-4 lg:space-y-0">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span className="text-2xl">📞</span>
              <a
                href="tel:+447577004838"
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300"
              >
                Call: +44 7577 004838
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span className="text-2xl">📱</span>
              <a
                href="https://wa.me/447577004838"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300"
              >
                WhatsApp: +44 7577 004838
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span className="text-2xl">✉️</span>
              <a
                href="mailto:your@saadfalak.co.uk"
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300"
              >
                Email: your@saadfalak.co.uk
              </a>
            </div>
          </div>

          <p className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite mt-8 text-center italic">
            Available 7 days a week — connect today for expert help with your UK
            business loan or merchant card machine solutions.
          </p>
        </div>
      </div>
      <div className="order-2 xl:order-1 flex flex-col items-center text-center xl:items-start xl:text-left md:max-w-[360px] w-full">
        <Image
          src={logo2}
          alt="saad falak"
          className="w-[266px] h-[49px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[340px]`}>
          Loan Solution, Card Machine Services & Expert Financial and Merchant
          Support
        </p>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © {new Date().getFullYear()} Saad Falak. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
