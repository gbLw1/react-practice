import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSearch, FaShare } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const searchRequiredMessage = "Search query is required";

const searchSchema = z.object({
  search: z
    .string({
      required_error: searchRequiredMessage,
    })
    .min(1, searchRequiredMessage),
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
      toast.success("Link to search results copied to clipboard");
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
            className="p-2 block w-full border border-slate-500 rounded-md h-12 bg-slate-800 text-white"
            placeholder="Search for a repo"
          />
          {querySearch && (
            <button
              type="button"
              onClick={removeFilter}
              className="absolute top-3 right-0 text-red-700 rounded-md h-[25px] w-[25px] me-1"
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
        className="h-12 flex justify-center items-center ms-2 hover:bg-slate-700 border border-slate-400 text-slate-400 hover:text-white px-4 py-2 rounded-md active:bg-slate-800 font-medium"
      >
        <FaSearch />
      </button>

      {querySearch && (
        <button
          type="button"
          onClick={shareResults}
          className="h-12 flex justify-center items-center ms-2 hover:bg-green-700 border border-green-700 text-green-700 hover:text-white px-4 py-2 rounded-md active:bg-green-800 font-medium"
        >
          <FaShare />
        </button>
      )}
    </form>
  );
};
