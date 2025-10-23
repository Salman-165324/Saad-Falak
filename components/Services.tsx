import styles, { layout } from "@/styles/style";
import { services } from "@/constants";
import Image from "next/image";
import { ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  index,
}) => (
  <div className="flex flex-col p-6 rounded-[20px] feature-card h-full">
    <div className="flex flex-col items-center text-center mb-6">
      <div
        className={`w-[80px] h-[80px] rounded-full bg-dimBlue ${styles.flexCenter} mb-4`}
      >
        <Image
          src={icon}
          alt="icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      <h4 className="font-poppins font-semibold text-white text-[20px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {description}
      </p>
    </div>
    <div className="flex flex-col space-y-2 mt-auto">
      {features.map((feature, featureIndex) => (
        <div key={featureIndex} className="flex items-center">
          <span className="text-green-400 mr-2">✔</span>
          <span className="font-poppins font-normal text-dimWhite text-[14px]">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => (
  <section id="services" className={`${styles.paddingY}`}>
    <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className={styles.heading2}>Our Services</h2>
          <p className={`${styles.paragraph} max-w-[1200px] mt-5 mx-auto`}>
            As a licensed consultant, I provide comprehensive financial and
            payment solutions to help UK businesses grow and succeed. From
            business loans to payment processing, I work with trusted partners
            to deliver the best options for your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
