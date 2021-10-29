import Head from 'next/head'
import { blogPosts } from '../../lib/data';

export default function blogPage({ title, date, content}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>
          {title}
        </h1>
        <div>{content}</div>
        <div>{date}</div>
        </main>

    </div>
  )
}

export async function getStaticProps(context) {
  console.log(context)
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.tako === params.tako),
  };
};

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        tako: item.tako,
      }
    })),
    fallback: false,
  };
}