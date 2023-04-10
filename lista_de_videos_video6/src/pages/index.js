
import ListaVideosBuscavel from "@/componentes/ListaVideosBuscavel/ListaVideosBuscavel";
import { useEffect, useState } from "react";

export default function Home() {
  
  let [ videos, setVideos ] = useState([])
  
  useEffect(() => {
    let videosCache = [{
        id: 1,
        titulo: "Título do vídeo 1",
        descricao: "Descrição do vídeo",
        miniatura: "https://placeholder.com/160x90",
        url: "https://www.youtube.com/watch?v=I70vuF298k8"
    },
    {
        id: 2,
        titulo: "Título do vídeo 2",
        descricao: "Descrição do vídeo",
        miniatura: "https://placeholder.com/160x90",
        url: "https://www.youtube.com/watch?v=I70vuF298k8"
    },
    {
        id: 3,
        titulo: "Título do vídeo 3",
        descricao: "Descrição do vídeo",
        miniatura: "https://placeholder.com/160x90",
        url: "https://www.youtube.com/watch?v=I70vuF298k8"
    },
    {
        id: 4,
        titulo: "Título do vídeo 4",
        descricao: "Descrição do vídeo",
        miniatura: "https://placeholder.com/160x90",
        url: "https://www.youtube.com/watch?v=I70vuF298k8"
    }]

    setVideos(videosCache)
  }, [])
  
  return (
    <>
      <header className="cabecalho">
          <img className="logo" src="logo.svg" />
          <h1 className="titulo-pagina">Projeto Lista de Vídeos</h1>
      </header>
      <ListaVideosBuscavel videos={videos} />
    </>
  )
}


