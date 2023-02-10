import Head from 'next/head';
import { SearchBar } from './searchbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Design Thriving</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBar></SearchBar>
      </main>
    </>
  );
}
