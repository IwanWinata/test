import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the dynamic path
  redirect(`/contractor`);
  return null;
}
