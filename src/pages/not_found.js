import React from 'react';
import './styles-pages.css'; // Asegúrate de crear un archivo CSS para estilos personalizados

export default function NotFound() {
  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <h1>404 - Not Found</h1>
        <p>La página que buscas no se ha encontrado. Vuelve a la página de inicio para continuar.</p>
      </div>
    </div>
  );
}
