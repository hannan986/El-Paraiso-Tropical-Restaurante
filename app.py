from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def load_menu():
    with open(os.path.join(BASE_DIR, 'data', 'menu.json'), 'r') as f:
        return json.load(f)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/menu')
def menu():
    return render_template('menu.html')


@app.route('/api/menu', methods=['GET'])
def get_menu():
    category = request.args.get('category')
    menu = load_menu()
    if category:
        matched = {k: v for k, v in menu.items() if k.lower() == category.lower()}
        return jsonify(matched)
    return jsonify(menu)


@app.route('/api/menu/categories', methods=['GET'])
def get_categories():
    menu = load_menu()
    return jsonify(list(menu.keys()))


@app.route('/api/specials', methods=['GET'])
def get_specials():
    specials = [
        {
            'day': 'Tuesday',
            'title': 'Mojito Tuesday',
            'description': 'All Mojitos just $7 — all night long',
            'icon': '🍹',
            'color': '#52B788'
        },
        {
            'day': 'Wednesday',
            'title': 'Empanada Happy Hour',
            'description': '6 Empanadas for $15 (4–7 PM)',
            'icon': '🥟',
            'color': '#F4A261'
        },
        {
            'day': 'Friday & Saturday',
            'title': 'Live Latin Music',
            'description': 'Live band & dancing every weekend 7–10 PM',
            'icon': '🎶',
            'color': '#E76F51'
        },
        {
            'day': 'Sunday',
            'title': 'Family Brunch Buffet',
            'description': 'All-you-can-eat brunch for $29 per person',
            'icon': '🍳',
            'color': '#FFD166'
        }
    ]
    return jsonify(specials)


@app.route('/api/reservations', methods=['POST'])
def make_reservation():
    data = request.get_json(silent=True) or {}
    required = ['name', 'email', 'phone', 'date', 'time', 'guests']
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({'success': False, 'message': f'Missing fields: {", ".join(missing)}'}), 400

    confirmation_id = f"EPT-{datetime.now().strftime('%Y%m%d%H%M%S')}"
    return jsonify({
        'success': True,
        'message': f'Reservation confirmed! Your confirmation number is {confirmation_id}. We look forward to seeing you!',
        'confirmation': confirmation_id
    })


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(silent=True) or {}
    required = ['name', 'email', 'message']
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({'success': False, 'message': f'Missing fields: {", ".join(missing)}'}), 400

    return jsonify({
        'success': True,
        'message': 'Thank you for reaching out! We will get back to you within 24 hours.'
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)
