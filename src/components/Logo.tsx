import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center justify-center p-2", className)}>
      <div className="relative">
        <div className="bg-primary rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-lg animate-pulse-glow">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
            English
            <span className="text-secondary-foreground ml-1 bg-secondary px-1.5 sm:px-2 py-0.5 rounded-lg text-sm sm:text-lg md:text-xl">
              Hub
            </span>
          </h1>
        </div>
        <div className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 bg-accent text-accent-foreground text-[8px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full animate-float">
          80+
        </div>
      </div>
    </div>
  );
};
