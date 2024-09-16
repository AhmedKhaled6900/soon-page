
"use client";

import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface Props{

    t:(key:string) => string

    lang:string
}
const CountdownTimer :React.FC<Props> = ({
    lang,
    t
}) => {
  const targetDate = new Date("2024-12-31T23:59:59");

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { months, days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
    {/* <div className="relative bg-bg z-10 h-full ">

         <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30 lg:opacity-80 -z-10  ">

</div> */}
    <div className="flex justify-center items-center    ">
      <div className="text-center">

        {
            lang==="en"?
            <div className=" animated-text  my-10">
  <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
            <span className="pe-2">g</span>
           
            <span>S</span>
            <span>o</span>
            <span>o</span>
            <span>n</span>
            </div>
          :
          <div className=" ar-animated-text">

          <span>قريـــبـاََ</span>
          </div>
        }

        <h1 className="font-semibold text-2xl">
{t("soontext")}

        </h1>
        {/* <h1 className=" animated-text text-4xl font-bold mb-8 mt-8"> {t ("comingsoon")}  <hr className="mb-5 border-none" />
        <hr className="m-4 text-red-500 bg-red-500 font-bold h-[5px] border-none" />
        <span>G</span><span>r</span><span>a</span><span>d</span><span>i</span><span>e</span><span>n</span><span>t</span>
        <span>A</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
        We are still working on our website.
        <hr className="mb-5 border-none" />
         Stay tuned for updates!</h1> */}
        <hr className="m-10 hr rounded-full text-red-500 bg-red-500 font-bold  h-[5px] border-none" />
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3131	" />
              <stop offset="50%" stopColor="#F88379	" />

              <stop offset="100%" stopColor="#800020" />
            </linearGradient>
            <linearGradient id="gradientTrail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#a8a8a8" />
            </linearGradient>
          </defs>
        </svg>
               {/* counter */}

        <div className="flex justify-center items-center  gap-6" >
          {/* <div className="flex flex-col items-center">
            <CircularProgressbar 
              value={timeLeft.months}
              maxValue={12}
              text={`${timeLeft.months}m`}
              styles={buildStyles({
                pathColor: `url(#gradientColor)`,
                trailColor: `url(#gradientTrail)`,
                textColor: "#ef4444",
              })}
            />
          </div> */}
          <div className="flex flex-col items-center font-bold text-3xl">
            <CircularProgressbar
              value={timeLeft.days}
              maxValue={30}
              text={`${timeLeft.days}d`}
              styles={buildStyles({
                pathColor: `url(#gradientColor)`,
                trailColor: `url(#gradientTrail)`,
                textColor: "#ef4444",

              })}
            />
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={timeLeft.hours}
              maxValue={24}
              text={`${timeLeft.hours}h`}
              styles={buildStyles({
                pathColor: `url(#gradientColor)`,
                trailColor: `url(#gradientTrail)`,
                textColor: "#ef4444",

              })}
            />
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={timeLeft.minutes}
              maxValue={60}
              text={`${timeLeft.minutes}m`}
              styles={buildStyles({
                pathColor: `url(#gradientColor)`,
                trailColor: `url(#gradientTrail)`,
                textColor: "#ef4444",

              })}
            />
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={timeLeft.seconds}
              maxValue={60}
              text={`${timeLeft.seconds}s`}
              styles={buildStyles({
                pathColor: `url(#gradientColor)`,
                trailColor: `url(#gradientTrail)`,
                textColor: "#ef4444",
              })}
            />
          </div>
        </div>
        <hr className="m-10 hr font-bold h-[5px] border-none rounded-full" />

<div className=" flex flex-col justify-center items-center mt-10 ">
<h1 className="font-semibold text-lg" >
{t("subscripe")}

</h1>
<div className="relative h-[50px] flex  mt-5  ">
<input placeholder="Enter valid e-mail" className= " hover:bg-black ps-5   h-full  bg-transparent border border-red-500 outline-none">

</input>
<button className="  border border-red-500 px-3 h-full bg-red-500">
subscribe
</button>
</div>
</div>
      </div>
    </div>
    {/* </div> */}

    </>

  );
};

export default CountdownTimer;

