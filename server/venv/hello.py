from flask import Flask, jsonify
from collections import defaultdict
import pandas as pd
import json
import math

app = Flask(__name__)

usersPerMovie = defaultdict(set) # Maps a movie to the users who rated it
MoviesPerUser = defaultdict(set) # Maps a user to the movies that they rated
ratingD = {}

movies = pd.read_csv("movies.csv")
ratings = pd.read_csv("ratings.csv")

tit_movies = movies.title

@app.route("/", methods = ['GET'] )
def parse_movies():
    ret_movies = {
        "movie" : "moviez"
    }
    return ret_movies

@app.route("/search")
def hello_world():
    movies = pd.read_csv("movies.csv")
    ratings = pd.read_csv("ratings.csv")

    qualified_users = ratings[ratings.groupby('userId')['userId'].transform('size') > 30]
    qualified_movies = ratings[ratings.groupby('movieId')['movieId'].transform('size') > 20]

    qualified_ratings = pd.merge(qualified_users, qualified_movies, how = 'inner')
    final_data = pd.merge(qualified_ratings, movies, how = 'inner', on = 'movieId')
    d = final_data.to_json(orient='records')
    data = json.loads(d)

    for d in data:
        user, movie = d['userId'], d['title']
        usersPerMovie[movie].add(user)
        MoviesPerUser[user].add(movie)
        ratingD[(user,movie)] = d['rating']

    return similar_movie('Jurassic Park (1993)', 10)

def Cosine(i1, i2):
    # Between two movies
    inter = usersPerMovie[i1].intersection(usersPerMovie[i2])
    numer = 0
    denom1 = 0
    denom2 = 0
    for u in inter:
        numer += ratingD[(u,i1)]*ratingD[(u,i2)]
    for u in usersPerMovie[i1]:
        denom1 += ratingD[(u,i1)]**2
    for u in usersPerMovie[i2]:
        denom2 += ratingD[(u,i2)]**2
    denom = math.sqrt(denom1) * math.sqrt(denom2)
    if denom == 0: return 0
    return numer / denom    

def similar_movie(i, N): # i = movieName in the format 'movieName (yearReleased)', N = number of similar movies
    similarities = []
    users = usersPerMovie[i]
    for i2 in usersPerMovie:
        if i2 == i: continue
        sim = Cosine(i, i2)
        similarities.append((sim,i2))
    similarities.sort(reverse=True)
    movie_array = similarities[:3]
    ret_str = ''
    for mov in movie_array:
        ret_str += mov[1]
        ret_str += '/'
    return ret_str

if __name__ == "__main__":
    app.run(debug=True)