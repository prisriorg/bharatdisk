import Custom404 from "@/app/not-found";
import { UserHome } from "@/components/user";
import Login from "@/components/user/auth/Login";
import SignUp from "@/components/user/auth/Signup";
import navData from "@/components/user/Datas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page",
};

const createPages = (): { [key: string]: JSX.Element } => {
  const pages: { [key: string]: JSX.Element } = {
    login: <Login />,
    signup: <SignUp />
  };

  navData.forEach((key) => {
    pages[key.link] = <UserHome page={key.link} />;
  });

  return pages;
};

const pages = createPages();

const getPageComponent = (name: string): JSX.Element => {
  return pages[name] || <Custom404 />;
};

export default function User({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return getPageComponent(params.id);
}
