export default function PatientList({ patients, onAdmit }) {
  return (
    <div className="card">
      <h3>Pacientes</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th><th>Especialidad</th><th>Urgencia</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.specialty}</td>
              <td>{p.urgency}</td>
              <td>{p.status}</td>
              <td>
                {p.status === "En espera" && <button onClick={() => onAdmit(p)}>Admitir</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
