import FormLayout from "../../components/FormLayout";
import { useState } from "react";
import { useMultiStepFormStore } from "../../stores/multi-step-form-store";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  age: number;
}

export default function MultiStepForm() {
  const { name, email, age } = useMultiStepFormStore();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  const { handleSubmit, register } = useForm<FormValues>();

  return (
    <FormLayout>
      {step === 0 && (
        <form
          onSubmit={handleSubmit((data) => {
            useMultiStepFormStore.setState({ name: data.name });
            setStep(1);
          })}
          className="flex items-center"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="flex justify-center items-center ms-2 hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
          >
            Next
          </button>
        </form>
      )}

      {step === 1 && (
        <form
          onSubmit={handleSubmit((data) => {
            useMultiStepFormStore.setState({ email: data.email });
            setStep(2);
          })}
          className="flex items-center"
        >
          <input
            {...register("email")}
            placeholder="email"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="flex justify-center items-center ms-2 hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form
          className="flex items-center"
          onSubmit={handleSubmit((data) => {
            useMultiStepFormStore.setState({ age: data.age });
            setStep(3);
          })}
        >
          <input
            {...register("age")}
            placeholder="age"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="flex justify-center items-center ms-2 hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
          >
            Show
          </button>
        </form>
      )}

      {step === 3 && (
        <div>
          <pre>{JSON.stringify({ name, email, age }, null, 2)}</pre>

          <button
            onClick={() => {
              useMultiStepFormStore.setState({ name: "", email: "", age: 0 });
              setStep(0);
            }}
            className="mt-6 flex justify-center items-center hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white px-4 py-2 rounded-md active:bg-blue-800 font-medium"
          >
            Reset
          </button>
        </div>
      )}
    </FormLayout>
  );
}
