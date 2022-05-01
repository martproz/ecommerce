import { ItemListContainer } from 'components/PlatosYCartas/ItemListContainer';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import milanesa from './imagenes/milanesa.jpeg'; 


function App() {
  const carta = [
    {imagen: <img src={milanesa} alt="milanesa" height="400px" width="400px"></img>, nombre: 'milanesa napolitana'},
    {imagen: '', nombre: 'milanesa napolitana'},
    {imagen: '', nombre: 'milanesa napolitana'},
    {imagen: '', nombre: 'milanesa napolitana'}
  ]

  const postres = [
    {imagen: '', titulo: 'helado'},
    {imagen: '', titulo: 'frutillas crema'},
    {imagen: '', titulo: 'flan'},
  ]

  return (
    <div>
      <NavBar />
      <ItemListContainer carta={carta} postres={postres}/>
      </div>
  );
}

export default App;
