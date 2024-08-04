import * as yup from "yup";
import { useMutation } from "react-query";
import { editUser } from "../../services/axiosPublic";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, CircularProgress, TextField } from "@mui/material";
import {
  UserInterface,
  EditUserInterface,
} from "../../interfaces/user-interfaces";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  bio: yup.string().required("Bio is required"),
});

function EditUser({ user, onSave, onClose }: EditUserInterface): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>({
    resolver: yupResolver(schema),
    defaultValues: user,
  });

  const { mutate: handleEditUser, isLoading } = useMutation(
    "edit-user",
    editUser,
    {
      onSuccess: () => {
        onClose();
        onSave();
      },
    }
  );

  const onSubmit: SubmitHandler<UserInterface> = (data) => {
    handleEditUser(data);
  };

  return (
    <div
      className={`bg-white w-[20rem] rounded-lg relative p-4 overflow-hidden ${
        isLoading ? "" : ""
      }`}
    >
      {isLoading && (
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full z-10 backdrop-brightness-95 backdrop-blur-sm">
          <CircularProgress />
        </div>
      )}

      <button onClick={onClose} className="absolute top-1 right-2">
        ✕
      </button>
      <p className="uppercase font-bold text-lg">Edit User</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 text-sm pt-4"
      >
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
          size="small"
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          size="small"
        />
        <TextField
          {...register("bio")}
          label="Bio"
          error={!!errors.bio}
          helperText={errors.bio?.message}
          multiline
          rows={6}
          size="small"
        />
        <div className="flex items-center justify-between gap-2">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="flex-1"
          >
            Save
          </Button>
          <Button
            onClick={onClose}
            color="error"
            variant="contained"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
