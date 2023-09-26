import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import style from "./App.module.css"
import "./global.css"
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/mateus-de-oliveira.png",
      name: "Mateus Fiúza",
      role: "Dev junior @kHub",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um porjeto que fiz no NLW Return, evento RocketSeat. o nome do projeto é DoctorCare",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-09-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/Alexsandro-Fiuza.png",
      name: "Alex Fiúza",
      role: "CTO @Loud",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um porjeto que fiz no NLW Return, evento RocketSeat. o nome do projeto é DoctorCare",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-09-25 20:30:00"),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
