import style from "@/componentes/ListaVideos/ListaVideos.module.css"
import Video from "@/componentes/Video/Video.js";


export default function ListaVideos({ videos, mensagemListaVazia = "Lista de vídeos vazia." }) {
    let mensagemVideos = videos.length == 1 ? " vídeo" : " vídeos"
    let mensagemCabecalho = videos.length > 0 ? videos.length + mensagemVideos : mensagemListaVazia
    return (
        <>
            <h2 className={style.cabecalhoLista} id="cabecalho-lista">{ mensagemCabecalho }</h2>
            <ul className={style.videos} id="videos">
                { videos.map(video => <li key={video.id}><Video video={video} /></li> ) }
            </ul>
        </>
    )
}

