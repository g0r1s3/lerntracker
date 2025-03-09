from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Erlaubt Kommunikation mit Frontend

@app.route('/api/test')
def test():
    return {"message": "Backend läuft!"}

if __name__ == '__main__':
    app.run(debug=True)
