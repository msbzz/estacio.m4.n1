// ClientesFiltrados.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useClientes } from '../context/ClientesContext';
import CustomCheckbox from '../components/CustomCheckbox';  

const ClientesFiltrados = () => {
  const { getClientesFormatoOriginal, filtrarClientes } = useClientes();
  const [clientes, setClientes] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  

  useEffect(() => {
    if (filtroAtivo) {
      const categoriaFiltro = 'esport';
      const nomeEmpresaFiltro = 'pesc';
      const clientesFiltrados = filtrarClientes(categoriaFiltro, nomeEmpresaFiltro);
      setClientes(clientesFiltrados);
      //console.log('filtroAtivo',clientesFiltrados)
    } else {
      const clientesIniciais = getClientesFormatoOriginal();
      setClientes(clientesIniciais);
      //console.log('filtroDesativado',clientes,clientesIniciais);
 
    }
  }, [filtroAtivo, filtrarClientes, getClientesFormatoOriginal]);


  
return (
  <SafeAreaView style={styles.container}>
    <CustomCheckbox
      label="Habilitar Filtro"
      initialValue={filtroAtivo}
      onValueChange={(newValue) => setFiltroAtivo(newValue)}
    />
    {clientes.map((categoria, index) => (
      <View key={index}>
        <Text style={styles.categoriaText}>{categoria.categoria}</Text>
        {categoria.data.map((cliente, clienteIndex) => (
          <Text key={clienteIndex} style={styles.clienteText}>{cliente.nome}</Text>
        ))}
      </View>
    ))}
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clienteText: {
    fontSize: 14,
    color: 'black',
  },
  categoriaText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ClientesFiltrados;
