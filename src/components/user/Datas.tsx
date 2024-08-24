import Dashboard from "./pages/Dashboard";
import UploadFile from "./pages/UploadFile";
import FileManager from "./pages/FileManager";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Referral from "./pages/Referral";
import Withdrawal from "./pages/Withdrawal";
import Logout from "./pages/Logout";
import Login from "@/components/user/auth/Login";
import SignUp from "@/components/user/auth/Signup";
import ForgetPassword from "./auth/ForgetPassword";

const navData = [
  { name: "Login", link: "login", page: <Login /> },
  { name: "Register", link: "signup", page: <SignUp /> },
  { name: "Forget Password", link: "forget-password", page: <ForgetPassword /> },
  { name: "Dashboard", link: "dashboard", page: <Dashboard /> },
  { name: "Upload File", link: "upload-file", page: <UploadFile /> },
  { name: "File Manager", link: "file-manager", page: <FileManager /> },
  { name: "Referral", link: "referral", page: <Referral /> },
  { name: "Withdrawal", link: "withdrawal", page: <Withdrawal /> },
  { name: "Settings", link: "settings", page: <Settings /> },
  { name: "Support", link: "support", page: <Support /> },
  { name: "Logout", link: "logout", page: <Logout /> },
];
export default navData;
