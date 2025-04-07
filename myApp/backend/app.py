from flask import Flask, session, jsonify
from flask_cors import CORS
import os

# Creates the Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'password'  # Change to something secure in production


CORS(app, supports_credentials=True)

# Import and register the auth blueprint
from auth import auth_bp
app.register_blueprint(auth_bp, url_prefix='/auth')

@app.route('/')
def hello():
    return jsonify({"message": "backened says yo"})

@app.route('/protected', methods=['GET'])
def protected_route():
    # Example protected route
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify({"message": f"Welcome, user {user_id}!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
