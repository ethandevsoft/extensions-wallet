import {NextPage} from 'next'
import Head from 'next/head'
import Content from 'components/modules/Home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </div>
  )
}

export default Home
