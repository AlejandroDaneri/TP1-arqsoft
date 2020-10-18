import time
from flask import Flask

TIMEOUT = 3

app = Flask(__name__)

@app.route("/")
def raiz():
    return "python - ping"

@app.route("/sleep")
def timeout():
    time.sleep(TIMEOUT)
    return "python - timeout"

if __name__ == "__main__":
    app.run()