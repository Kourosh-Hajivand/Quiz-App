import { Question } from "../util/hook/useGetQuestion";
import ProgressBar from "./Progresbar";

function QuestionPart({ data }: { data: Question }) {
  // console.log();

  return (
    <div className="w-full ">
      <div className="w-full max-w-[600px]  mx-auto">
        <div className="w-full flex items-center justify-center">
          {/* <p >{data[0].question}</p> */}
          <ProgressBar currentDays={1} duration={10} />
        </div>
      </div>
    </div>
  );
}

export default QuestionPart;
