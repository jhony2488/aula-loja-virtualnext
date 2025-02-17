import { api } from './api'

export async function getStaticPaths() {
  const response = await api.get('/posts')

  return { paths: response.data, fallback: true }
}

export async function getStaticProps(id: number) {
  const response = await api.get(`/posts/${id}`)

  return { props: { post: response.data }, revalidate: 1 }
}
