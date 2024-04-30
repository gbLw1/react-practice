import Layout from "../../components/Layout";
import { Repos } from "./components/repos";
import { Search } from "./components/search";

export default function Dashboard() {
  return (
    <Layout>
      <Search />

      <Repos />
    </Layout>
  );
}
