from flask import Flask, jsonify, request
from flask_cors import CORS

from chatbot import Chatbot

app = Flask(__name__)

CORS(app)

chatbot = Chatbot()


@app.route("/")

def home():

    return jsonify({
        "message": "Portfolio chatbot backend is running"
    })


@app.route("/chat", methods=["POST"])

def chat():

    try:

        data = request.get_json()

        user_message = data.get("message", "")

        response = chatbot.generate_response(user_message)

        return jsonify({
            "response": response
        })

    except Exception as error:

        return jsonify({
            "error": str(error)
        }), 500


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=8080,
        debug=True
    )