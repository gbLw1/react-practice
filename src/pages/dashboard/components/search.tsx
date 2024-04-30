import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSearch, FaShare } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().nonempty("Please enter a search term"),
});

type FormValues = z.infer<typeof searchSchema>;

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = searchParams.get("q") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(searchSchema),
    values: {
      search: querySearch,
    },
  });

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

  return (
    <form
      onSubmit={handleSubmit(applyFilter)}
      className="flex items-start mb-4"
    >
      <div className="flex flex-col">
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

        {errors.search && (
          <p className="text-red-500 mt-1">{errors.search.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex justify-center items-center ms-2 hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
      >
        Search
        <FaSearch className="ms-2" />
      </button>

      {querySearch && (
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
  );
};
