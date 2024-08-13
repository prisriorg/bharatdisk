import Dashboard from "./pages/Dashboard";
import UploadFile from "./pages/UploadFile";
import FileManager from "./pages/FileManager";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Referral from "./pages/Referral";
import Withdrawal from "./pages/Withdrawal";
import Logout from "./pages/Logout";

const navData = [
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
