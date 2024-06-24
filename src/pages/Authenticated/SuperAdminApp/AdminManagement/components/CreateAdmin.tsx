import { Button, Modal, PasswordInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

interface IProps {
  opened: boolean;
  close: () => void;
}

const CreateAdmin = ({ close, opened }: IProps) => {
  const [continues, setContinues] = useState(false);

  const form = useForm({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      gender: "",
      permission: "",
      password: "",
    },
  });
  return (
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
      <form>
        {!continues && (
          <>
            <TextInput size="md" label="Name" placeholder="Enter name" />
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
            />
            <Select
              size="md"
              mt="sm"
              label="Gender"
              placeholder="Select gender"
              data={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
            />

            <Select
              size="md"
              mt="sm"
              label="Permission"
              placeholder="Select Permission"
              data={[
                { label: "Admin", value: "Admin" },
                { label: "Super Admin", value: "Super Admin" },
              ]}
            />
          </>
        )}

        {continues && (
          <>
            <PasswordInput size="md" label="Password" placeholder="********" />
            <PasswordInput
              size="md"
              mt="md"
              label="Confirm Password"
              placeholder="********"
            />
          </>
        )}

        <Button
          mt={32}
          mb={24}
          size="md"
          className="w-full mx-auto bg-primary"
          onClick={() => setContinues(true)}
        >
          {continues ? "Create admin" : "Continue"}
        </Button>
      </form>
    </Modal>
  );
};

export default CreateAdmin;
