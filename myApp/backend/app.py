from flask import Flask, session
from flask_cors import CORS
from auth import auth_bp  # Import the Blueprint from auth.py

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key_here'

CORS(app, supports_credentials=True)

# Register the Blueprint
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
