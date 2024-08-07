import Login from "@/components/user/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store, View, and Earn",
};
  
export default function User() {
    return ( <Login/>)
}