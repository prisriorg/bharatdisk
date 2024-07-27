import Dashboard from "@/components/user/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store, View, and Earn",
};
  
export default function User() {
    return ( <Dashboard/>)
}