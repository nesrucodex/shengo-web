import React from "react";
import { PersonInfo } from "@/app/(protected)/dashboard/_contexts/customer-form-context";
import { Avatar, Group } from "@mantine/core";
import { Edit, Trash } from "lucide-react";
import { useCustomerOperation } from "@/app/(protected)/dashboard/_contexts/customer-operation-provider";

interface props {
  person: PersonInfo;
  handelDrawerclose: Function;
}

const Person = ({ person, handelDrawerclose }: props) => {
  const isOrganization = person.customerType === "organization";
  const { editPerson, editing, setAlertInfo, deleteSinglePerson } =
    useCustomerOperation();

  const handleEdit = () => {
    handelDrawerclose();
    setAlertInfo({
      title: "Edit information!",
      description:
        "If you edit this information, you will lose the current form, are you sure ?",
      execute: (cont: boolean) => {
        if (cont) {
          editPerson(person._id);
        }
        setAlertInfo(null);
      },
    });
  };

  const handleDelete = () => {
    handelDrawerclose();
    setAlertInfo({
      title: "Delete information!",
      description: "Are you sure you want to delete this information ?",
      execute: (cont: boolean) => {
        if (cont) {
          deleteSinglePerson(person._id);
        }
        setAlertInfo(null);
      },
    });
  };

  return (
    <section className="border-t border-t-muted py-3">
      <Group justify="space-between">
        <Group>
          <Avatar size="md" color="initials">
            {isOrganization && person.businessName.charAt(0).toUpperCase()}
            {!isOrganization && person.name.charAt(0).toUpperCase()}
          </Avatar>
          {isOrganization && (
            <span className="text-sm">{person.businessName}</span>
          )}
          {!isOrganization && (
            <span className="text-sm">
              {person.customerTitle}. {person.name}
            </span>
          )}
        </Group>

        <Group>
          <Edit size={16} className="cursor-pointer" onClick={handleEdit} />
          <Trash
            size={16}
            onClick={handleDelete}
            className="cursor-pointer text-red-500"
          />
        </Group>
      </Group>
    </section>
  );
};

export default Person;
