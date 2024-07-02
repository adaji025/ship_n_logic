import { Button, LoadingOverlay, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { Fragment, useCallback, useState } from "react";
import useNotification from "../../../../../hooks/useNotification";
import { changePassword } from "../../../../../services/auth";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleError } = useNotification();
  const form = useForm({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const handleSubmit = (values: any) => {
    // setLoading(true);

    changePassword(values)
      .then(() => {
        showNotification({
          title: "Success",
          color: "green",
          message: "Password updated successful",
        });
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validatePw = useCallback(() => {
    if (form.values.new_password !== form.values.confirm_password) {
      setError("Passwords does not match");
    } else {
      setError("");
    }
  }, [form.values.confirm_password]);
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="py-5 px-10 bg-white rounded-xl"
      >
        <div className="font-medium">Update Password</div>
        <div className="mt-5 grid gap-y-5 gap-x-20 sm:grid-cols-2">
          <PasswordInput
            size="md"
            placeholder="*********"
            label="Current password"
            {...form.getInputProps("old_password")}
          />
          <PasswordInput
            size="md"
            placeholder="*********"
            label="New password"
            {...form.getInputProps("new_password")}
          />
          <PasswordInput
            size="md"
            placeholder="*********"
            label="Confirm password"
            {...form.getInputProps("confirm_password")}
            onKeyUp={validatePw}
          />
          <div className="text-sm mt-1 text-red-500">{error}</div>
          <div className="mt-3">
            <Button
              variant="outline"
              size="md"
              className="border-primary px-10 my-5"
              type="submit"
            >
              Update profile
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ChangePassword;
