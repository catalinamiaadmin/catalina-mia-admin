// Importamos React y useEffect para manejar el ciclo de vida del componente
import React, { useEffect } from "react";

// Importamos la librería de escaneo
import { Html5Qrcode } from "html5-qrcode";

// Componente Scanner
function Scanner({ onScanSuccess }) {
  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    const scanner = new Html5Qrcode("reader"); // Creamos el escáner en el div con id "reader"

    // Comenzamos el escaneo con la cámara trasera (si hay disponible)
    scanner
      .start(
        { facingMode: "environment" }, // Usa la cámara trasera del celular
        {
          fps: 10, // Escanea 10 veces por segundo
          qrbox: { width: 250, height: 250 }, // Tamaño del recuadro
        },
        (decodedText) => {
          // Esta función se ejecuta al detectar un código
          onScanSuccess(decodedText); // Enviamos el texto escaneado al componente padre
          scanner.stop(); // Paramos el escáner para que no siga leyendo
        }
      )
      .catch((err) => {
        console.error("Error al iniciar la cámara:", err); // Si no se pudo iniciar
      });

    // Cleanup: se detiene el escaneo cuando el componente se desmonta
    return () => {
      scanner.stop().catch(() => {});
    };
  }, [onScanSuccess]);

  return (
    <div>
      <p>📷 Escaneá el código de barras:</p>
      <div id="reader" style={{ width: "100%" }} />
    </div>
  );
}

export default Scanner;
