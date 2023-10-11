import { useState, useEffect } from "react";
type Props = {
  duration: number;
  currentDays: number;
};
const ProgressBar: React.FC<Props> = ({ duration, currentDays }) => {
  //   const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     // Ensure duration and currentDays are positive numbers
  //     const positiveDuration = Math.max(1, duration);
  //     const positiveCurrentDays = Math.max(0, currentDays);

  //     // Calculate the progress as a percentage
  //     const calculatedProgress = (
  //       (positiveCurrentDays / positiveDuration) *
  //       100
  //     ).toFixed(2);

  //     // Update the progress state
  //     setProgress(parseFloat(calculatedProgress));
  //   }, [duration, currentDays]);

  //   return (
  //     <div className="progress-container w-full bg-white h-[6px] bg-CMBLUR rounded-full  ">
  //       <div
  //         className="progress-bar h-[6px] bg-CMBLUE rounded-full"
  //         style={{
  //           width: `${progress}%`,
  //           transition: "width 1s",
  //         }}
  //       ></div>
  //     </div>
  //   );
  // Ensure the duration is a positive number

  // Calculate the progress as a percentage
  // Ensure duration and currentDays are positive numbers
  const positiveDuration = Math.max(1, duration);
  const positiveCurrentDays = Math.max(0, currentDays);

  const progress = (positiveCurrentDays / (positiveDuration * 0.4)) * 100;
  const strokeDasharray = 2 * Math.PI * 40;
  return (
    <div className="countdown-circle-timer  w-fit relative">
      <svg width="100" height="100" className="relative">
        <circle
          r="40"
          cx="50"
          cy="50"
          fill="transparent"
          className="stroke-"
          strokeWidth="8" // Change this to your desired stroke width
          strokeDasharray={strokeDasharray} // Circumference of a circle with radius 40
          strokeDashoffset={progress}
          strokeLinecap="round"
        />
      </svg>
      <p className="text-xl text-white absolute top-1/2 font-semibold left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {currentDays} / {positiveDuration}
      </p>
    </div>
  );
};

export default ProgressBar;
