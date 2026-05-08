"use client";

import { usePathname } from "next/navigation";
import TrustNavbar from "@/components/trust/TrustNavbar";
import TrustFooter from "@/components/trust/TrustFooter";

// Routes with their own header/footer (rendered without site chrome).
const NO_CHROME_ROUTES = ["/styleguide"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";

  if (NO_CHROME_ROUTES.some((r) => pathname.startsWith(r))) {
    return (
      <main className="min-h-screen bg-trust-bg text-ink-700">{children}</main>
    );
  }

  return (
    <div className="min-h-screen bg-trust-bg text-ink-700 flex flex-col">
      <TrustNavbar />
      <main className="flex-1">{children}</main>
      <TrustFooter />
    </div>
  );
}
