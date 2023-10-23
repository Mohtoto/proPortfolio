import * as animationData from "../../react.json"; // Import your animation JSON file
import LottiePlayer from "react-lottie-player";

interface SkillProps {
  icon: any
  title: string;
  description: string;
  icon2: any;
}

const Skill = ({ title, description, icon2 , icon}: SkillProps) => {
  return (
    <div className="border-2 border-white text-[#fff] p-[20px] mt-11 flex flex-col gap-8 items-start lg:flex lg:w-1/3">
      <div className="flex items-center gap-8">
        <img src={icon} alt=""  className="w-12"/>
        <h2 className="h2-underline">{title}
        </h2>
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
