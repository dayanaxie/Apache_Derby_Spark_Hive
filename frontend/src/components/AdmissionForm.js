import React, { useState } from "react";

export default function AdmissionForm({ patient, onSubmit, onClose }) {
  const [form, setForm] = useState({
    ...patient,
    room: "",
    admissionTime: new Date().toISOString().slice(0, 16)
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Admitir paciente: {patient.name}</h3>
        <input name="room" placeholder="Habitación" value={form.room} onChange={handleChange} required />
        <input name="admissionTime" type="datetime-local" value={form.admissionTime} onChange={handleChange} required />
        <div className="modal-actions">
          <button type="submit" onClick={handleSubmit}>Guardar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
