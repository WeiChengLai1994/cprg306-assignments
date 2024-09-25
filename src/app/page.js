import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <section><Link href="/week-2">Assignment Link</Link></section>
      <section><Link href="/week-3">Shopping List</Link></section>
      <section><Link href="/week-4">Counter Component</Link></section>
    </main>
  );
}