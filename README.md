# API de Especialidades Escoteiras

Uma API simples que retorna itens e requisitos de uma especialidade escoteira desejada. Criada como um estudo utilizando Flask, BeautifulSoup e Next.js. Você pode testar a API pelo link: https://api-especialidades.vercel.app/

## Como funciona

- Faça uma requisição `GET` pelo endpoint `"api-especialidades.vercel.app/api/especialidades/<nome>"`

- O script fara um scrapping da página, retornando as seguintes informações

```json
{
  "titulo": "Anime",
  "img": "https://www.escoteiros.org.br/wp-content/uploads/2020/06/Anime-e1592696526169.png",
  "itens": {
    "1": "Escolher 1 (um) anime de sua preferência e apresentá-lo, discorrendo sobre sua trama, personagens, criadores, artistas envolvidos, época de criação, etc.",
    "2": "Realizar uma apresentação sobre a história dos animes, destacando seu surgimento, o desenvolvimento no país de origem, os principais títulos, os principais autores e artistas e sua chegada e exibição no Brasil.",
    "...": "..."
  }
}
```

## Stack

- [Next.js](https://nextjs.org/) como framework;
- [Tailwind](https://tailwindcss.com) para estilos;
- Python para scrapping do site;
- [Vercel](https://vercel.app/) para hospedagem.

## Contribuindo

- Crie um fork do repositório;
- Faça suas alterações, correções ou o que for;
- Abra um Pull Request
