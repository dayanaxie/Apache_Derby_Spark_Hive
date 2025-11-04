import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [sample, setSample] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/analyze")
    // axios.get("http://spark-api:8000/analyze")
      .then(res => {
        setSample(res.data.sample || []);
        const counts = {};
        res.data.sample.forEach(row => {
          counts[row.region] = (counts[row.region] || 0) + 1;
        });
        setData(Object.entries(counts).map(([region, count]) => ({ region, count })));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando datos...</p>;

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Análisis con Apache Spark</h1>

      <h2>Muestra de datos:</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", margin: "20px 0" }}>
        <thead>
          <tr>
            {sample[0] && Object.keys(sample[0]).map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sample.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((v, j) => (
                <td key={j}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Conteo por región:</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
