import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="p-4 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
