import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import OpenMenu from "@/components/header/OpenMenu";
import Hero from "@/components/Hero";
import ShortenerForm from "@/components/shortener/ShortenerForm";
import Stats from "@/components/stats/Stats";
import CallToAction2 from "@/components/CallToAction2";
import Footer from "@/components/Footer";
import ShortenedLinksList from "@/components/shortener/ShortenedLinksList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [linkEntered, setLinkEntered] = useState("");
  const [resolvedShortened, setResolvedShortened] = useState<string | null>(null);
  const [linkEls, setLinkEls] = useState<any[]>(() => {
    // Ensure the same initial state for both server and client.
    if (typeof window !== "undefined") {
      const storedLinkEls = localStorage.getItem("listElements");
      return storedLinkEls ? JSON.parse(storedLinkEls) : [];
    }
    return [];
  });
  const [shortened, setShortened] = useState("");

  // Persist linkEls to local storage on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("listElements", JSON.stringify(linkEls));
    }
  }, [linkEls]);

  function handleMenuButtonClicked(): void {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <Header toggleMenu={handleMenuButtonClicked} />
      {menuOpen && <OpenMenu />}
      <Hero />
      <section className="bg-subtlegray mt-[123px]">
        <ShortenerForm
          linkEntered={linkEntered}
          onLinkEntered={setLinkEntered}
          resolvedShortened={resolvedShortened}
          shortened={shortened}
          onShortened={setShortened}
          onLinkEls={setLinkEls}
        />
        <ShortenedLinksList
          linkEls={linkEls}
          shortened={shortened}
          resolvedShortened={resolvedShortened}
          onResolvedShortened={setResolvedShortened}
        />
        <Stats />
      </section>
      <CallToAction2 />
      <Footer />
    </>
  );
}
