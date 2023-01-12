import { useRouter } from "next/router"
import Link from "next/Link"

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'> Go Back</Link>
    </>
    )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}



// This throws a error that : Error: getStaticPaths is required for dynamic SSG pages and is missing for '/article/[id]'.

// export const getStaticProps = async (context) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props  : {
//             article
//         }
//     }


// }

// Dynamically generate articles when we hit this link


// export const getServerSideProps = async (context) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props  : {
//             article
//         }
//     }


// }
export default article     