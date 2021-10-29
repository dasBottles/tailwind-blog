import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='mx-auto w-9/12'>
      <header>
        <h1 className='text-6xl font-bold text-center  p-4' >My Blogs</h1>
        <nav>
          <ul className='flex flex-row justify-center space-x-3'>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul> 
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
