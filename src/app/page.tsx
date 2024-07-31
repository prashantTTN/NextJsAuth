import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (  
  <main className="flex items-center justify-center h-screen">
    <Image className={styles.logo} src="/next.svg" alt="Next.js Logo"
      width={180} height={37} priority = {false} />
    {authSession?.user && <UserInfo user={authSession?.user} />}
    {!authSession?.user && (
      <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
        Login
      </Link>
    )}
  </main>
  );
}