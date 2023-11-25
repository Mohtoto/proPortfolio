import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  item: string
  progress: number
};



const Skill = ({ directionLeft , item , progress }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ opacity: 1 , x: 0}}
        transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border  border-gray object-cover w-18 h-18 md:w-24 md:h-24 filter group-hover:grayscale p-4"
        src={item}
      />

      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-18 w-18 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl  md:text-3xl font-bold text-black opacity-100">{progress}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
