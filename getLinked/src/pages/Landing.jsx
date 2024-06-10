import Image from "../images/man.png";
import Underline from "../images/underline.png";

export default function Landing() {
  return (
    <div className="px-5 pt-6">
      <div>
        <div className="flex flex-col md:items-center">
          <p className="italics font-semibold text-[0.87rem]">
            Igniting a Revolution in HR Innovation
          </p>
          <img src={Underline} alt="" className=" self-end w-[110px] md:self-center" />
        </div>
        <div className="mt-6 mb-6">
          <h1 className="font-bold text-3xl text-center">
            getlinked Tech Hackathon{" "}
            <span className=" text-[#d434fe]">1.0</span>
          </h1>
          <p className="text-center text-sm font-[500] pt-2 pb-4">
            Particpate in getlinked tech Hackathon 2023, stand a chance to win a
            Big prize
          </p>
          <div className="flex justify-center">
            <a
              href="/"
              className="inline-block text-center register px-10 py-3 rounded text-sm font-[500]"
            >
              Register
            </a>
          </div>
        </div>
        <div className="numbers flex justify-evenly mb-4">
          <p className="text-4xl font-bold">
            00<span className="text-base">H</span>
          </p>
          <p className="text-4xl font-bold">
            00<span className="text-base">M</span>
          </p>
          <p className="text-4xl font-bold">
            00<span className="text-base">S</span>
          </p>
        </div>
      </div>
      <div>
        <img
          src={Image}
          alt="Image of a man wearing VR goggles and touching a globe"
        />
      </div>
    </div>
  );
}
