import { useMultiStepFormStore } from "../stores/multi-step-form-store";

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const { name } = useMultiStepFormStore();

  return (
    <div className="p-4 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center text-blue-700 font-bold mb-10">
          {name ? (
            <>
              Name: <strong>{name}</strong>
            </>
          ) : (
            "Unknown"
          )}
        </h1>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default FormLayout;
