'use client'
import { signOut } from "next-auth/react"
import { Button } from "../../../components/ui/button"
import { DropdownMenuItem } from "../../../components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <DropdownMenuItem
      onSelect={(event) => {
        event.preventDefault();
        signOut().catch(console.error);
      }}
      className="text-red-600 cursor-pointer"
    >
      Sign out
      <LogOut className="w-4 h-4 ml-2 hidden" />
    </DropdownMenuItem>
  )
}
