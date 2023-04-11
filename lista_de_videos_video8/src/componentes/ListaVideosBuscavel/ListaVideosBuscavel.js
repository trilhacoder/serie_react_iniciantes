import ListaVideos from "@/componentes/ListaVideos/ListaVideos.js";
import style from "@/componentes/ListaVideosBuscavel/ListaVideosBuscavel.module.css"
import { useState } from "react";

export default function ListaVideosBuscavel({ videos }) {

    let [ textoBuscado, setTextoBuscado ] = useState("")

    let videosBuscado = videos.filter(video => video.titulo.trim().toLowerCase().includes(textoBuscado.trim().toLowerCase()))

    let listaDeVideos = textoBuscado.length > 0 ? videosBuscado : videos

    let mensagemListaVazia = textoBuscado.length > 0 ? `Não foram encontrados vídeos com o título ${textoBuscado}` : "Lista vazia."

    return (
        <>
            <input onChange={(e) => setTextoBuscado(e.target.value)} className={style.campoBusca} type="text" placeholder="Busque pelo título do vídeo ..." />
            <ListaVideos videos={listaDeVideos} mensagemListaVazia={mensagemListaVazia} />
        </>
    )
}