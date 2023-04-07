import ListaVideos from "@/componentes/ListaVideos/ListaVideos.js";

export default function Home() {
  let videos = [{
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
  return (
    <>
      <header class="cabecalho">
          <img class="logo" src="logo.svg" />
          <h1 class="titulo-pagina">Projeto Lista de Vídeos</h1>
      </header>
      <ListaVideos videos={videos} />
    </>
  )
}


