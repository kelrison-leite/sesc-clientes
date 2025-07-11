import React, { useState } from 'react';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';

function App() {
  const [clientes, setClientes] = useState([]);
  const [editando, setEditando] = useState(null);

  const adicionarCliente = (cliente) => {
    if (cliente.id_cliente) {
      setClientes(clientes.map(c => (c.id_cliente === cliente.id_cliente ? cliente : c)));
    } else {
      cliente.id_cliente = Date.now();
      cliente.data_criacao = new Date().toISOString().split('T')[0];
      setClientes([...clientes, cliente]);
    }
  };

  const deletarCliente = (id) => {
    setClientes(clientes.filter(c => c.id_cliente !== id));
  };

  const editarCliente = (cliente) => {
    setEditando(cliente);
  };

  return (
    <div className="container mt-4">
  <h1 className="text-center mb-4">Cadastro de Clientes - Sesc Amazonas</h1>
  <ClienteForm salvar={adicionarCliente} clienteEditando={editando} />
  <ClienteList clientes={clientes} deletar={deletarCliente} editar={editarCliente} />
</div>

  );
}

export default App;
