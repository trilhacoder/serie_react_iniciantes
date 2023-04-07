let listaVideos = await buscaListaVideosMock()
renderizaListaVideos(listaVideos)

let $campoBusca = document.querySelector("#campo-busca")
$campoBusca.addEventListener("keyup", () => {
    let valorBuscado = $campoBusca.value
    let videosFiltrados = listaVideos.filter(video => video.titulo.trim().toLowerCase().includes(valorBuscado.trim().toLowerCase()))
    renderizaListaVideos(videosFiltrados, `Não foram encontrados vídeos com o título "${valorBuscado}"`)
})

async function buscaListaVideosMock() {
    let videosApiMock = [
        {
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
        }
    ]
    return videosApiMock
}

async function buscaListaVideos() {
    let response = await fetch('https://www.googleapis.com/youtube/v3/search?key=<sua chave>&part=snippet&maxResults=10&order=viewCount&channelId=UC7iH-vb74kKzmfG56q9Y3eQ')    
    let json = await response.json()
    
    let videosApi = []
    json.items.forEach(item => {
        let url = ''
        if ( item.id.kind == 'youtube#playlist' ) {
            url = `https://www.youtube.com/playlist?list=${item.id.playlistId}`
        } else if ( item.id.kind == 'youtube#video' ) {
            url = `https://www.youtube.com/watch?v=${item.id.videoId}`
        }
        let videoApi = {
            id: item.id.videoId ? item.id.videoId : item.id.videoId,
            titulo: item.snippet.title,
            descricao: item.snippet.description,
            miniatura: item.snippet.thumbnails.default.url,
            url: url
        }
        videosApi.push(videoApi)
    })
    return videosApi
}

function renderizaListaVideos(videos, mensagemListaVazia = "Lista de vídeos vazia.") {
    let $videos = document.querySelector("#videos")
    $videos.innerHTML = ""

    let textoCabecalhoLista = mensagemListaVazia
    let numeroVideos = videos.length
    if (numeroVideos > 0) {
        let textoVideos = numeroVideos > 1 ? "vídeos" : "vídeo"
        textoCabecalhoLista = numeroVideos + " " + textoVideos
    }
    let $cabecalhoLista = document.querySelector("#cabecalho-lista")
    $cabecalhoLista.textContent = textoCabecalhoLista

    videos.forEach(video => renderizaVideo(video, $videos))
}

function renderizaVideo(video, $videos) {
    let videoHtml = `
        <li class="video" id="video${video.id}">
            <a class="link" target="_blank" href=${video.url}>
                <img class="miniatura" src=${video.miniatura} />
                <div class="informacoes">
                    <h3 class="titulo">${video.titulo}</h3>
                    <p class="descricao">${video.descricao}</p>
                </div>
            </a>
        </li>
    `
    $videos.insertAdjacentHTML("beforeend", videoHtml)
}