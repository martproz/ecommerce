export const getFakeApiCarta = () => {
  const carta = [
    { nombre: "milanesa", imagen: "imagen", cantidad: 10 },
    { nombre: "asado", imagen: "imagen", cantidad: 10 },
    { nombre: "empanada", imagen: "imagen", cantidad: 10 },
    { nombre: "pizza", imagen: "imagen", cantidad: 10 },
    { nombre: "churrasco", imagen: "imagen", cantidad: 10 },
  ];

  const demora = 2000; 

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(carta);
    }, demora);
  });
};
