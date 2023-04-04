
import style from "@/componentes/Video/Video.module.css"

export default function Video() {

    let video = {
        id: 1,
        titulo: "Título do vídeo 1",
        descricao: "Descrição do vídeo",
        miniatura: "https://placeholder.com/160x90",
        url: "https://www.youtube.com/watch?v=I70vuF298k8"
    }

    return (
        <li className={style.video} id={"video" + video.id} >
            <a className={style.link} target="_blank" href={video.url}>
                <img className={style.miniatura} src={video.miniatura} />
                <div className={style.informacoes}>
                    <h3 className={style.titulo}>{video.titulo}</h3>
                    <p className={style.descricao}>{video.descricao}</p>
                </div>
            </a>
        </li>
    )
}