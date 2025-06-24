import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jugraj Singh | Portfolio</title>
        <meta name="description" content="Portfolio of Jugraj Singh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-white px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Jugraj Singh</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              CS + Math Student • Developer • Builder of Cool Stuff
            </p>
            <a
              href="mailto:jugrajmaan99@email.com"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold transition hover:bg-gray-300"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 border-b-2 inline-block border-gray-500 pb-2">
            Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Microbit-heartbeat-display-sequencer</h3>
              <p className="text-gray-300 mb-4">
              An interactive heartbeat monitor for the BBC micro:bit V2, featuring dynamic LED animations, tempo and brightness controls, and a visual fail-safe mode—all implemented in ARMv6-M assembly.

              </p>
              <a
                href="https://github.com/Jugraj1/microbit-heartbeat-display-sequencer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Entangled Ecosphere</h3>
              <p className="text-gray-300 mb-4">
              An interactive generative art project blending ecological themes with digital expression, created using p5.js for the ANU COMP1720/6720 major project.
              </p>
              <a
                href="https://github.com/Jugraj1/entangled-ecosphere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Bulletin</h3>
              <p className="text-gray-300 mb-4">
                A feature-rich Android social platform developed for ANU's COMP2100/6442 course, featuring real-time search with custom grammar parsing, AVL tree-based ranking, and design patterns like Singleton, Factory, and Observer.
              </p>
              <a
                href="https://github.com/Jugraj1/Bulletin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Concurrent ATC Network</h3>
              <p className="text-gray-300 mb-4">
                A concurrent client–server air traffic control simulator built in C, coordinating aircraft landings across multiple simulated airports using thread pools and inter-process communication.
              </p>
              <a
                href="https://github.com/Jugraj1/concurrent-atc-network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Explicit Free List Malloc</h3>
              <p className="text-gray-300 mb-4">
                A high-performance dynamic memory allocator in C, featuring segregated free lists, constant-time coalescing, and an optional mark-and-sweep garbage collector, designed for ANU's COMP2300/6300 course.
              </p>
              <a
                href="https://github.com/Jugraj1/explicit-free-list-malloc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                View Project
              </a>
            </div>
            
          </div>
        </section>
      </main>
    </>
  )
}
