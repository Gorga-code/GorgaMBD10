import { useEffect, useState } from 'react'

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      image: 'https://picsum.photos/500?random=1',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      image: 'https://picsum.photos/500?random=2',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body:
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      image: 'https://picsum.photos/500?random=3',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body:
        'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      image: 'https://picsum.photos/500?random=4',
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body:
        'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      image: 'https://picsum.photos/500?random=5',
    },
  ],
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Counter sekarang ${count}. Angka habis dibagi 10!`)
    }
  }, [count])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">Gorga Simatupang</p>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              4th Semester Computer Engineering student at University of Indonesia (ID: 2406487020)
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-slate-700">
            <a href="#home" className="rounded-full px-4 py-2 transition hover:text-cyan-600 hover:underline">
              Home
            </a>
            <a href="#cards" className="rounded-full px-4 py-2 transition hover:text-cyan-600 hover:underline">
              Portfolio
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 transition hover:text-cyan-600 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-8 py-16 space-y-16">
        <section id="home" className="rounded-[32px] bg-gradient-to-r from-cyan-100 via-white to-slate-100 p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Siantar</p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Halo, saya Gorga. Selamat datang di halaman saya.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
                Di sini saya menunjukkan sample Tailwind Flexbox, responsive grid card, dan contoh useState + useEffect.
              </p>
            </div>
            <div className="rounded-[28px] bg-slate-900 p-8 text-white shadow-xl shadow-slate-200/20">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Contact</p>
              <p className="mt-4 text-lg font-medium">082269826237</p>
              <div className="mt-6 rounded-3xl bg-slate-800/90 p-5 text-sm leading-7 text-slate-200">
                <p>Profile singkat</p>
                <p className="mt-2">
                  Saya adalah mahasiswa Teknik Komputer yang menyukai pembuatan antarmuka web
                  responsif dan interaktif menggunakan React.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cards" className="space-y-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Card Gallery</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Data cards yang dirender dengan map</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">Page {response.page}</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {response.results.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover rounded-t-[28px]" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Post #{item.id}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 whitespace-pre-line">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Counter Demo</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Contoh useState dan useEffect</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Klik tombol untuk meningkatkan, mengurangi, atau mereset angka. useEffect akan menampilkan alert setiap kali angka habis dibagi 10.
              </p>
            </div>

            <div className="rounded-[28px] bg-slate-50 p-6 text-center ring-1 ring-slate-200">
              <p className="text-6xl font-semibold text-slate-900">{count}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                  onClick={() => setCount((value) => value + 1)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="rounded-full bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-300"
                  onClick={() => setCount((value) => value - 1)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-500"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
