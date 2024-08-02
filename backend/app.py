import os
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Determine the path to the model file relative to the backend directory
base_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(base_dir, 'my_model.h5')  # Adjust the file extension if necessary

if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found at path: {model_path}")

model = load_model(model_path)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Ensure the file is an image
        img = Image.open(io.BytesIO(file.read()))
        img = img.convert('RGB')  # Convert to RGB if it's a different format
        img = img.resize((224, 224))  # Adjust size as needed
        img_array = np.array(img)

        # Check if the image has 3 channels
        if img_array.shape[-1] != 3:
            return jsonify({'error': 'Image should have 3 channels (RGB)'}), 400

        img_array = img_array / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/diagnosis', methods=['GET'])
def diagnosis():
    # Implement your diagnosis logic here
    return jsonify({'message': 'Diagnosis endpoint not yet implemented'})

if __name__ == '__main__':
    app.run(debug=True)
