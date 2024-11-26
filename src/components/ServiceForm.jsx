import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import { Label } from "./ui/label.jsx";
import { Input } from "./ui/input.jsx";
import { cn } from "../utils/cn.js";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ServiceForm = () => {
  const auth = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState("");

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const pdfUpload = document.getElementById("pdf-upload").files[0];
    const excelUpload = document.getElementById("excel-upload").files[0];

    if (!pdfUpload || !excelUpload || !frequency) {
      setMessage("All fields are required");
      setLoading(false);
      return;
    }
    const user_id = auth.user["_id"];
    const formData = new FormData();
    formData.append(pdfUpload.name, pdfUpload);
    formData.append(excelUpload.name, excelUpload);
    formData.append("frequency", frequency);
    formData.append("user_id", user_id);

    console.log("Form submitted");
    console.log("PDF File: ", pdfUpload);
    console.log("Excel File: ", excelUpload);
    console.log("Frequency: ", frequency);
    console.log("id: ", user_id);

    try {
      const response = await fetch("https://localhost:5000/upload_files", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Files uploaded", data);
        setMessage("Form submitted successfully!");
      } else {
        console.log("Form submit failed");
        setMessage("Submission failed. Please check your files.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        EMAIL AUTOMATION AGENT
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Upload the relevant documents
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:space-y-0 mb-4">
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="pdf-upload"
              className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
            >
              Upload Company Details in a PDF Format
            </Label>
            <Input type="file" id="pdf-upload" accept=".pdf" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="excel-upload"
              className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
            >
              Upload lead data in an Excel Sheet
            </Label>
            <Input type="file" id="excel-upload" accept=".xlsx,.xls,.csv" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="options"
              className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
            >
              Frequency
            </Label>
            <div className="relative">
              <select
                id="options"
                value={frequency}
                onChange={handleFrequencyChange}
                className="flex h-10 w-full border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <option value="" disabled>
                  Choose an option...
                </option>
                <option value="4">4 runs</option>
                <option value="3">3 runs</option>
                <option value="2">2 runs</option>
                <option value="1">1 run</option>
              </select>
            </div>
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {message && (
          <p className="text-red-500 mt-2 justify-center flex">{message}</p>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
        >
          <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
            Request a Demo
          </span>
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <br></br>
        <ServiceForm />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Service;
