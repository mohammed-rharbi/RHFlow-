'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function JobApplication({ jobId, userId }: { jobId: string; userId: string }) {
  const [formData, setFormData] = useState({
    userId: userId,
    jobId: jobId,
    coverLetter: '',
    resume: null as File | null,
    phoneNumber: '',
  });

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'file'
      ? (e.target as HTMLInputElement).files?.[0] || null
      : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('/api/job/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          userId: '',
          jobId: '',
          coverLetter: '',
          resume: null,
          phoneNumber: '',
        });
        setCurrentStep(1);
        router.back();
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-50 py-10 px-4">


          <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-700 mb-4">
            Application Steps
          </h3>
          
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-xl shadow-2xl dark:bg-gray-800">

        <div className="flex-1 p-8">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-lg text-white text-2xl font-bold shadow-md">
            Submit Your Job Application
          </div>
          <form onSubmit={handleSubmit} className="mt-6">

            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <label
                  htmlFor="resume"
                  className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-600 focus:border-blue-600"
                  required
                />
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition duration-300"
                >
                  Next
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your phone number"
                  required
                />
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <label
                  htmlFor="coverLetter"
                  className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Write your cover letter here..."
                  rows={6}
                  required
                ></textarea>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>


        <div className="w-full lg:w-96 bg-gray-50 p-8 rounded-r-xl dark:bg-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Application Process</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Follow these steps to complete your application smoothly:
          </p>
          <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
            {currentStep === 1 && (
              <li>
                <strong>Step 1:</strong> Upload your resume. Make sure it is up-to-date and highlights your relevant skills.
              </li>
            )}
            {currentStep === 2 && (
              <li>
                <strong>Step 2:</strong> Provide your phone number so we can contact you for further steps.
              </li>
            )}
            {currentStep === 3 && (
              <li>
                <strong>Step 3:</strong> Write a compelling cover letter to showcase your motivation and suitability for the role.
              </li>
            )}
          </ul>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Use the navigation buttons below the form to move between steps. Ensure all information is accurate before submission.
          </p>
        </div>

      </div>
    </div>
  );
}
