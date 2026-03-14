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

        console.log(data);

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
    <div className="py-10 flex flex-col items-center">
    
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerify(certificateId);
        }}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter Certificate ID (e.g., GECSTKHKTHN00)"
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
      {/* NOTE */}
      <div>
        <p className="mt-6 max-w-md text-center text-sm text-gray-500">
          Note: Available for Techkshitiz'25 and later only.
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
              <span className="text-green-600">Verification Confirmed:</span>
              <ViewCertificate data={result} />
              {/* <span className="text-black dark:text-gray-100 font-normal">{result.replace("Verification Confirmed:", "")}</span> */}
            </>
          ) : (
            result
          )}
        </div>
      )}
    </div>
  );
};

const ViewCertificate = ({ data }: { data: string }) => {
  // Extract certificate details from the string using regex
  console.log("ViewCertificate data:", data);

  // Extract values, keep brackets if present (they are placeholders)
  const idMatch = data.match(/Certificate ([^ ]+)/i);
  const nameMatch = data.match(/awarded to ([^\[]*\[[^\]]+\][^ ]*|[^ ]+)/i);
  const eventMatch = data.match(/in the \"([^\"]+)\" event/i);
  const year = new Date().getFullYear();

  const certificateId = idMatch ? idMatch[1].trim() : '';
  const participantName = nameMatch ? nameMatch[1].trim() : '';
  const eventName = eventMatch ? eventMatch[1].trim() : '';

  return (
    <div className="mt-8 w-full flex justify-center overflow-x-auto" style={{ minHeight: '820px', overflow: 'visible' }}>
      <div
        className="relative bg-white  border border-gray-300 dark:border-gray-700 shadow-xl"
        style={{
          width: '1123px',
          height: '794px',
          minWidth: '1123px',
          minHeight: '794px',
          maxWidth: '1123px',
          maxHeight: '794px',
          aspectRatio: '1123/794',
          fontFamily: 'serif',
          borderRadius: '16px',
          overflow: 'visible',
          boxSizing: 'border-box',
          display: 'block',
        }}
      >
        {/* Top Row: Logo, Certificate ID, Seals */}
        <div className="flex justify-between items-start px-12 pt-8">
          <img src="/images/certificate/techkshitiz_logo_dark.png" alt="TechKshitiz Logo" className="h-14 w-auto" />
          <div className="flex-1 flex flex-col items-center">
            <span className="text-blue-700 font-mono text-sm font-semibold tracking-wide">Certificate ID: <span className="text-black dark:text-white">{certificateId ? certificateId : "[ID]"}</span></span>
          </div>
          <div className="flex gap-4">
            <img src="/images/certificate/college_logo.png" alt="Seal 1" className="h-12 w-auto" />
          </div>
        </div>

        {/* Certificate Title */}
        <div className="flex flex-col items-center mt-2">
          <span className="font-cursive text-[64px] text-blue-500 leading-none">Certificate</span>
          <span className="uppercase text-blue-700 tracking-widest text-2xl font-bold -mt-2">of Achievement</span>
          <span className="mt-2 text-blue-400 text-lg tracking-widest font-semibold">This certificate is proudly presented to</span>
        </div>

        {/* Recipient Name */}
        <div className="flex flex-col items-center mt-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-wide">{participantName ? participantName : "[Name]"}</span>
        </div>

        {/* Main Certificate Body */}
        <div className="flex flex-col items-center mt-6 px-24">
         {data}
        </div>

       

        {/* Signatures Row */}
        {/* <div className="flex justify-between items-end px-24 mt-16">
          <div className="flex flex-col items-center">
            <span className="block w-40 h-0.5 bg-gray-400 mb-1" />
            <span className="text-xs text-gray-500">CLUB In-charge</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block w-40 h-0.5 bg-gray-400 mb-1" />
            <span className="text-xs text-gray-500">Event Manager</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block w-40 h-0.5 bg-gray-400 mb-1" />
            <span className="text-xs text-gray-500">Principal, GEC Siwan</span>
          </div>
        </div> */}

        {/* Bottom right geometric shape (SVG) */}
        <svg className="absolute bottom-8 right-8 opacity-60" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 110 L30 90 L50 100 L70 80 L90 100 L110 70 L100 30 L80 10 L60 30 L40 10 L20 40 Z" stroke="#38bdf8" strokeWidth="2" fill="none" />
        </svg>

        {/* Optional watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[120px] font-extrabold text-gray-200 opacity-20 tracking-widest" style={{ fontFamily: 'sans-serif' }}>TECH KSHITIZ</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
