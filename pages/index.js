import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <h1>Welcome to next</h1>
      <ArticleList articles = {articles}/>
    </div>
  );
}

// fetching data from a third party api

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// We fetch articles in the function, pass it as props to the page which passes it to the component
