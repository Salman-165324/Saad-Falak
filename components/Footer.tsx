import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { socialMedia } from "@/constants";
import Image from "next/image";
const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payment easy, reliable amd secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-col md:items-center items-start md:mt-0 mt-10">
        <div className="w-full max-w-[600px]">
          <h4 className="font-poppins font-semibold text-[24px] leading-[32px] text-white mb-8 text-center">
            Let's Discuss Your Business Goals
          </h4>

          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-4 lg:space-y-0">
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
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            src={social.icon}
            key={social.id}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
