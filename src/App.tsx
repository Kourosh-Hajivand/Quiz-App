import { useEffect, useState } from "react";
import CategoryCard from "./components/CategoryCard";
import MainLayout from "./components/layout/MainLayout";
import { useGetCategory } from "./util/hook/useGetCategory";
import CategoryCardLoading from "./components/CategoryCardLoading";
import { ArrowCircleLeft } from "iconsax-react";
import useGetQuestion from "./util/hook/useGetQuestion";
import QuestionPart from "./components/QuestionPart";

interface TriviaCategory {
  id: number;
  name: string;
}

function App() {
  const data = useGetCategory();
  const [FilteredData, setFilteredData] = useState<TriviaCategory[]>([]);
  const [SelectedCat, setSelectedCat] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [step, setstep] = useState(1);
  const questions = useGetQuestion({
    categoryId: SelectedCat,
    difficulty: difficulty,
  });

  useEffect(() => {
    if (questions.isFetched) {
      console.log(questions.data);
    }
  });
  useEffect(() => {
    if (data.isFetched) {
      const filterd = [21, 22, 19, 23, 9, 30];
      const filtered = data.data.trivia_categories.filter(
        (item: TriviaCategory) => {
          return filterd.includes(item.id);
        }
      );
      setFilteredData(filtered);
    }
  }, [data.isFetched, data.data]);
  return (
    <MainLayout>
      <div className="flex items-center gap-5">
        {step !== 1 ? (
          <ArrowCircleLeft
            onClick={() => setstep(step - 1)}
            size="32"
            className="text-CMDARK dark:text-white cursor-pointer"
          />
        ) : null}
        {step > 2 ? (
          questions.isFetched && questions.data ? (
            <div className="w-full flex items-center  text-2xl justify-between">
              <h5 className="font-semibold uppercase">
                {questions.data[0].category}
              </h5>
              <h5 className="font-semibold uppercase">{difficulty}</h5>
            </div>
          ) : (
            <div className="w-full flex items-center justify-between animate-pulse">
              <div className="h-8 w-[200px] rounded-full bg-CMDARK"></div>
              <div className="h-8 w-[150px] rounded-full bg-CMDARK "></div>
            </div>
          )
        ) : (
          <h1 className="text-CMDARK dark:text-white text-2xl font-semibold select-none ">
            {step === 1
              ? "Choose a Category :"
              : step === 2
              ? "Choose a Difficulty"
              : null}
          </h1>
        )}
      </div>
      {step === 1 ? (
        <div>
          <div className="mt-5">
            {data.isFetched && FilteredData ? (
              <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {FilteredData.map((item: TriviaCategory, index) => {
                  return (
                    <CategoryCard
                      SelectCategory={(e) => {
                        setSelectedCat(e);
                        setstep(2);
                      }}
                      key={index}
                      id={item.id}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
                <CategoryCardLoading />
                <CategoryCardLoading />
                <CategoryCardLoading />
                <CategoryCardLoading />
                <CategoryCardLoading />
              </div>
            )}
          </div>
        </div>
      ) : step === 2 ? (
        <div>
          <div className="w-full grid md:grid-cols-3 gap-5 mt-5">
            <button
              className="DificaltyBtn hover:bg-green-500"
              onClick={() => {
                setDifficulty("easy");
                setstep(3);
              }}
            >
              Easy
            </button>
            <button
              onClick={() => {
                setDifficulty("medium");
                setstep(3);
              }}
              className="DificaltyBtn hover:bg-orange-500"
            >
              Medium
            </button>
            <button
              onClick={() => {
                setDifficulty("hard");
                setstep(3);
              }}
              className="DificaltyBtn hover:bg-[#FF5341]"
            >
              Hard
            </button>
          </div>
        </div>
      ) : (
        <div className="my-6">
          <QuestionPart />
        </div>
      )}
    </MainLayout>
  );
}

export default App;
