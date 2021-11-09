import Head from "next/head";
import Feature from "../components/Feature";
import Process from "../components/Process";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Testimony from "../components/Testimoni";
import Testimonial from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>cafeteria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Process />
      </Layout>
    </>
  );
}
