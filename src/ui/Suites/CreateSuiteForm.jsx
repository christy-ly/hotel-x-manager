import { useForm } from "react-hook-form";
import useCreateSuite from "./hooks/useCreateSuite";
import useEditSuite from "./hooks/useEditSuite";
import { findAllCodes } from "../../api/apiSuites";
import toast from "react-hot-toast";
import Input from "../Form/Input";
import Form from "../Form/Form";
import Button from "../Button";
import FileInput from "../Form/FileInput";
import Textarea from "../Form/Textarea";
import FormRow from "../Form/FormRow";

function CreateSuiteForm({ suiteToEdit = {}, onCancel }) {
  // Check if it is editing
  const { id: editId, ...editValues } = suiteToEdit;
  const isEditMode = Boolean(editId);
  const { register, handleSubmit, getValues, reset, formState } = useForm({
    defaultValues: isEditMode ? editValues : {},
  });

  const { errors: formErrors } = formState;
  const { isCreating, createSuite } = useCreateSuite();
  const { isEditing, editSuite } = useEditSuite(editValues.code);
  const isProcessing = isCreating || isEditing;

  function onSubmit(formData) {
    const image =
      typeof formData.image === "string" ? formData.image : formData.image;

    if (isEditMode) {
      editSuite(
        {
          newSuiteData: { ...formData, image: image },
          code: formData.code,
        },
        {
          onSuccess: (data) => reset(data[0]),
        }
      );
    } else {
      createSuite({ ...formData, image: image }, { onSuccess: () => reset() });
    }
  }

  function onError(formErrors) {
    toast.error("Error: Fail to update suite");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"suite name"} errorMsg={formErrors?.name?.message}>
        <Input
          type="text"
          id="name"
          defaultValue={""}
          {...register("name", { required: "This field is required." })}
        />
      </FormRow>

      <FormRow label={"suite code"} errorMsg={formErrors?.code?.message}>
        <Input
          type="text"
          id="code"
          disabled={isEditMode || isProcessing}
          {...register("code", {
            required: "This field is required.",
            validate: async (value) => {
              const codeList = await findAllCodes();
              return !isEditMode && codeList.includes(value)
                ? "Suite code already exists"
                : true;
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"Maximum Capacity"}
        errorMsg={formErrors?.maxcapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isProcessing}
          defaultValue={0}
          {...register("maxcapacity", {
            min: {
              value: 1,
              message: "The value should be larger than 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"Maximum Size (ft)"}
        errorMsg={formErrors?.minroomsizeft?.message}
      >
        <Input
          type="number"
          id="minRoomSizeFt"
          disabled={isProcessing}
          defaultValue={0}
          {...register("minroomsizeft", {
            min: {
              value: 1,
              message: "The value should be larger than 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"Maximum Size (ft)"}
        errorMsg={formErrors?.maxroomsizeft?.message}
      >
        <Input
          type="number"
          id="maxRoomSizeFt"
          disabled={isProcessing}
          defaultValue={0}
          {...register("maxroomsizeft", {
            min: {
              value: 1,
              message: "The value should be larger than 1",
            },
            validate: (value) =>
              value > getValues().minroomsizeft ||
              "Max Room Size should be larger than Min Room Size ",
          })}
        />
      </FormRow>

      <FormRow label={"Price"} errorMsg={formErrors?.price?.message}>
        <Input
          type="number"
          id="price"
          disabled={isProcessing}
          defaultValue={0}
          {...register("price", {
            min: {
              value: 1,
              message: "The value should be larger than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Disccount"} errorMsg={formErrors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isProcessing}
          defaultValue={0}
          {...register("discount", {
            min: {
              value: 0,
              message: "The value cannot be less then 0",
            },
            validate: (value) =>
              value <= getValues().price ||
              "Discount should be less than price",
          })}
        />
      </FormRow>
      <FormRow
        label={"Description"}
        errorMsg={formErrors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isProcessing}
          defaultValue={""}
          {...register("description")}
        />
      </FormRow>

      <FormRow label={"Image"} errorMsg={formErrors?.image?.message}>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          disabled={isProcessing}
          {...register("image")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isProcessing}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button disabled={isProcessing}>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateSuiteForm;
