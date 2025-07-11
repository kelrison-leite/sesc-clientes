import React, { useState, useEffect } from 'react';

const ClienteForm = ({ salvar, clienteEditando }) => {
  const [cliente, setCliente] = useState({
    nome_cliente: '',
    data_nascimento: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  useEffect(() => {
    if (clienteEditando) {
      setCliente(clienteEditando);
    }
  }, [clienteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const buscarEndereco = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setCliente(prev => ({
          ...prev,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        }));
      }
    } catch (error) {
      alert('Erro ao buscar CEP');
    }
  };

  const handleCepBlur = () => {
    if (cliente.cep.length === 8) {
      buscarEndereco(cliente.cep);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    salvar(cliente);
    setCliente({
      nome_cliente: '',
      data_nascimento: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
  <div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Nome</label>
      <input className="form-control" name="nome_cliente" value={cliente.nome_cliente} onChange={handleChange} required />
    </div>
    <div className="col-md-6">
      <label className="form-label">Data de Nascimento</label>
      <input className="form-control" type="date" name="data_nascimento" value={cliente.data_nascimento} onChange={handleChange} required />
    </div>

    <div className="col-md-4">
      <label className="form-label">CEP</label>
      <input className="form-control" name="cep" value={cliente.cep} onChange={handleChange} onBlur={handleCepBlur} required />
    </div>

    <div className="col-md-8">
      <label className="form-label">Logradouro</label>
      <input className="form-control" name="logradouro" value={cliente.logradouro} onChange={handleChange} required />
    </div>

    <div className="col-md-2">
      <label className="form-label">Número</label>
      <input className="form-control" name="numero" value={cliente.numero} onChange={handleChange} required />
    </div>

    <div className="col-md-4">
      <label className="form-label">Bairro</label>
      <input className="form-control" name="bairro" value={cliente.bairro} onChange={handleChange} required />
    </div>

    <div className="col-md-4">
      <label className="form-label">Cidade</label>
      <input className="form-control" name="cidade" value={cliente.cidade} onChange={handleChange} required />
    </div>

    <div className="col-md-2">
      <label className="form-label">Estado</label>
      <input className="form-control" name="estado" value={cliente.estado} onChange={handleChange} required />
    </div>
  </div>

  <div className="mt-3">
    <button type="submit" className="btn btn-primary">Salvar</button>
  </div>
</form>

  );
};

export default ClienteForm;
