from flask import Flask
import requests
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#route to get all breed and sub-breed data
@app.route('/all/')
def get_all_dog_data():
    req = requests.get("https://dog.ceo/api/breeds/list/all")
    return req.content

#route to query for breed image
@app.route('/image/<name>/')
def get_breed_img(name):
    imgReq = requests.get("https://dog.ceo/api/breed/" + name + "/images")
    parsedReq = json.loads(imgReq.content)
    return {
    "message" : parsedReq["message"]
    }
