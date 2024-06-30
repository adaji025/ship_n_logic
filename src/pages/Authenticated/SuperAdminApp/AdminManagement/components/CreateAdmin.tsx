import {
  Button,
  LoadingOverlay,
  Modal,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Fragment, useCallback, useState } from "react";
import { CreateAdminsProps } from "../../../../../types/admins";
import useNotification from "../../../../../hooks/useNotification";
import { createAdmin } from "../../../../../services/adminMgt";
import { showNotification } from "@mantine/notifications";

interface IProps {
  opened: boolean;
  close: () => void;
}

const CreateAdmin = ({ close, opened }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [continues, setContinues] = useState(false);
  const [error, setError] = useState("");

  const { handleError } = useNotification();

  const form = useForm({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      gender: "",
      permission: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleSubmit = (values: CreateAdminsProps) => {
    setLoading(true);

    createAdmin(values)
      .then(() => {
        showNotification({
          title: "Success",
          color: "green",
          message: "Admin Created successful",
        });
        close();
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
    if (form.values.password !== form.values.confirm_password) {
      setError("Passwords does not match");
    } else {
      setError("");
    }
  }, [form.values.confirm_password]);

  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <Modal
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
        onClose={close}
        opened={opened}
        title={
          <div>
            <h2 className="text-xl font-medium">
              {continues ? "Set Password" : "Create New Admin"}
            </h2>
            <div className="text-sm mt-1 font-medium text-[#333333]">
              {continues
                ? "Set a password for the admin"
                : "Kindly add the details of the new admin"}
            </div>
          </div>
        }
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {!continues && (
            <>
              <TextInput
                size="md"
                label="Name"
                placeholder="Enter name"
                {...form.getInputProps("full_name")}
              />
              <TextInput
                type="email"
                mt="sm"
                size="md"
                label="Email"
                placeholder="Enter email"
                {...form.getInputProps("email")}
              />
              <TextInput
                mt="sm"
                size="md"
                label="Phone number"
                placeholder="Enter Phone number"
                {...form.getInputProps("phone_number")}
              />
              <Select
                size="md"
                mt="sm"
                label="Gender"
                placeholder="Select gender"
                data={[
                  { label: "Male", value: "MALE" },
                  { label: "Female", value: "FEMALE" },
                ]}
                {...form.getInputProps("gender")}
              />

              <Select
                size="md"
                mt="sm"
                label="Permission"
                placeholder="Select Permission"
                data={[
                  { label: "Admin", value: "ADMIN" },
                  { label: "Super Admin", value: "SUPER_ADMIN" },
                ]}
                {...form.getInputProps("permission")}
              />
              <Button
                mt={32}
                mb={24}
                size="md"
                className="w-full mx-auto bg-primary"
                onClick={() => setContinues(true)}
              >
                Continue
              </Button>
            </>
          )}

          {continues && (
            <>
              <PasswordInput
                size="md"
                label="Password"
                placeholder="********"
                {...form.getInputProps("password")}
              />
              <PasswordInput
                size="md"
                mt="md"
                label="Confirm Password"
                placeholder="********"
                {...form.getInputProps("confirm_password")}
                onKeyUp={validatePw}
              />
              <div className="text-sm mt-1 text-red-500">{error}</div>
              <Button
                mt={32}
                mb={24}
                size="md"
                className="w-full mx-auto bg-primary"
                onClick={() => setContinues(true)}
                type="submit"
              >
                Create admin
              </Button>
            </>
          )}
        </form>
      </Modal>
    </Fragment>
  );
};

export default CreateAdmin;
