import "./Card.css";
import { useState } from "react";

const CompCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="CompCard"
      style={{
        background: "#0a0a0a",
        border: "1px solid #10b981", 
        borderRadius: "12px",
        color: "#e5e7eb",
      }}
    >
      <img
        src={item.image}   
        alt={item.name}
        style={{
          padding: "10px 20px",
          textAlign: "center",
          background: "#022c22",
          width: "100%",
          height: "160px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />

      <h3 style={{ color: "#10b981" }}>{item.name}</h3>

      <p>
        <strong style={{ color: "#10b981" }}>Type:</strong> {item.type}
      </p>

      <p>
        <strong style={{ color: "#10b981" }}>Price:</strong> {item.price}
      </p>

      <button
        onClick={handleOpenModal}
        style={{
          background: "#10b981",
          color: "#022c22",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Show Components info
      </button>

{showModal && (
  <div
    className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    onClick={handleCloseModal}
  >
    <div
      className="modal bg-neutral-900 p-6 rounded-xl w-96"
      onClick={e => e.stopPropagation()}
    >
      <h4 className="text-green-500 text-lg font-semibold mb-4">Components Info</h4>
      <p className="text-neutral-100 mb-6">{item.description}</p>

      <button
        onClick={handleCloseModal}
        className="close-btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
      >
        Close
      </button>
    </div>
  </div>
)}




    </div>
  );
};

export default CompCard;
