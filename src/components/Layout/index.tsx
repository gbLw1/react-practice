import { Header } from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="px-4 container mx-auto">
        <Header />
      </div>

      <div className="border-t border-slate-500 pt-8"></div>

      <div className="px-4 container mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
