import Layout from "../../components/Layout";
import { Repos } from "./components/repos";
import { Search } from "./components/search";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl text-center text-blue-700 font-bold mb-10">
        <strong>gbLw1</strong> Github repos
      </h1>

      <Search />

      <Repos />
    </Layout>
  );
}
