import React from "react";
import { useTheme } from "./providers/theme/ThemeContext";
import ProposalView from "./views/ProposalView";
import Navbar from "./components/Navbar";
import WalletView from "./views/WalletView";

const Pages = () => {
  const currentPage: string = "/wallet";

  switch (currentPage) {
    case "/":
      return <ProposalView />
    case "/wallet":
      return <WalletView />
    default:
      return <div className="text-center">Page not found!</div>
  }
};

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="max-w-screen-xl pt-16 m-auto">
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default App;
