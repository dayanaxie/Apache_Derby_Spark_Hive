export default function Dashboard({ patients }) {
  // Validar que patients existe y es un array
  if (!patients || !Array.isArray(patients)) {
    return (
      <div className="card">
        <h3>Dashboard</h3>
        <p>No hay datos de pacientes disponibles</p>
      </div>
    );
  }

  const admitted = patients.filter(p => p.status === "Admitido");
  const waiting = patients.filter(p => p.status === "En espera");

  const avgWait = admitted.length
    ? admitted.reduce((acc, p) => acc + (new Date(p.admissionTime) - new Date(p.arrivalTime)), 0) / admitted.length / 60000
    : 0;

  return (
    <div className="card">
      <h3>Dashboard</h3>
      <p>Pacientes activos: {patients.length}</p>
      <p>En espera: {waiting.length}</p>
      <p>Admitidos: {admitted.length}</p>
      
      <p>Tiempo promedio de espera: {avgWait.toFixed(1)} min</p>
      {avgWait > 30 && <p className="alert">⚠️ Alerta: Tiempos de espera altos</p>}
    </div>
  );
}