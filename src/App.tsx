import { useEffect, useState } from "react";
import CategoryCard from "./components/CategoryCard";
import MainLayout from "./components/layout/MainLayout";
import { useGetCategory } from "./util/hook/useGetCategory";
import CategoryCardLoading from "./components/CategoryCardLoading";
import { ArrowCircleLeft } from "iconsax-react";

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

  useEffect(() => {
    if (data.isFetched) {
      console.log(data.data);

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
        <h1 className="text-CMDARK dark:text-white text-2xl font-semibold select-none ">
          {step === 1 ? "Choose a Category :" : "Choose a Difficulty"}
        </h1>
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
                setDifficulty("Easy");
                setstep(3);
              }}
            >
              Easy
            </button>
            <button
              onClick={() => {
                setDifficulty("Medium");
                setstep(3);
              }}
              className="DificaltyBtn hover:bg-orange-500"
            >
              Medium
            </button>
            <button
              onClick={() => {
                setDifficulty("Hard");
                setstep(3);
              }}
              className="DificaltyBtn hover:bg-[#FF5341]"
            >
              Hard
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </MainLayout>
  );
}

export default App;
