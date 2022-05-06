export const getFakeApiCarta = () => {
  const carta = [
    { nombre: "milanesa", imagen: "imagen", cantidad: 10 },
    { nombre: "asado", imagen: "imagen", cantidad: 10 },
    { nombre: "empanada", imagen: "imagen", cantidad: 10 },
    { nombre: "pizza", imagen: "imagen", cantidad: 10 },
    { nombre: "churrasco", imagen: "imagen", cantidad: 10 },
  ];

  const demora = 2000; // miliseg

  return new Promise((resolve, reject) => { //3) viene de app.jsx. vamos a otra vez a app.jsx
    setTimeout(() => {
      resolve(carta);
    }, demora);
  });
};