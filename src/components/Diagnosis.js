import React, { useEffect, useState } from 'react';

const Diagnosis = () => {
    const [diagnosisData, setDiagnosisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDiagnosisData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/diagnosis'); // Replace with your endpoint
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setDiagnosisData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchDiagnosisData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h1>Diagnosis Information</h1>
            <pre>{JSON.stringify(diagnosisData, null, 2)}</pre>
        </div>
    );
};

export default Diagnosis;

