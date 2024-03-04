import Layout from "../../components/Layout";
import { Repos } from "./components/repos";
import { Search } from "./components/search";

export default function Home() {
  return (
    <Layout>
      <Search />

      <Repos />
    </Layout>
  );
}
