# connect.py

from flask import Flask, request, jsonify
import psycopg2
from mailconnect import send_email_notification
from config import *
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Connect to PostgreSQL
def connect_to_db():
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            port=DB_PORT,
        )
        return conn
    except psycopg2.OperationalError as e:
        print(f"❌ Failed to connect to database: {e}")
        return None

# Create table
def create_tables():
    conn = connect_to_db()
    if conn:
        cur = conn.cursor()
        cur.execute("""
            CREATE TABLE IF NOT EXISTS PAIFundtech (
                id SERIAL PRIMARY KEY,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                mobile VARCHAR(20) NOT NULL,
                message TEXT
            );
        """)
        conn.commit()
        conn.close()

create_tables()

# Route for form submission
@app.route("/submitForm", methods=["POST"])
def save_form_data():
    data = request.get_json()
    print("📥 Received data:", data)

    send_email_notification(data)

    conn = connect_to_db()
    if conn:
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO PAIFundtech (first_name, last_name, email, mobile, message)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING id;
            """, (
                data["firstName"],
                data["lastName"],
                data["email"],
                data["phoneNumber"],
                data["message"],
            ))
            new_id = cur.fetchone()[0]
            conn.commit()
            return jsonify({"id": new_id}), 201
        except Exception as e:
            print("❌ Database error:", e)
            return jsonify({"error": "Database insert failed"}), 500
        finally:
            conn.close()
    else:
        return jsonify({"error": "Database connection failed"}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5005)
