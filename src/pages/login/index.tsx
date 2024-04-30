import CleanLayout from "../../components/Layout/clean";
import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <CleanLayout>
      <h1 className="mb-8 text-2xl text-center text-slate-400">Welcome</h1>

      <LoginForm />
    </CleanLayout>
  );
}
