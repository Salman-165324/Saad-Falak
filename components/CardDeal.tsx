import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Licensed Consultant
        <br className="sm:block hidden" /> Nationwide Partnerships
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As a licensed consultant, I’m approved to work with leading UK lenders
        and card machine providers. This means I can compare multiple offers and
        match each business with the most suitable loan or payment solution.
      </p>
      
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" quality={100} className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
