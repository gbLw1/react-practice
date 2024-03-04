import { Repos } from "./components/repos";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-blue-400 font-bold underline">
        Hello world!
      </h1>

      <Repos />
    </>
  );
}
