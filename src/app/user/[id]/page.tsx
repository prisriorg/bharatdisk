import Custom404 from "@/app/not-found";
import { UserHome } from "@/components/user";
import navData from "@/components/user/Datas";
const createPages = (): { [key: string]: JSX.Element } => {
  const pages: { [key: string]: JSX.Element } = {};

  navData.forEach((key, index) => {
    if (index < 3) {
      pages[key.link] = key.page;
    } else {
      pages[key.link] = <UserHome page={key.link} />;
    }
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
