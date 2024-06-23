import Image from "../images/man.png";
import Underline from "../images/underline.png";

export default function Landing() {
  return (
    <div className="px-5 pt-6">
      <div className="flex flex-col md:items-center w-fit mx-auto">
        <p className="italics font-semibold text-[0.87rem]">
          Igniting a Revolution in HR Innovation
        </p>
        <img src={Underline} alt="" className=" self-end w-[110px] md:w-[13vw]" />
      </div>
      <div className="md:flex md:flex-row lg:flex-nowrap">
        <div>
          <div className="mt-6 mb-6">
            <h1 className="font-bold text-3xl text-center">
              getlinked Tech Hackathon{" "}
              <span className=" text-[#d434fe]">1.0</span>
            </h1>
            <p className="text-center text-sm font-[500] pt-2 pb-4">
              Particpate in getlinked tech Hackathon 2023, stand a chance to win a
              Big prize
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/"
                className="inline-block text-center register px-10 py-3 rounded text-sm font-[500]"
              >
                Register
              </a>
            </div>
          </div>
          <div className="numbers flex justify-evenly mb-4">
            <p className="text-4xl font-bold lg:text-[9.1vh]">
              00<span className="text-base lg:text-[3.2vh]">H</span>
            </p>
            <p className="text-4xl font-bold lg:text-[9.1vh]">
              00<span className="text-base lg:text-[3.2vh]">M</span>
            </p>
            <p className="text-4xl font-bold lg:text-[9.1vh]">
              00<span className="text-base lg:text-[3.2vh]">S</span>
            </p>
          </div>
        </div>
        <div>
        <img
          src={Image}
          className=" md:h-auto md:w-[40vw]  lg:w-auto lg:h-[40vh]"
          alt="Image of a man wearing VR goggles and touching a globe"
        />
      </div>
      </div>
    </div>
  );
}
