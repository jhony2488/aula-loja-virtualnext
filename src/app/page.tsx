'use client';

import { useEffect, useState } from "react"

import { getStaticPaths } from "./services/posts"

import CardPost from "./components/CardPost"

type PropsPost = {
  id: number;
  body: string;
  title: string;
}

export default function Home() {

  const [posts, setPosts] = useState([])

  async function getPostsApi() {
    const response = await getStaticPaths();

    setPosts(response.paths)
  }

  useEffect(() => {
    getPostsApi();
  }, [])

  return (
    <main>
      <h1>Blog Pessoal</h1>
      <section className="flex gap-16">
        {posts.map((post: PropsPost) => {
          return (<CardPost key={post.id} description={post.body} id={post.id} title={post.title} />)
        })}
      </section>
    </main>
  );
}
