import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"
interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt='' />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Diego Fernndes</strong>
              <time title="21 de setemnro 8.23h" dateTime="2023-09-21">
                Cerca de 1h de atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
