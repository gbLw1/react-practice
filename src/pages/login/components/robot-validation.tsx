import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FormValues {
  imNotARobot: boolean;
}

export const RobotValidation: React.FC = () => {
  const navigate = useNavigate();

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
        sessionStorage.setItem(
          "auth",
          JSON.stringify({
            token: "123456",
            expired: false,
          }),
        );

        navigate("/dashboard");
        toast.success("Welcome to dashboard");
      } else {
        toast.error("Sorry bud, robots are not allowed here");
      }

      setLoading(false);
    }, 2e3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center mb-4 p-4 border border-gray-300 rounded-md">
        <input
          {...register("imNotARobot")}
          type="checkbox"
          id="robot"
          className="cursor-pointer text-5xl h-12 w-12 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />

        <label
          htmlFor="robot"
          className="cursor-pointer ms-4 block text-lg font-medium text-slate-300"
        >
          I'm not a robot
        </label>
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-slate-500 text-white rounded-md disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
};
