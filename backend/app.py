from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    return jsonify({"message": "Data received successfully", "data": data}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

