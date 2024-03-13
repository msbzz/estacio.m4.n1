import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useClientes } from '../context/ClientesContext';
import { Picker } from '@react-native-picker/picker';  
import serverCategorias from '../data/mocksCategorias'; 

const EditarScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState({
    categoria:'',
    nome: '',
    telefone: '',
    cidade: '',
    estado: '',
    email: '',
    senha: '',
    imageUrl:'',
  }); 

  const { atualizarCliente, removerCliente, buscarClientePorId } = useClientes();

  useEffect(() => {
    const item = buscarClientePorId(itemId);
  
    if (item) {
      setItemData({
        ...item,
      });
      console.log('item antes da edição++++', item);
    }
  }, [itemId, buscarClientePorId]);

  const handleSave = () => {
    atualizarCliente(itemData.id, itemData);
    navigation.goBack();
  };
  
  const handleRemove = () => {
    removerCliente(itemData.id);
    navigation.goBack();
  };
  
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Categoria</Text>
        <View style={styles.pickerContainer}>
          <Picker 
            selectedValue={itemData.categoria}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => setItemData({ ...itemData, categoria: itemValue })}
          >
     {serverCategorias.map((categoria, index) => (
          <Picker.Item key={index} label={categoria.categoria} value={categoria.categoria} />
        ))}
          </Picker>
        </View>
        <Text>Nome</Text>  
        <TextInput
          style={styles.input}
          value={itemData.nome}
          onChangeText={(text) => setItemData({ ...itemData, nome: text })}
          placeholder="Nome"
        />
        <Text>Telefone</Text>
        <TextInput
          style={styles.input}
          value={itemData.telefone}
          onChangeText={(text) => setItemData({ ...itemData, telefone: text })}
          placeholder="Telefone"
        />
        <Text>Cidade</Text>
        <TextInput
          style={styles.input}
          value={itemData.cidade}
          onChangeText={(text) => setItemData({ ...itemData, cidade: text })}
          placeholder="Cidade"
        />
        <Text>Estado</Text>
        <TextInput
          style={styles.input}
          value={itemData.estado}
          onChangeText={(text) => setItemData({ ...itemData, estado: text })}
          placeholder="Estado"
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={itemData.email}
          onChangeText={(text) => setItemData({ ...itemData, email: text })}
          placeholder="Email"
        />
        <View style={styles.viewImage}>
          <Text>Entre com a url da imagem</Text>  
          <TextInput
            style={styles.input}
            onChangeText={(text) => setItemData({ ...itemData, imageUrl: text })}
            value={itemData.imageUrl}
            placeholder="Insira o URL da imagem"
          />
          {itemData.imageUrl ? <Image source={{ uri: itemData.imageUrl }} style={styles.image} /> : null}
        </View>
        <Button title="Salvar Alterações" onPress={handleSave} />
        <Button title="Remover Item" onPress={handleRemove} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 10,
  },
  pickerStyle: {
    width: '100%',
    height: 50,  
  },
  viewImage: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  image: {
    width: 150,  
    height: 150,  
  },
});
 
export default EditarScreen;
