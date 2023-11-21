import { useForm } from "react-hook-form";
import LottiePlayer from "react-lottie-player";
import * as icon from "../../sent.json";
// import Sentpage from "./Sentpage";
const ContactMe = () => {


  const {
    register,
  } = useForm();

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50 text-black`;
  return (
    <div id="CONTACT" className=" min-h-screen flex items-center justify-center bg-black text-white">
      <div className="row">
        <p className="text-[24px] m-0 text-center md:text-left">Contact Me</p>
        <div className="border-top">

       
        <div className="w-full text-white">
            <div className="flex flex-col items-center justify-center md:p-12 md:flex-row">
              {/* left side */}
              <div className="md:w-1/2">
                <form
                  method="POST"
                  action="https://formsubmit.co/mohtotonchy@gmail.com"
                  className="mt-[50px] text-white"
                >
                  <div className="w-[350px]">
                    <label>
                      Your Name: <span>*️</span>
                    </label>
                    <input
                      type="text"
                      className={inputStyles}
                      {...register("Full Name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </div>
                  <div className="w-[350px]">
                    <label>
                      Email Address <span>*️</span>
                    </label>
                    <input
                      type="text"
                      className={inputStyles}
                      {...register("Email Address", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                  </div>
                  <div className="w-[350px]">
                    <label>
                      Message <span>*️</span>
                    </label>
                    <input
                      type="text"
                      className={inputStyles}
                      {...register("Message", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </div>

                  <button
                    type="submit"
                    className=" uppercase w-[350px] bg-[#ec4e39] hover:bg-brown-700 text-white font-bold py-3 px-4 rounded-lg"
                  >
                    submit
                  </button>
                  <input type="hidden" name="_next" value="http://localhost:5173/Confirmation"></input>
                </form>

              </div>

              {/* right side */}

              <div className="w-1/2 flex items-center justify-center">
                <LottiePlayer animationData={icon} loop play className="w-[350px] object-contain"/>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
