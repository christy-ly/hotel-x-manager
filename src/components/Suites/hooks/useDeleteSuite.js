import { useQueryClient, useMutation } from "@tanstack/react-query";
import { removeSuite as removeSuiteApi } from "../../../api/apiSuites";
import toast from "react-hot-toast";

export function useRemoveSuite() {
  const queryClient = useQueryClient();
  const { isLoading: isRemoving, mutate: removeSuite } = useMutation({
    mutationFn: (code) => removeSuiteApi(code),
    onSuccess: () => {
      toast.success("Removed Successfully");
      queryClient.invalidateQueries({
        queryKey: ["suite"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isRemoving, removeSuite };
}
