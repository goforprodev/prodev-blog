import type { NextPage } from "next";
import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
const posts = [
   {title: "Hello Next.js", excerpt: "Alex is a fool"},
   {title: "Hello Next.js", excerpt: "Alex is a fool"},
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Prodev-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12"> 
        <div className = "col-1">
        {posts.map((post,index) => (
          <PostCard key={index} post={post} />
        ))}
        </div>
        <div className="col-2">
          <div className="lg:sticky">
            <PostWidget/>
            <Categories />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
