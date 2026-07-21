import { useState } from "react";

const ParticipantsCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<null | boolean>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(false);
      setResult("Feature coming soon! Verification and download pipelines are under deployment.");
    }, 1000);
  };

  return (
    <div className="py-6 flex flex-col items-center justify-center w-full max-w-lg mx-auto">
     

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        
        {/* Input Wrapper - Sharp Cyber Box */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 opacity-20 group-hover:opacity-60 transition duration-300 blur-sm" />
          
          <div className="relative flex items-center bg-slate-900/90 border border-sky-500/30 overflow-hidden focus-within:border-sky-400 transition-all">
            <div className="pl-4 text-sky-400/70">
              <MailSvg className="w-5 h-5" />
            </div>
            
            <input
              type="email"
              placeholder="Enter team leader or individual email..."
              className="w-full bg-transparent px-3 py-3.5 text-sm font-mono text-slate-100 placeholder:text-slate-500 focus:outline-none"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button - Sharp Action Box */}
        <button
          type="submit"
          disabled={loading}
          className="relative w-full overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 p-[1px] font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.99] transition-all disabled:opacity-60"
        >
          <div className="flex items-center justify-center gap-2 bg-slate-950 hover:bg-transparent px-6 py-3.5 transition-all">
            {loading ? (
              <>
                <SpinnerSvg className="w-4 h-4 animate-spin text-sky-300" />
                <span>SEARCHING DATABASE...</span>
              </>
            ) : (
              <>
                <DownloadSvg className="w-4 h-4 text-sky-300" />
                <span>GENERATE CREDENTIALS</span>
              </>
            )}
          </div>
        </button>

      </form>

      {/* Futuristic Note Box - Sharp Edges */}
      <div className="mt-6 w-full p-3.5 border border-sky-500/20 bg-sky-500/5 backdrop-blur-md flex items-start gap-3 text-xs text-slate-400 font-mono">
        <InfoSvg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-sky-300">NOTE:</strong> Provide the email registered during event registration (Team Leader's email for team events).
        </p>
      </div>

      {/* Result Message Section - Sharp Edges */}
      {result && (
        <div
          className={`mt-6 w-full p-4 border font-mono text-xs text-center leading-relaxed backdrop-blur-md transition-all ${
            verified === false
              ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {result}
        </div>
      )}

    </div>
  );
};

export default ParticipantsCertificate;

// Custom Sharp SVGs

function MailSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8">
      <rect width="20" height="16" x="2" y="4" strokeLinecap="square" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeLinecap="square" />
    </svg>
  );
}

function DownloadSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4H5v-4" strokeLinecap="square" />
      <polyline points="7 10 12 15 17 10" strokeLinecap="square" strokeLinejoin="miter" />
      <line x1="12" x2="12" y1="15" y2="3" strokeLinecap="square" />
    </svg>
  );
}

function InfoSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" />
      <line x1="12" x2="12" y1="8" y2="12" strokeLinecap="square" />
      <line x1="12" x2="12.01" y1="16" y2="16" strokeLinecap="square" />
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