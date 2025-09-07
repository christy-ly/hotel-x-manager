import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createSuite as createSuiteApi } from "../../../api/apiSuites";
import toast from "react-hot-toast";

export default function useCreateSuite() {
  const queryClient = useQueryClient();
  const { reset } = useForm();

  const { mutate: createSuite, isLoading: isCreating } = useMutation({
    mutationFn: createSuiteApi,
    onSuccess: () => {
      toast.success("Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["suite"],
      });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createSuite };
}
