import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const BASE_CLASSES =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

export default function Container({
  children,
  className,
}: ContainerProps) {
  const containerClassName = className
    ? `${BASE_CLASSES} ${className}`
    : BASE_CLASSES;

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
}
