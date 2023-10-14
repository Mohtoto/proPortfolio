import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim, rotateX } from "../anim";
import styles from "../Link.module.scss";

interface LinkProps {
  data: Menu;
  index: number;
  key: number;
}

interface Menu {
  title: string;
  description: string;
  images: string[];
  link: string;
}

const menu: Menu[] = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["projects1.jpg", "projects2.jpg"],
    link: "#",
  },
  {
    title: "TeckStack",
    description: "To Learn Everything",
    images: ["agence1.jpg", "agence2.jpg"],
    link: "#TeckStack",
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
    link: "#TeckStack",
  },
];

interface MenuProps {
  closeMenu: () => void;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            props.closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a>FB</a>
        <a>IG</a>
        <a>IN</a>
        <a>BE</a>
      </motion.div>
    </div>
  );
}

interface LinkProps {}
const Link = (props: LinkProps) => {
  const { title, link } = props.data;

  return (
    <motion.div
      variants={rotateX}
      {...mountAnim}
      custom={Menu}
      className={styles.el}
    >
      <a href={link}>{title}</a>
    </motion.div>
  );
};
