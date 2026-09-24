"use client";

import React from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type WhatsAppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({
  href,
  onClick,
  children,
  ...props
}: WhatsAppLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18406777513/yCamCOftxuYcEKnFhMlE",
        value: 1.0,
        currency: "BRL",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}