import React, { useState } from "react";
import ArrivalForm from "../components/ArrivalForm";
import AdmissionForm from "../components/AdmissionForm";
import PatientList from "../components/PatientList";

export default function AdmissionsPage() {
  const [patients, setPatients] = useState([]);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleArrival = (newPatient) => {
    setPatients([...patients, { ...newPatient, status: "En espera" }]);
  };

  const handleAdmit = (patient) => {
    setSelectedPatient(patient);
    setShowAdmissionForm(true);
  };

  const handleAdmission = (updatedPatient) => {
    setPatients(patients.map(p =>
      p.id === updatedPatient.id ? { ...updatedPatient, status: "Admitido" } : p
    ));
    setShowAdmissionForm(false);
  };

  return (
    <div>
      <h2>Gestión de Admisiones</h2>
      <ArrivalForm onSubmit={handleArrival} />
      <PatientList patients={patients} onAdmit={handleAdmit} />

      {showAdmissionForm && (
        <AdmissionForm
          patient={selectedPatient}
          onSubmit={handleAdmission}
          onClose={() => setShowAdmissionForm(false)}
        />
      )}
    </div>
  );
}
