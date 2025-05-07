from flask import Flask, request, jsonify
from gpt_service import ask_gpt
import psycopg2
import os
from dotenv import load_dotenv

# .env-Datei laden
load_dotenv()

app = Flask(__name__)
DATABASE_URL = os.getenv("DATABASE_URL")


def load_product_data():
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    cur.execute("SELECT name, description, price FROM products;")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return [{"name": r[0], "description": r[1], "price": float(r[2])} for r in rows]


@app.route("/", methods=["GET"])
def home():
    return "✅ GPT-Bot Server läuft!"


@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"error": "Keine Nachricht erhalten."}), 400

    products = load_product_data()
    reply = ask_gpt(user_input, products)
    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(debug=True)
