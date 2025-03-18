function CadastrarProduto{
    return(
        <div>
            <h1>Cadastrar Produtos</h1>
            <div>
                <label>Nome</label>
                <input type="text" onChange={(e : any) =>console.log(e.target.value)}/>
            </div>
        </div>
    );
}

export default CadastrarProduto;