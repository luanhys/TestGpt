from flask import Flask, request, jsonify
from google_sheets import load_product_data
from gpt_service import ask_gpt

# Erzeuge einen neuen Flask-Server
app = Flask(__name__)

# Prüfen ob Serber läuft
@app.route("/", methods=["GET"])
def home():
    return "✅ GPT-B ot Server läuft!"

# Hier gelangen die Nachrichten des Nutzers
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json     # Holt JSON-Daten aus Anfrage
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"error": "Keine Nachricht erhalten."}), 400

    #Produktdaten aus Google Sheet holen
    products = load_product_data()

    #GPT antworten lassen
    reply = ask_gpt(user_input, products)

    #Antwort zurückschicken
    return jsonify({"reply": reply})

# Server starten, falls lokal ausgeführt
if __name__ == "__main__":
    app.run(debug=True)