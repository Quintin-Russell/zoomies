from flask import Flask
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/all/')
def get_all_dog_data():
    req = requests.get("https://dog.ceo/api/breeds/list/all")
    return req.content
