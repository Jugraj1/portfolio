import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jugraj Singh | Portfolio</title>
        <meta name="description" content="Portfolio of Jugraj Singh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Jugraj Singh</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            CS + Math Student • Developer • Builder of Cool Stuff
          </p>
          <a
            href="mailto:jugrajmaan99@@email.com"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold transition hover:bg-gray-300"
          >
            Contact Me
          </a>
        </div>
      </main>
    </>
  )
}
