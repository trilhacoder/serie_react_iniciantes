import style from "@/componentes/ListaVideos/ListaVideos.module.css"
import Video from "@/componentes/Video/Video.js";


export default function ListaVideos({ videos }) {
    let mensagemCabecalho = videos.length > 0 ? videos.length + " vídeos" : "Lista de vídeos vazia."
    return (
        <>
            <h2 class={style.cabecalhoLista} id="cabecalho-lista">{ mensagemCabecalho }</h2>
            <ul class={style.videos} id="videos">
                { videos.map(video => <li><Video video={video} /></li> ) }
            </ul>
        </>
    )
}

