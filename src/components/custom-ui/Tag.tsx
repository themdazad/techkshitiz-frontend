interface PropsType{
  text:String,
}

export default function Tag({text}:PropsType) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/40 bg-sky-950/20 text-xs font-mono text-sky-400 tracking-widest uppercase shadow-[0_0_10px_-2px_rgba(56,189,248,0.2)]">
      <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
      <span>{text}</span>
    </div>
  );
}