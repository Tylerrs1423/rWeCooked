from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint('auth', __name__)


users_db = {
    # Eg: "johndoe@example.com": { "password_hash":  }
}

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password: #hasn't enetered
        return jsonify({"error": "Missing email or password"}), 400
    
    if email in users_db: #alr registered
        return jsonify({"error": "User already exists"}), 400

    # Hashes the password storing
    password_hash = generate_password_hash(password)
    users_db[email] = {"password_hash": password_hash}
    
    return jsonify({"message": "Registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    # Check if user exists
    user_record = users_db.get(email)
    if not user_record:
        return jsonify({"error": "Invalid credentials"}), 401

    # Verify password
    if not check_password_hash(user_record["password_hash"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    session['user_id'] = email
    
    return jsonify({"message": "Login successful"}), 200

@auth_bp.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logged out"}), 200
