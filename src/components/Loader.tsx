// Componente Loader - Indicador de carga

import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Cargando...</p>
      <style>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          gap: var(--spacing-md);
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--color-bg-secondary);
          border-top-color: var(--color-accent);
          border-radius: var(--radius-full);
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loader-container p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-base);
        }
      `}</style>
    </div>
  );
};

export default Loader;
