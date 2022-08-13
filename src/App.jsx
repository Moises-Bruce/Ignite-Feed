import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css";

import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Moisés Bruce" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore vel voluptas impedit ducimus nemo quis recusandae corrupti illum possimus maxime ipsa aspernatur tenetur sed ad repellat officia corporis! Tempore."
        />

        <Post 
          author="Gabriella Fraiji"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis vero, placeat eum dolorum magni debitis est dolorem fugiat quo quos officia fugit laudantium maiores et nesciunt rem id totam!"
        />
        </main>
      </div>
    </div>
  )
}

