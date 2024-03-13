// src/screens/CadastroScreen.js
import React, { useState } from 'react';
import { ScrollView,View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker'; 
import serverCategorias from '../data/mocksCategorias';  

import { useClientes } from '../context/ClientesContext';
 

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState(serverCategorias[0].categoria); // Inicialize com a primeira categoria
  const [imageUrl, setImageUrl] = useState('');

  const { adicionarCliente } = useClientes();
   
  const handleCadastro = () => {
    const novoFornecedor = {
      id: uuid.v4(),
      categoria,
      nome,
      telefone,
      cidade,
      estado,
      email,
      imageUrl,
    };
    
    adicionarCliente(novoFornecedor);
    alert('Fornecedor cadastrado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={styles.text}>Categoria:</Text>
      <Picker
        selectedValue={categoria}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
      >
     {serverCategorias.map((categoria, index) => (
          <Picker.Item key={index} label={categoria.categoria} value={categoria.categoria} />
        ))}
      </Picker>
      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text style={styles.text}>Telefone:</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
      <Text style={styles.text}>Cidade:</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />
      <Text style={styles.text}>Estado:</Text>
      <TextInput style={styles.input} value={estado} onChangeText={setEstado} />
      <Text style={styles.text}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
     

    <View style={styles.viewImage}>
      <Text style={styles.text}>Entre com a url da imagem</Text>  
      <TextInput
        style={styles.input}
        onChangeText={setImageUrl}
        value={imageUrl}
        placeholder="Insira o URL da imagem"
      /> 
     {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} />: null }
    </View>

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },

  text:{
    fontSize:18,
    fontWeight: 'bold',
  },
  viewImage: {
    flex: 1,
    paddingTop:10,
    paddingBottom:80
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: 150,  
    height: 150,  
  },
});

export default CadastroScreen;
