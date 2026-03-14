import { useState } from "react";
import certificateApi from "../../api/services/certificate.api.ts";

const ParticipantsCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<null | boolean>(null);


  return (
    <div className="py-10 flex flex-col items-center">
     
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 transition-colors"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-sky-600 text-white font-semibold py-2 rounded-xl hover:bg-sky-700 transition"
          disabled={loading}
        >
          {/* {loading ? "Downloading..." : "Download"} */}
          {loading ? "Downloading..." : "Coming Soon"}
        </button>
      </form>
      {/* NOTE */}
      <div>
        <p className="mt-6 max-w-md text-center text-sm text-gray-500">
          Note: Provide individual or team leader email address.
        </p>
      </div>
      {result && (
        <div
          className={`mt-6 font-semibold max-w-md text-center break-words ${
            verified === false ? "text-red-600" : ""
          }`}
        >
          {verified === true && result.startsWith("Verification Confirmed:") ? (
            <>
              {/* <span className="text-green-600">Verification Confirmed:</span>
              <span className="text-black dark:text-gray-100 font-normal">{result.replace("Verification Confirmed:", "")}</span> */}
            </>
          ) : (
            result
          )}
        </div>
      )}
    </div>
  );
};
export default ParticipantsCertificate;
