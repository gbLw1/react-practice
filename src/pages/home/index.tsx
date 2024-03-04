import Layout from "../../components/Layout";
import { Repos } from "./components/repos";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl text-center text-blue-700 font-bold mb-10">
        <strong>gbLw1</strong> Github repos
      </h1>

      <Repos />
    </Layout>
  );
}
