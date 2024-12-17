import { Button } from "@packages/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>OMS</h1>
      <a href="/tms">
        <Button>go tms</Button>
      </a>
      <Link href={"/oms/detail"}>go Detail</Link>
    </div>
  );
}
