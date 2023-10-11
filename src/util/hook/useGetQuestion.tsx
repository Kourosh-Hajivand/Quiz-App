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

export type QuestionsState = Question & { answers: string[] };

type QueryResult = UseQueryResult<QuestionsState[], unknown>;

const useGetQuestion = ({ categoryId, difficulty }: Props): QueryResult => {
  return useQuery<QuestionsState[], unknown>({
    queryKey: ["GetCategory", categoryId, difficulty],
    queryFn: async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
      );

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
