import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createSuite as editSuiteApi } from "../../../api/apiSuites";
import toast from "react-hot-toast";

export default function useEditSuite() {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { mutate: editSuite, isLoading: isEditing } = useMutation({
    mutationFn: ({ newSuiteData, code }) => editSuiteApi(newSuiteData, code),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["suite"],
      });
      reset();
    },
    onError: (error) => {
      toast.error("Edit Suite Error: " + error.message);
    },
  });

  return { isEditing, editSuite };
}
