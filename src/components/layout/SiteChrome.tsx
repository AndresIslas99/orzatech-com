"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LeadMagnet from "./LeadMagnet";

const NO_CHROME_ROUTES = ["/styleguide"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const hideChrome = NO_CHROME_ROUTES.some((r) => pathname.startsWith(r));

  if (hideChrome) {
    return (
      <main className="min-h-screen bg-trust-bg text-ink-700">{children}</main>
    );
  }

  return (
    <div className="min-h-screen bg-bg-deep text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed top-20 left-10 w-72 h-72 bg-eng-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-eng-blue-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <LeadMagnet />
    </div>
  );
}
