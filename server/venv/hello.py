from flask import Flask

import pandas as pd

app = Flask(__name__)

@app.route("/")
def hello_world():
    movies = pd.read_csv("movies.csv")
    return "<p>heyo</p>"
