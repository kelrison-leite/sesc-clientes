import React from 'react';

const ClienteList = ({ clientes, deletar, editar }) => {
  return (
    <table className="table table-striped table-bordered">
  <thead className="table-dark">
    <tr>
      <th>Nome</th>
      <th>Nascimento</th>
      <th>Endereço</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    {clientes.map(c => (
      <tr key={c.id_cliente}>
        <td>{c.nome_cliente}</td>
        <td>{c.data_nascimento}</td>
        <td>
          {c.logradouro}, {c.numero}, {c.bairro}, {c.cidade} - {c.estado} ({c.cep})
        </td>
        <td>
          <button className="btn btn-warning btn-sm me-2" onClick={() => editar(c)}>Editar</button>
          <button className="btn btn-danger btn-sm" onClick={() => deletar(c.id_cliente)}>Excluir</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default ClienteList;
