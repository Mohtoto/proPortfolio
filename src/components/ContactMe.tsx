import { useForm } from "react-hook-form";
import LottiePlayer from "react-lottie-player";
import * as icon from "../../send.json";
// import Sentpage from "./Sentpage";
const ContactMe = () => {


  const {
    register,
  } = useForm();

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50`;
  return (
    <div id="CONTACT" className=" min-h-screen flex items-center justify-center">
      <div className="row">
        <p className="text-[24px] m-0 text-black">Contact Me</p>
        <div className="w-full border-top-black">
            <div className="flex items-center justify-center p-12">
              {/* left side */}
              <div className="w-1/2">
                <form
                  method="POST"
                  action="https://formsubmit.co/mohtotonchy@gmail.com"
                  className="mt-[50px]"
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
                    className=" uppercase w-[350px] bg-[#4965E9] hover:bg-brown-700 text-white font-bold py-3 px-4 rounded-lg"
                  >
                    submit
                  </button>
                  <input type="hidden" name="_next" value="http://localhost:5173/Confirmation"></input>
                </form>

              </div>

              {/* right side */}

              <div className="w-1/2">
                <LottiePlayer animationData={icon} loop play className="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
