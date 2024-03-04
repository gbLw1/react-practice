import { useEffect, useState } from "react";
import { getUserRepos } from "../../../services/repos.service";
import { Table } from "flowbite-react";
import RepoModel from "../../../interfaces/repo.model";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { FaSearch, FaShare } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  search: string;
}

export const Repos = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState<RepoModel[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = searchParams.get("q") ?? "";

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    values: {
      search: querySearch,
    },
  });

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name
        .toLowerCase()
        .includes(getValues("search").toLowerCase().trim()) ||
      repo.description
        ?.toLowerCase()
        .includes(getValues("search").toLowerCase().trim()),
  );

  async function getRepos(): Promise<void> {
    setLoading(true);

    getUserRepos("gbLw1")
      .then(({ data }) => {
        const sortedData = data.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
        setRepos(sortedData);
      })
      .catch((error) => {
        console.error("Error getting repos", error);
      })
      .finally(() => setLoading(false));
  }

  function applyFilter(data: FormValues): void {
    setSearchParams((state) => {
      state.set("q", data.search);
      return state;
    });
  }

  function removeFilter(): void {
    setSearchParams((state) => {
      state.delete("q");
      return state;
    });
  }

  function shareResults(): void {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
      toast.success("Results copied to clipboard");
    });
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit(applyFilter)}
        className="flex items-center mb-4"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            {...register("search")}
            className="border border-gray-300 rounded-md p-2 pe-7"
            placeholder="Search for a repo"
          />
          {querySearch && (
            <button
              type="button"
              onClick={removeFilter}
              className="absolute right-0 text-red-700 rounded-md h-[25px] w-[25px] me-1"
            >
              <MdClear className="w-[25px] h-[25px]" />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="flex justify-center items-center ms-2 hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
        >
          Search
          <FaSearch className="ms-2" />
        </button>

        {querySearch && filteredRepos.length > 0 && (
          <button
            type="button"
            onClick={shareResults}
            className="flex justify-center items-center ms-2 hover:bg-green-700 border border-green-700 text-green-700 hover:text-white px-4 py-2 rounded-md active:bg-green-800 font-medium"
          >
            Share results
            <FaShare className="ms-2" />
          </button>
        )}
      </form>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Stars</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>

        {!loading && filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <Table.Body className="divide-y">
              <Table.Row className="dark:border-gray-700">
                <Table.Cell className="whitespace-nowrap font-medium">
                  {repo.name}
                </Table.Cell>
                <Table.Cell>
                  {repo.description ?? <p className="italic">No description</p>}
                </Table.Cell>
                <Table.Cell>{repo.stargazers_count}</Table.Cell>
                <Table.Cell>
                  <a
                    className="btn btn-sm btn-primary w-full sm:w-auto hover:text-blue-700"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        ) : (
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={5} className="text-center">
                {loading ? "Loading..." : "No repos found"}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
      </Table>
    </>
  );
};
