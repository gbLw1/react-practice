import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/auth.store";
import { useRouteHistoryStore } from "../../../stores/route-history.store";

interface FormValues {
  imNotARobot: boolean;
}

export const RobotValidation: React.FC = () => {
  const navigate = useNavigate();

  const { redirect, setRedirect } = useRouteHistoryStore();
  const { email } = useAuthStore();

  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormValues>({
    values: {
      imNotARobot: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);

    setTimeout(() => {
      if (data.imNotARobot) {
        if (!email) {
          toast.error("Not so fast, you need to login first");
          navigate("/login");
          return;
        }

        sessionStorage.setItem(
          "auth",
          JSON.stringify({
            token: "123456",
            expired: false,
          }),
        );

        toast.success("Welcome to the dashboard!");

        if (redirect) {
          navigate(redirect);
          setRedirect(null);
          return;
        }

        navigate("/dashboard");
      } else {
        toast.error("Sorry bud, robots are not allowed here");
      }

      setLoading(false);
    }, 2e3);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      {email ? (
        <p className="mb-4 text-center text-slate-300">
          Hi <strong>{email}</strong>,<br /> please let us know that you are not
          a robot.
        </p>
      ) : (
        <p className="mb-4 text-center text-slate-300">
          Verify that you are not a robot
        </p>
      )}

      <div className="w-full max-w-[230px] flex items-center justify-center mb-4 p-4 border border-gray-300 rounded-md">
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <input
            {...register("imNotARobot")}
            type="checkbox"
            id="robot"
            className="cursor-pointer text-5xl h-12 w-12 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        )}

        <label
          htmlFor="robot"
          className="cursor-pointer ms-4 block text-lg font-medium text-slate-300"
        >
          I'm not a robot
        </label>
      </div>

      <button
        type="submit"
        className="w-full max-w-[230px] p-2 bg-slate-500 text-white rounded-md disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
};
