import Head from 'next/head'
import Link from 'next/dist/client/link'
import { getAllPosts } from '../lib/data'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='space-y-4'>
          {posts.map((item) => {
            return (
              <BlogListItem key={item.tako} {...item} />
            )
        })}
        </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPost = getAllPosts();
  return {
    props: {
      posts: allPost.map(({data, content, tako}) => ({
        ...data,
        date: format(new Date(), 'MMMM Lo, yyyy h:mm a'),
        content,
        tako,
      }))
    } 
  }
};


function BlogListItem({tako, title, date, content}) {
  return (
    <div className='border border-black shadow rounded-md p-4 hover:shadow-lg hover:border-blue-700 transition duration-300 ease-in'>
      <div>
        <Link href={`/blog/${tako}`}>
          <a className='text-lg font-bold'>{title}</a>
          </Link>
      </div>
      {/* <div className='prose'>
        <MDXRemote {...content} />
      </div> */}
      <div>{date}</div>
    </div>

  )
}