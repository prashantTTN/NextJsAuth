// "use client"
import styles from "../page.module.css";
import Cards from "../components/Cards";
import { fetchData } from "../components/commonUtils";
import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";

export default async function Blog() {
  const authSession = await getServerAuthSession();
  let blogData =  await fetchData('http://localhost:3000/api/blog');
  const blogs = !!blogData.blogs ? blogData.blogs : [];
  // console.log('blogs======', blogs);
  return (
    // <Layout>
      <div className={`${styles.main} blogPage`}>
        <div className={styles.description}>
          <p>
            Welcome to the Blog Listing Page&nbsp;
          </p>
        </div>
        {authSession?.user && <Cards blogs = {blogs} />}
        {!authSession?.user && (
          <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        )}
      </div>
    // </Layout>
  );
}
