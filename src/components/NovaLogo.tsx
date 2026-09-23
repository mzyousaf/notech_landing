type NovaLogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md";
};

export default function NovaLogo({ showWordmark = true, size = "md" }: NovaLogoProps) {
  const box = size === "sm" ? "h-8 w-8 rounded-md" : "h-9 w-9 rounded-lg";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex ${box} items-center justify-center bg-blue-600 shadow-sm shadow-blue-900/40`}
      >
        <svg viewBox="0 0 24 24" className={`${icon} text-white`} fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight text-white">
          Nova <span className="font-normal text-slate-300">Labs</span>
        </span>
      )}
    </span>
  );
}
