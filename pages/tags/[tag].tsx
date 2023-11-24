import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { getAllPosts, getAllTags, getPostsByTag } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../interfaces/post'
import Twemoji from '../../lib/Twemoji'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`senharu blog`}</title>
        </Head>
        <Container>
          <Header />
		  お探しのページが見つかったよこれはtag.tsx。ホームへ戻る。
        </Container>
      </Layout>
    </>
  )
}

