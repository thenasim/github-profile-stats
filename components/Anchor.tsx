import React from "react";

interface Props {
  host?: string;
  href: string;
  blank?: boolean;
}

export const Anchor: React.FC<Props> = ({
  host = "",
  href,
  blank,
  children,
}) => {
  if (!href) return null;

  return (
    <a
      className="flex items-center text-gray-300 hover:text-blue-400 hover:underline"
      target={blank ? "_blank" : "_self"}
      rel="noreferrer"
      href={`${host}${href}`}
    >
      {children}
    </a>
  );
};
