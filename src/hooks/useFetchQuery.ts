import apiInstance from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
interface useFetchQueryProps {
  queryKey: unknown[];
  url: string;
}
const useFetchQuery = ({ queryKey, url }: useFetchQueryProps) => {
  return useQuery(
    {
      queryKey,
      queryFn: async () => {
        const { data } = await apiInstance.get(url);
        return data;
      },
    },
    // The query will not execute until the userId exists
    // enabled: !!userId,
  );
};
export default useFetchQuery;
