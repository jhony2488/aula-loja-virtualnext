'use client';
import { useState, useEffect } from "react"
import { getStaticProps } from "../../services/posts"
import { useParams } from 'next/navigation';

export default function PagePostDetails() {
    const router = useParams()

    const id = router.id

    const [post, setPost] = useState({ id: 0, title: "", body: "", userId: 0 })

    async function getPost() {
        const response = await getStaticProps(id && typeof id == "string" ? parseInt(id || "0") : 0)

        setPost(response.props.post)
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>
            <h1>
                {post.id} - {post.title}
            </h1>

            <p>
                {post.body}
            </p>

            <p>Author: {post.userId}</p>
        </div>
    );
}
