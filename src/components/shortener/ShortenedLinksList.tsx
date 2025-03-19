"use client";

import { useEffect, useState } from "react";
import ShortenedLink from "./ShortenedLink";

interface ShortenedLinkProps {
  linkEls: any[];
  shortened: Promise<string> | string;
  resolvedShortened: string | null;
  onResolvedShortened: (resolved: string) => void;
}

export default function ShortenedLinksList({
  shortened,
  resolvedShortened,
  onResolvedShortened,
  linkEls,
}: ShortenedLinkProps) {
  // Track if the component has mounted to avoid SSR mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect to resolve the shortened link
  useEffect(() => {
    if (shortened) {
      if (typeof shortened === "object" && "then" in shortened) {
        shortened.then((result: string) => {
          onResolvedShortened(result);
        });
      } else {
        onResolvedShortened(shortened as string);
      }
    }
  }, [shortened, onResolvedShortened]);

  if (!isMounted) {
    return null;
  }

  if (resolvedShortened === undefined) {
    return (
      <p className="text-center text-sm text-red">
        Oops, cannot shorten this link!
      </p>
    );
  }

  if (!resolvedShortened && linkEls.length === 0) {
    return <p className="text-center text-sm text-green-400">Loading...</p>;
  }

  return (
    <section className="flex flex-col mx-auto w-full -translate-y-[72px] mt-8 space-y-4">
      {linkEls.map((linkItem) => (
        <ShortenedLink
          key={linkItem.id}
          linkEntered={linkItem.url}
          linkItem={linkItem}
          resolvedShortened={linkItem.shortenURL}
        />
      ))}
    </section>
  );
}
