import React, { createContext, useState, useContext } from 'react';
import { server } from '../data/mocksClientes';

const ClientesContext = createContext();

export const useClientes = () => useContext(ClientesContext);

export const ClientesProvider = ({ children }) => {
  const dadosIniciais = server.secoes.flatMap(secao => 
    secao.data.map(cliente => ({ ...cliente, categoria: secao.categoria })),
  );

  const [clientes, setClientes] = useState(dadosIniciais);

  
  const filtrarClientes = (categoria, nomeEmpresa) => {
    const clientesFiltrados = clientes.filter(cliente => {
      //console.log('filtrarClientes ===>',cliente)
      const correspondeCategoria = categoria ? cliente.categoria.toLowerCase().includes(categoria.toLowerCase()) : true;
      const correspondeNomeEmpresa = nomeEmpresa ? cliente.nome.toLowerCase().includes(nomeEmpresa.toLowerCase()) : true;
      return correspondeCategoria && correspondeNomeEmpresa;
    });
  
    // Agrupa os clientes filtrados por categoria
    const secoesAgrupadas = clientesFiltrados.reduce((acc, cliente) => {
      const { categoria } = cliente;
      if (!acc[categoria]) {
        acc[categoria] = { categoria: categoria, data: [] };
      }
      acc[categoria].data.push(cliente);
      return acc;
    }, {});
  
    return Object.values(secoesAgrupadas);
  };
  


  const adicionarCliente = (cliente) => {
    setClientes([...clientes, { ...cliente, categoria: cliente.categoria }]);
  };
 
  const removerCliente = (clienteId) => {
    setClientes(clientes.filter(cliente => cliente.id !== clienteId));
  };

  const atualizarCliente = (clienteId, dadosAtualizados) => {
    setClientes(clientes.map(cliente => {
      if (cliente.id === clienteId) {
        const categoriaAtualizada = dadosAtualizados.categoria ? dadosAtualizados.categoria : cliente.categoria;
        const { categoria, ...restoDosDadosAtualizados } = dadosAtualizados;
        return { ...cliente, ...restoDosDadosAtualizados, categoria: categoriaAtualizada };
      }
      return cliente;
    }));
  };
 
  const buscarClientePorId = (id) => {
    return clientes.find(cliente => cliente.id === id);
  };

  const getClientesFormatoOriginal = () => {
    const secoesAgrupadas = clientes.reduce((acc, cliente) => {
      const { categoria } = cliente;
      //console.log('getClientesFormatoOriginal',categoria)
      if (!acc[categoria]) {
        acc[categoria] = { categoria: categoria, data: [] };
      }
      //console.log('return acc')
      acc[categoria].data.push(cliente);
      return acc;
    }, {});
    //console.log('return Object.values(secoesAgrupadas)')
    return Object.values(secoesAgrupadas);
  };

  return (
    <ClientesContext.Provider value={{
      clientes, 
      adicionarCliente, 
      removerCliente, 
      atualizarCliente, 
      getClientesFormatoOriginal,
      buscarClientePorId,
      filtrarClientes
    }}>
      {children}
    </ClientesContext.Provider>
  );
};
