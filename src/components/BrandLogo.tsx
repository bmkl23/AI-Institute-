import type { MouseEvent } from "react";
import { site } from "../config/site";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
};

export function BrandLogo({
  className = "",
  imageClassName = "h-10 w-10 object-contain",
  showText = true,
  onClick,
  href = "#home",
}: BrandLogoProps) {
  return (
    <a href={href} onClick={onClick} className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <span className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-sm ring-1 ring-white/20">
        <img src={site.logo} alt={site.logoAlt} className={imageClassName} />
      </span>
      {showText && (
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-sm font-bold tracking-tight text-white sm:text-[15px]">
            Peritus
          </span>
          <span className="hidden text-[10px] font-medium text-sky-300/90 sm:block sm:text-[11px]">
            Research Bootcamp 2026
          </span>
        </span>
      )}
    </a>
  );
}
