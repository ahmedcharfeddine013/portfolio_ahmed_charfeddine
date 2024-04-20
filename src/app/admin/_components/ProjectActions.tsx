"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteProject, toggleProjectPrivacy } from "../_actions/project";

export const PublishedToggleDropdownItem = ({
  id,
  published,
}: {
  id: string;
  published: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProjectPrivacy(id, !published);
          router.refresh();
        });
      }}
    >
      {published ? "Unshare" : "Share"}
    </DropdownMenuItem>
  );
};

export function DeleteDropdownItem({
    id,
    disabled,
  }: {
    id: string;
    disabled: boolean;
  }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    return (
      <DropdownMenuItem
        disabled={disabled || isPending}
        onClick={() => {
          startTransition(async () => {
            await deleteProject(id);
            router.refresh();
          });
        }}
      >
        Delete
      </DropdownMenuItem>
    );
  }
