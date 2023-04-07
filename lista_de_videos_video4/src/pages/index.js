import Video from "@/componentes/Video/Video.js";

export default function Home() {
  let video = {
      id: 1,
      titulo: "Título do vídeo 1",
      descricao: "Descrição do vídeo",
      miniatura: "https://placeholder.com/160x90",
      url: "https://www.youtube.com/watch?v=I70vuF298k8"
  }
  
  return (
    <>
      <header class="cabecalho">
          <img class="logo" src="logo.svg" />
          <h1 class="titulo-pagina">Projeto Lista de Vídeos</h1>
      </header>
      <Video video={video} />
    </>
  )
}


