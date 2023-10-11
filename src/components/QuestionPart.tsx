import ProgressBar from "./Progresbar";

function QuestionPart({ data }) {
  return (
    <div className="w-full ">
      <div className="w-full max-w-[600px]  mx-auto">
        <div className="w-full flex items-center justify-center">
          <ProgressBar currentDays={1} duration={10} />
        </div>
      </div>
    </div>
  );
}

export default QuestionPart;
