import React, { useState } from "react";

export default function ArrivalForm({ onSubmit }) {
  const [form, setForm] = useState({
    id: Date.now(),
    name: "",
    specialty: "",
    urgency: "Media",
    arrivalTime: new Date().toISOString().slice(0, 16)
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ ...form, name: "", specialty: "" });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre del paciente" value={form.name} onChange={handleChange} required />
      <input name="specialty" placeholder="Especialidad" value={form.specialty} onChange={handleChange} required />
      <select name="urgency" value={form.urgency} onChange={handleChange}>
        <option>Alta</option><option>Media</option><option>Baja</option>
      </select>
      <button type="submit">Registrar llegada</button>
    </form>
  );
}
