"use client";
import { useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  const [Search, setSearch] = useState("");
  const [Response, setResponse] = useState("Nada ainda.");
  const handleClick = async () => {
    if (Search !== "") {
      const Request = Search.replaceAll(" ", "-");
      fetch(`/api/especialidades/${Request}`)
        .then((res) => res.json())
        .then((data: any) => {
          const res = JSON.stringify(data);
          setResponse(res.replaceAll(`","`, `",\n"`).replace(`{"1`, `{\n"1`));
        });
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center w-screen gap-4">
        <section className="w-1/2">
          <h1 className="mb-4 text-4xl font-extrabold">
            API de Especialidades Escoteiras
          </h1>
          <p>
            Seu endpoint será{" "}
            <b className="lowercase">
              "/api/especialidades/{Search.replaceAll(" ", "-")}"
            </b>
          </p>
        </section>
        <section className="w-1/2 grid gap-4">
          <div className="flex space-x-5 justify-center">
            <input
              placeholder="Insira o nome da especialidade que você deseja"
              className="w-5/6 px-4 py-2 border border-slate-200 bg-transparent text-slate-200 rounded-md	"
              type="text"
              value={Search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button
              className="w-1/6 bg-violet-700 hover:bg-violet-800 duration-300 rounded-md	"
              onClick={handleClick}
            >
              Solicitar
            </button>
          </div>
          <ReactSyntaxHighlighter
            className="flex space-x-5 justify-center h-80 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700/50 scrollbar-thumb-rounded-md"
            language="json"
            style={anOldHope}
            showLineNumbers
          >
            {Response}
          </ReactSyntaxHighlighter>
        </section>
        <p className="text-slate-600">
          Feito por Madson //{" "}
          <a
            href={"https://github.com/MadsonMendes/api-especialidades"}
            className="text-slate-400"
          >
            Source
          </a>
        </p>
      </main>
    </>
  );
}
