import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CreateTemplate() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userInputs, setUserInputs] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("User Inputs:", userInputs);
    navigate("/template");
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderQuestions = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
      (questionNum) => (
        <div key={questionNum} className="mb-4 ">
          <label
            htmlFor={`question${questionNum}`}
            className="block text-base font-medium text-gray-700 mb-2"
          >
            {getQuestionLabel(`question${questionNum}`)}
          </label>
          <input
            type="text"
            id={`question${questionNum}`}
            value={
              userInputs[`question${questionNum}` as keyof typeof userInputs]
            }
            onChange={handleInputChange}
            className="w-full bg-gray-200 px-4 py-2 text-base text-gray-800 border border-blue-300 rounded-md shadow-sm focus:outline-none transition duration-200 ease-in-out"
            placeholder={getPlaceholder(`question${questionNum}`)}
          />
        </div>
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r pb-60 p-4">
      <motion.div
        className="w-full max-w-xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <BorderBeam />
        <form onSubmit={handleSubmit} className="space-y-6 gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && renderQuestions(1, 2)}
              {step === 2 && renderQuestions(3, 4)}
              {step === 3 && renderQuestions(5, 6)}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-6">
            <motion.button
              type="button"
              onClick={prevStep}
              className={`px-4 py-2 rounded-md text-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200 ease-in-out ${
                step === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={step === 1}
            >
              Previous
            </motion.button>
            <motion.button
              type={step === 3 ? "submit" : "button"}
              onClick={step === 3 ? undefined : nextStep}
              className="px-4 py-2 rounded-md text-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {step === 3 ? "Generate" : "Next"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function getQuestionLabel(key: string): string {
  const labels: { [key: string]: string } = {
    question1: "What is the primary goal of your landing page?",
    question2: "Who is your target audience?",
    question3: "What is the main message you want to convey?",
    question4: "What features should be highlighted?",
    question5: "What is the desired tone of the page?",
    question6: "What call-to-action should be included?",
  };
  return labels[key] || "";
}

function getPlaceholder(key: string): string {
  const placeholders: { [key: string]: string } = {
    question1: "e.g., Increase sign-ups",
    question2: "e.g., Young professionals",
    question3: "e.g., Our product saves time",
    question4: "e.g., User-friendly interface",
    question5: "e.g., Professional and friendly",
    question6: "e.g., Sign up now",
  };
  return placeholders[key] || "";
}
