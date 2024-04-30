import { Header } from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="px-4 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
