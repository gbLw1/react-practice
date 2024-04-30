import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const validLogin = {
  email: "teste@teste.com",
  password: "123456",
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    values: validLogin,
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);

    setTimeout(() => {
      if (
        data.email === validLogin.email &&
        data.password === validLogin.password
      ) {
        sessionStorage.setItem(
          "auth",
          JSON.stringify({
            token: "123456",
            expired: false,
          }),
        );

        navigate("/dashboard");
        toast.success("Login successfully");
      } else {
        toast.error("Invalid email or password");
      }

      setLoading(false);
    }, 500);
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
        className="mt-2 w-full h-12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 hover:text-slate-300 bg-slate-400 hover:bg-slate-800 disabled:opacity-50 focus:outline-none focus:ring-offset-0 focus:ring-0"
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};
