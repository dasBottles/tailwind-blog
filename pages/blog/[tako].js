import Head from 'next/head'
import { getAllPosts } from '../../lib/data';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
export default function blogPage({ title, date, content}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <div className='border-b-2 border-gray-200 mb-4'>
          <h2 className='font-bold text-3xl'>
            {title}
          </h2>
          <div className='text-gray-800 text-md'>{date}</div>
          </div>
        <body>
          <div className='prose'>
            <MDXRemote {...content} />
          </div>
        </body>

        </main>

    </div>
  )
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const allPost = getAllPosts();
//   const { data, content } = allPost.find((item) => item.tako === params.tako)
//   const mdxSource = await serialize(content);
//   return {
//     props: {
//       ...data,
//       content: mdxSource,
//     } 
//   }
// };

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.tako === params.tako);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const allPost = getAllPosts();
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        tako: post.tako,
      }
    })),
    fallback: false,
  };
}