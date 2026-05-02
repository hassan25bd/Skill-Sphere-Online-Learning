export function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex min-h-[35vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-white/35 bg-white/70 px-6 py-3 backdrop-blur-md">
        <span className="loading loading-spinner loading-md text-brand"></span>
        <span className="text-sm font-semibold text-slate-700">{label}</span>
      </div>
    </div>
  );
}
