import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetCategory() {
  return useQuery({
    queryKey: ["GetCategory"],
    queryFn: async () => {
      const response = await axios.get(`https://opentdb.com/api_category.php`);
      return response.data;
    },
  });
}
