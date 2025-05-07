import openai
import os


openai.api_key = os.getenv("OPENAI_API_KEY")

def ask_gpt(user_question, products):
    prompt = f"""
    Du bist ein freundlicher Shop-Berater. Hier sind die aktuellen Produkte:

    {products}

    Beantworte bitte höflich und klar diese Kundenfrage:
    {user_question}
    """

    # Anfrage an OpenAI (GPT-3.5)
    response = openai.ChatCompletion.create(
        model="gpt-3.5",
        messages=[
            {"role": "system", "content": "Sei hilfsbereit, höflich und antworte klar. Keine Floskeln, direkt auf die Frage eingehen."},
            {"role": "user", "content": prompt}
        ]
    )

    # Extrahiere die Antwort
    return response["choices"][0]["message"]["content"]
