from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import firestore
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "https://storage.googleapis.com"}})

db = firestore.Client()
collection = db.collection('signups')

@app.route('/api/test', methods=['GET'])
def test():
    return ":)", 200

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()

        if not name or not email:
            return jsonify({'error': 'Missing name or email'}), 400

        doc_ref = collection.document()
        doc_ref.set({
            'name': name,
            'email': email
        })

        return jsonify({'message': 'Thank you for signing up!'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
