from flask import Flask, render_template, request, jsonify
from huggingface_hub.inference_api import InferenceApi
import json
import os

inference = InferenceApi(
  repo_id="q3fer/distilbert-base-fallacy-classification",
  token=os.getenv('token')
)

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("home.html")

@app.route('/classify', methods=['POST'])
def classify():
  text = request.form['statement']
  infer = inference(inputs=text)
  print(infer)
  res = infer[0]
  return jsonify(res)

@app.route('/get_info', methods=['GET'])
def get_info():
  with open('info.json', 'r') as file:
    return json.load(file)

if __name__ == "__main__":
  app.run(host="0.0.0.0")