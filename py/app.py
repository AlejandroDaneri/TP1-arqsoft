from flask import Flask
import time
from random import randint
import datetime

TIMEOUT = 3
ID = str(randint(1,10000))

app = Flask(__name__)

@app.route("/")
def raiz():
    return "gunicorn - ping " + ID 

@app.route("/sleep")
def timeout():
    time.sleep(TIMEOUT)
    return "gunicorn - timeout " + ID 

@app.route("/heavy")
def intensive():
    start = datetime.datetime.now()

    while(datetime.datetime.now() - start <= TIMEOUT):
        pass

    return "gunicorn - heavy " + ID 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)