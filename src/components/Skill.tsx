import * as animationData from "../../react.json"; // Import your animation JSON file
import LottiePlayer from "react-lottie-player";

interface SkillProps {
  title: string;
  description: string;
  icon2: any;
}

const Skill = ({ title, description, icon2 }: SkillProps) => {
  return (
    <div className="border-2 border-white text-white p-8 mt-11 flex flex-col gap-4 items-center">
      <div className="flex items-center justify-start">
        <LottiePlayer
          animationData={animationData}
          loop
          play
          className="lg:w-[50px] w-[350px]"
        />
        <h2>{title}</h2>
      </div>

      <div className="flex items-center line ">
        <div className="content-h3">
          <p className="ml-8">{description}</p>

        </div>
        {/* <img src={icon2} alt="" className="w-14" /> */}
      </div>
    </div>
  );
};

export default Skill;
