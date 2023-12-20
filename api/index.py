from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
app.json.sort_keys = False
limiter = Limiter(get_remote_address, app=app)


@app.route("/api/especialidades/<especialidade>", methods=['GET'])
@limiter.limit("30/minute")
def scrap(especialidade):
    url = f'https://www.escoteiros.org.br/especialidades/{especialidade}/'
    res = requests.get(url)

    if res.status_code == 200:
        soup = BeautifulSoup(res.text, 'html.parser')
        # Titulo

        tituloEspecialidade = soup.select('h1.header-title')

        # Imagem

        imgEspecialidade = soup.select('img.badge-image')

        # Itens
        itensEspecialidade = soup.select(
            'div.col-md-7.col-sm-12.content__text > ol > li')

        # Resposta
        dictRes = {"titulo": tituloEspecialidade[0].string,
                   "img": imgEspecialidade[0].get('src'),
                   "itens": {},

                   }

        for index, item in enumerate(itensEspecialidade):
            dictRes["itens"].update({index+1: f"{item.string}"})

        return dictRes

    elif res.status_code == 404:
        return {"error": 404}, 404


@app.errorhandler(404)
def error404(e):
    return {"error": 404}, 404


@app.errorhandler(500)
def error500(e):
    return {"error": 500}, 500


@app.errorhandler(429)
def ratelimit_handler(e):
    return {"error": "Tente fazer menos requisições"}, 429
