const API_URL = 'https://your-backend-url.com/predict'; // Replace with your actual backend URL

export const getPrediction = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};
