import gspread
from oauth2client.service_account import ServiceAccountCredentials

def load_product_data():
    # Definiere, auf welche APIs wir Zugriff brauchen
    scope = [
        "https://spreadsheets.google.com/feeds",
        "https://www.googleapis.com/auth/drive"
    ]

    # Authentifiziere dich mit deinem Service-Account-JSON
    creds = ServiceAccountCredentials.from_json_keyfile_name('service_account.json', scope)
    client = gspread.authorize(creds)

    # Öffne dein Google Sheet
    sheet = client.open_by_url('https://docs.google.com/spreadsheets/d/11a58eNb-S6gPB0tIZP4dpCXp3mjQ-sSdOoFn2RsO_YQ/edit?gid=1868445609#gid=1868445609').sheet1

    # Hol alle Daten als Liste von Dictionaries
    return sheet.get_all_records()
