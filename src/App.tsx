import axios from "axios";
import ListarProdutos from './components/ListarProdutos';
import React, { useEffect } from "react";

function App() {

  useEffect(()=> {
    axios.get("http://localhost:5256/api/produto/listar")
      .then((response)=>{
        console.log(response);
      })

  },[])


  return (
    <div className="App">
      <h1>Olá mundo em React</h1>
      <ListarProdutos></ListarProdutos>
    </div>
  );
}
export default App;
