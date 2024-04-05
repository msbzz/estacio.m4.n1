import React, { useLayoutEffect, useState } from 'react';
import {
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useClientes } from '../context/ClientesContext';
import { MaterialIcons } from '@expo/vector-icons';
import CardCliente from '../components/CardCliente';
import serverCategorias from '../data/mocksCategorias';


// CustomCheckbox Component
const CustomCheckbox = ({ isChecked, toggleCheckbox }) => {
  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
      <MaterialIcons name={isChecked ? "check-box" : "check-box-outline-blank"} size={24} color="black" />
    </TouchableOpacity>
  );
};

const ListaScreen = () => {
  const navigation = useNavigation();
  const { getClientesFormatoOriginal, filtrarClientes } = useClientes();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState(serverCategorias[0]?.categoria || '');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [clientesExibidos, setClientesExibidos] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 10 }}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
    // Inicializa a lista de clientes exibidos
    setClientesExibidos(getClientesFormatoOriginal());

    //console.log('useLayoutEffect',clientesExibidos);
  }, [navigation, getClientesFormatoOriginal]);

  const aplicarFiltro = () => {
    if (filtroAtivo) {
       
      const clientesFiltrados = filtrarClientes(selectedCategoria, nomeEmpresa);
      setClientesExibidos(clientesFiltrados);
     
    } else {
      setClientesExibidos(getClientesFormatoOriginal());
     
    }
    setModalVisible(false);
  };

  const modalViewStyle = {
    width: Dimensions.get('window').width * 0.9,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {modalVisible && <View style={styles.blurOverlay} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={modalViewStyle}>
            <Text style={styles.modalTextTitle}>Filtros</Text>
            <View style={styles.pickerContainer}>
              <Text style={styles.textModal}>Categoria</Text>
              <Picker
                selectedValue={selectedCategoria}
                style={styles.pickerModal}
                onValueChange={(itemValue) => setSelectedCategoria(itemValue)}
              >
                {serverCategorias.map((categoria, index) => (
                  <Picker.Item key={index} label={categoria.categoria} value={categoria.categoria} />
                ))}
              </Picker>
            </View>
             
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={styles.textModal}>Nome da Empresa</Text>
              <TextInput
                style={styles.inputsModal}
                onChangeText={setNomeEmpresa}
                value={nomeEmpresa}
                placeholder="Nome da Empresa"
              />
            </View>
             
            <View style={{marginTop:55}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <CustomCheckbox isChecked={filtroAtivo} toggleCheckbox={() => setFiltroAtivo(!filtroAtivo)} />
              <Text style={{ marginLeft: 8 }}>Aplicar Filtro</Text>
            </View>
            <View style={styles.viewButtonsModal}>
              <TouchableOpacity onPress={aplicarFiltro} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
      </Modal>

      <SectionList
        sections={clientesExibidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Editar', { itemId: item.id })}
          >
            <CardCliente texto={item.nome} caminhoImagem={item.imageUrl} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { categoria } }) => (
          <Text style={styles.header}>{categoria}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  checkboxContainer: {
    marginRight: 8,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2296F3',
    borderRadius: 30,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  pickerContainer: {
    borderRadius: 4,
    marginBottom: 10,
  },
  inputsModal: {
    //borderWidth: 1,
    borderColor:'black',
    width: 350,
    height: 50,
    backgroundColor:'#FEF9F3'  
  },
  textModal: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 30,
    textAlign: 'left',  
  },
  pickerModal: {
    border: 1,
    width: 350,
    height: 50,  
    backgroundColor:'#FEF9F3'
  },
  viewButtonsModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    
  },
  button: {
    backgroundColor: '#2296F3',
    padding: 10,
    borderRadius: 2,
    width: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center', 
   
  },
  blurOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ListaScreen;
