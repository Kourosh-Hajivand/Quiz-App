import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { shuffleArray } from "../shuffleArray";
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
type Props = {
  categoryId: number | null;
  difficulty: string | null;
};
const useGetQuestion = ({
  categoryId,
  difficulty,
}: Props): UseQueryResult<unknown, unknown> => {
  return useQuery({
    queryKey: ["GetCategory", categoryId, difficulty],
    queryFn: async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
      );
      // shuffleArray()
      const SortedData = response.data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));

      return SortedData;
    },
    enabled: !!categoryId && !!difficulty,
  });
};

export default useGetQuestion;
