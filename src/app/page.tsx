import { redirect } from "next/navigation";

export default function Homepage() {
  redirect("/Dashboard"); // otomatis pindah ke /dashboard
  return null;
}
