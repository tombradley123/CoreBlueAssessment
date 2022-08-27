import json
from flask import Flask, make_response
app = Flask(__name__)


@app.route('/', methods=['GET'])
def default():
    return "Boat-Co Backend!"

@app.route('/boats', methods=['GET'])
def getBoats():
    
    with open('data/boats.json') as f:
        resp = make_response(json.load(f))
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
