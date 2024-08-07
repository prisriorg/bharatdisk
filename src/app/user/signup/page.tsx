import SignUp from "@/components/user/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store, View, and Earn",
};
  
export default function User() {
    return ( <SignUp/>)
}