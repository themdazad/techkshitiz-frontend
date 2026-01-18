import { useState } from "react";
import certificateApi from "../../api/services/certificate.api.ts";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (certificateId: string) => {
    try {
      setLoading(true);
      const response = await certificateApi.verifyCertificate(certificateId);
      if (response.data) {
        const { message, data } = response.data;
        // setResult(message);
        setResult("This feature is currently unavailable. Please try again later.");
      }
    } catch (error) {
      setResult("invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 flex flex-col items-center">
      <h1 className="text-4xl font-syne font-bold mb-4">Verify Certificate</h1>
      <p className="text-lg text-gray-600  mb-8">
        Enter your certificate ID to verify its authenticity.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerify(certificateId);
        }}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Ex- GECSTK..."
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
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>
      <div className="mt-6 text-green-600 font-semibold">{result}</div>
    </div>
  );
};
export default VerifyCertificate;
