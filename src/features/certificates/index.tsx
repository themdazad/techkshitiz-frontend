
import { useState } from "react";
import VerifyCertificate from "./verify-certificate";
import ParticipantsCertificate from "./participants-certificate";

const Certificates = () => {
  const [activeTab, setActiveTab] = useState<"verify" | "participants">("verify");

  return (
    <section className="min-h-[70vh] m-auto">
      <div className="py-20 flex flex-col items-center">
        <h1 className="text-4xl font-syne font-bold mb-4">Certificate</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Verify and download your certificates for Techkshitiz events.
        </p>
      </div>

      <div className="tabs flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 ${
            activeTab === "verify"
              ? "bg-sky-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("verify")}
        >
          Verify
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 ${
            activeTab === "download"
              ? "bg-sky-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("download")}
        >
          Winner Certificate
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 ${
            activeTab === "participants"
              ? "bg-sky-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("participants")}
        >
          Participants Certificate
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "verify" && (
          <VerifyCertificate />
        )}
        {activeTab === "participants" && (
         <ParticipantsCertificate/>
        )}
      </div>
    </section>
  );
};

export default Certificates;
