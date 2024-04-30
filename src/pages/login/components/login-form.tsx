import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useAuthStore } from "../../../stores/auth.store";
import { validLogin } from "../../../constants/valid-login";
import toast from "react-hot-toast";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const { setEmail, setPassword } = useAuthStore();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    values: validLogin,
  });

  const onSubmit = (data: FormValues) => {
    if (
      data.email === validLogin.email &&
      data.password === validLogin.password
    ) {
      setEmail(data.email);
      setPassword(data.password);
      setSearchParams({ verifyLogin: "true" });
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300"
        >
          Email
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="mt-1 p-2 block w-full border border-slate-500 rounded-md h-12 bg-slate-800 text-white"
        />
        {errors.email && (
          <span className="text-red-500 text-xs mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="mb-4 relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-300"
        >
          Password
        </label>
        <input
          {...register("password", { required: "Password is required" })}
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className="mt-1 p-2 block w-full border border-slate-500 rounded-md h-12 bg-slate-800 text-white"
        />
        {showPassword ? (
          <FaEye
            className="absolute right-2 top-10 text-slate-400 cursor-pointer"
            size={20}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <FaEyeSlash
            className="absolute right-2 top-10 text-slate-400 cursor-pointer"
            size={20}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        {errors.password && (
          <span className="text-red-500 text-xs mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 w-full h-12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 hover:text-slate-300 bg-slate-400 hover:bg-slate-800 focus:outline-none focus:ring-offset-0 focus:ring-0"
      >
        Continue
      </button>
    </form>
  );
};
