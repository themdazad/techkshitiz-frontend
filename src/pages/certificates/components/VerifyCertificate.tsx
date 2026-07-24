import { useState } from "react";
import certificateApi from "@/api/services/certificate.api.ts";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<null | boolean>(null);

  const handleVerify = async (id: string) => {
    try {
      setLoading(true);
      setVerified(null);
      
      // Call to your actual API logic
      const apiResult = await certificateApi.verifyCertificate(id);
      
      if (apiResult) {
        const { message, data } = apiResult;
        const { verified: isVerified, certificate } = data;
        const participantDetails = certificate?.participant;
        const eventDetails = certificate?.event;

        if (isVerified) {
          setResult(
            `Verification Confirmed: Certificate ${id} is officially awarded to ${participantDetails?.name} for outstanding performance in the "${eventDetails?.name}" event. This achievement is validated by Government Engineering College, Siwan.`
          );
          setVerified(true);
        } else {
          setResult("Certificate ID is Invalid or Expired ❌");
          setVerified(false);
        }
      } else {
        setResult("Unable to process verification request.");
        setVerified(false);
      }
    } catch (error) {
      setResult(
        "Invalid certificate ID or an error occurred during verification."
      );
      setVerified(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-6 flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerify(certificateId);
        }}
        className="w-full flex flex-col gap-5"
      >
        {/* Input Wrapper - Sharp Cyber Glass Box */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 opacity-20 group-hover:opacity-60 transition duration-300 blur-sm" />
          
          <div className="relative flex items-center bg-slate-900/90 border border-sky-500/30 overflow-hidden focus-within:border-sky-400 transition-all">
            <div className="pl-4 text-sky-400/70">
              <KeySvg className="w-5 h-5" />
            </div>
            
            <input
              type="text"
              placeholder="Enter Certificate ID"
              className="w-full bg-transparent px-3 py-3.5 text-sm font-mono text-slate-100 placeholder:text-slate-500 focus:outline-none uppercase"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Action Button - Sharp Action Trigger */}
        <button
          type="submit"
          disabled={loading}
          className="relative w-full overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 p-[1px] font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.99] transition-all disabled:opacity-60"
        >
          <div className="flex items-center justify-center gap-2 bg-slate-950 hover:bg-transparent px-6 py-3.5 transition-all">
            {loading ? (
              <>
                <SpinnerSvg className="w-4 h-4 animate-spin text-sky-300" />
                <span>AUTHENTICATING KEY...</span>
              </>
            ) : (
              <>
                <ShieldVerifySvg className="w-4 h-4 text-sky-300" />
                <span>VERIFY CREDENTIAL</span>
              </>
            )}
          </div>
        </button>
      </form>

      {/* Result Display Block */}
      {result && (
        <div
          className={`mt-6 w-full p-5 border font-mono text-xs text-center leading-relaxed backdrop-blur-md transition-all ${
            verified === true
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              : "border-rose-500/40 bg-rose-500/10 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
          }`}
        >
          {verified === true && result.startsWith("Verification Confirmed:") ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm border-b border-emerald-500/20 pb-2 w-full">
                <CheckBadgeSvg className="w-5 h-5 text-emerald-400" />
                VERIFICATION CONFIRMED
              </div>
              
              <p className="text-slate-300 text-xs leading-relaxed text-left">
                {result.replace("Verification Confirmed:", "").trim()}
              </p>

              {/* ViewCertificate component wrapper */}
              <div className="mt-2 w-full pt-2 border-t border-emerald-500/20 flex justify-center">
                {/* <ViewCertificate data={result} /> */}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-rose-400">
              <AlertOctagonSvg className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{result}</span>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

// Custom Sharp Inline SVGs

function KeySvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8">
      <path d="M21 2l-2 2m-3 3l-3 3m2-5l3 3M8 13a5 5 0 1 1 3-3L3 21v-3h3v-3h3z" strokeLinecap="square" />
    </svg>
  );
}

function ShieldVerifySvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="square" />
      <path d="M9 12l2 2 4-4" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

function CheckBadgeSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4z" strokeLinecap="square" />
      <path d="M9 12l2 2 4-4" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

function AlertOctagonSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="square" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="square" />
    </svg>
  );
}

function SpinnerSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

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
