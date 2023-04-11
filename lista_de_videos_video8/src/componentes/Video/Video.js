
import style from "@/componentes/Video/Video.module.css"

export default function Video({ video }) {

    return (
        <div className={style.video} id={"video" + video.id} >
            <a className={style.link} target="_blank" href={video.url}>
                <img className={style.miniatura} src={video.miniatura} alt="Imagem miniatura do vídeo." />
                <div className={style.informacoes}>
                    <h3 className={style.titulo}>{video.titulo}</h3>
                    <p className={style.descricao}>{video.descricao}</p>
                </div>
            </a>
        </div>
    )
}