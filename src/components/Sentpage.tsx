import LottiePlayer from "react-lottie-player";
import * as icon from "../../animated.json";
import { FaArrowLeft } from "react-icons/fa";

const Sentpage = () => {
  return (
    <section className="background-Color h-screen">
      <div className="row">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-white md:h-[400px] md:w-[1000px] shadow-2xl rounded-lg h-[130px] w-[300px] group">
            <div className="flex items-center md:p-6">
              <div className="w-1/2 ml-6">
                <h1 className="text-black text-center md:text-[35px] text-[12px]">
                  THANK YOU FOR YOUR MESSAGE
                  <br />
                  <span className="md:text-[30px] text-[10px]">
                    SPEAK SOON!
                  </span>
                </h1>
              </div>

              <div className="w-1/2">
                <LottiePlayer
                  animationData={icon}
                  loop
                  play
                  className="md:w-[350px] object-contain"
                />
              </div>
            </div>
          </div>
      
          <a href="/" className="flex items-center mt-5 gap-2">
            <FaArrowLeft className="text-white" />
            <h1 className="text-white">BACK HOME</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sentpage;
