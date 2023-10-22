"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Recipe() {
  const params = useSearchParams();
  const pathname = usePathname();
  const search = params.get("recipeSlag");
  return (
    <section>
      <h1>Recipe Details</h1>
      <p>Slag: {pathname}</p>
    </section>
  );
}
