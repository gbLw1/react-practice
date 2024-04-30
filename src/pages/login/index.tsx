import { useSearchParams } from "react-router-dom";
import CleanLayout from "../../components/Layout/clean";
import { LoginForm } from "./components/login-form";
import { RobotValidation } from "./components/robot-validation";

export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  const verifyLogin: boolean = searchParams.has("verifyLogin");

  return (
    <CleanLayout>
      <h1 className="mb-8 text-2xl text-center text-slate-400">Welcome</h1>

      {!verifyLogin && <LoginForm />}

      {verifyLogin && <RobotValidation />}
    </CleanLayout>
  );
}
