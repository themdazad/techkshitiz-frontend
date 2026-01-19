import { useState } from "react";
import certificateApi from "../../api/services/certificate.api.ts";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<null | boolean>(null);

  const handleVerify = async (certificateId: string) => {
    try {
      setLoading(true);
      setVerified(null);
      const result = await certificateApi.verifyCertificate(certificateId);
      if (result) {
        const { message, data } = result;
        const { verified: isVerified, certificate } = data;
        const participantDetails = certificate?.participant;
        const teamDetails = certificate?.team;
        const eventDetails = certificate?.event;

        if (isVerified) {
          setResult(
            `Verification Confirmed: Certificate ${certificateId} is officially awarded to ${participantDetails?.name} for outstanding performance in the "${eventDetails?.name}" event. This achievement is validated by Government Engineering College, Siwan.`
          );
          setVerified(true);
        } else {
          setResult("Certificate is Invalid ❌");
          setVerified(false);
        }
      } else {
        const { message } = result;
        setResult(message);
        setVerified(false);
      }
    } catch (error) {
      setResult(
        "Invalid certificate ID or an error occurred during verification.",
      );
      setVerified(false);
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
      {result && (
        <div
          className={`mt-6 font-semibold max-w-md text-center break-words ${
            verified === false ? "text-red-600" : ""
          }`}
        >
          {verified === true && result.startsWith("Verification Confirmed:") ? (
            <>
              <span className="text-green-600">Verification Confirmed:</span>
              <span className="text-black dark:text-gray-100 font-normal">{result.replace("Verification Confirmed:", "")}</span>
            </>
          ) : (
            result
          )}
        </div>
      )}
    </div>
  );
};
export default VerifyCertificate;
