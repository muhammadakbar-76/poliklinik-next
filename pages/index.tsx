import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      permanent: false,
      destination: "/protected"
    },
    props: {}
  }
}

const Home: NextPage = () => {
  return <noscript></noscript>
}

export default Home
