import { useQuery } from "@tanstack/react-query";
import { getSuites } from "../../../api/apiSuites";

export function useSuite() {
  const {
    isLoading,
    data: suites,
    error,
  } = useQuery({
    queryKey: ["suite"],
    queryFn: getSuites,
  });

  return { isLoading, suites, error };
}
