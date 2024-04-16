from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import random

app = Flask(__name__)
CORS(app,resources={r"/api/*": {"origins": "https://vaishnavi-reddy-kancharla.github.io"}})  # Enable CORS

def get_random_quote():
    connection = sqlite3.connect('quotes.db')
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM quotes')
    quotes = cursor.fetchall()

    random_quote = random.choice(quotes) if quotes else None
    connection.close()
    return random_quote

@app.route('/api/quotes/random', methods=['GET'])
def random_quote():
    quote = get_random_quote()
    if quote:
        return jsonify({'id': quote[0], 'text': quote[1], 'author': quote[2]}), 200
    else:
        return jsonify({'error': 'No quotes available'}), 404

if __name__ == '__main__':
    app.run(debug=True)
