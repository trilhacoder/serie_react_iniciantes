import style from "@/styles/Home.module.css"
import ListaVideosBuscavel from "@/componentes/ListaVideosBuscavel/ListaVideosBuscavel";
import { useEffect, useState } from "react";

export default function Home() {
  
  let [ videos, setVideos ] = useState([])
  
  useEffect(() => {
    fetch('https://www.googleapis.com/youtube/v3/search?key=<sua chave>&type=video&part=snippet&maxResults=10&order=viewCount&channelId=UC7iH-vb74kKzmfG56q9Y3eQ')
      .then(response => response.json())
      .then(json => {
        console.log("json retornado:")
        console.log(json)

        let videosCache = []
        json.items.forEach(item => {
          videosCache.push({
              id: item.id.videoId,
              titulo: item.snippet.title,
              descricao: item.snippet.description,
              miniatura: item.snippet.thumbnails.default.url,
              url: `https://www.youtube.com/watch?v=${item.id.videoId}`
          })
        });        
        setVideos(videosCache)
      })
      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <header className={style.cabecalho}>
          <img className={style.logo} src="logo.svg" alt="Logo do projeto" />
          <h1 className={style.tituloPagina}>Projeto Lista de Vídeos</h1>
      </header>
      <ListaVideosBuscavel videos={videos} />
    </>
  )
}


