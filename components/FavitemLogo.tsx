import Image from "next/image";

type FavitemLogoProps = {
  variant?: "compact" | "hero";
  onDark?: boolean;
  className?: string;
};

const SIZES = {
  compact: { width: 148, height: 48 },
  hero: { width: 340, height: 112 },
} as const;

export function FavitemLogo({
  variant = "compact",
  onDark = false,
  className = "",
}: FavitemLogoProps) {
  const { width, height } = SIZES[variant];
  const src = onDark ? "/favitem-logo-dark.png" : "/favitem-logo.png";

  return (
    <Image
      src={src}
      alt="Favitem"
      width={width}
      height={height}
      className={className}
      priority={variant === "hero"}
    />
  );
}
