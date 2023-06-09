
import ListaVideosBuscavel from "@/componentes/ListaVideosBuscavel/ListaVideosBuscavel";
import { useEffect, useState } from "react";

export default function Home() {
  
  let [ videos, setVideos ] = useState([])
  
  useEffect(() => {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlOIRD4A_sd9llVLF-R2LbmEttuDHn4VI&type=video&part=snippet&maxResults=10&order=viewCount&channelId=UC7iH-vb74kKzmfG56q9Y3eQ')
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
      <header className="cabecalho">
          <img className="logo" src="logo.svg" />
          <h1 className="titulo-pagina">Projeto Lista de Vídeos</h1>
      </header>
      <ListaVideosBuscavel videos={videos} />
    </>
  )
}


