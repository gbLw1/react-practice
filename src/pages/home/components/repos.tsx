import { useEffect, useState } from "react";
import { getUserRepos } from "../../../services/repos.service";
import { Table } from "flowbite-react";
import RepoModel from "../../../interfaces/repo.model";
import { useSearchParams } from "react-router-dom";

export const Repos = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState<RepoModel[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  const querySearch = searchParams.get("q") ?? "";

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(querySearch.toLowerCase().trim()) ||
      repo.description
        ?.toLowerCase()
        .includes(querySearch.toLowerCase().trim()),
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

  useEffect(() => {
    getRepos();
  }, []);

  return (
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
  );
};
