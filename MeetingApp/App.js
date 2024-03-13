import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './src/screens/CadastroScreen';
import ListaScreen from './src/screens/ListaScreen';
import EditarScreen from './src/screens/EditarScreen';
import { ClientesProvider } from './src/context/ClientesContext';

const Stack = createNativeStackNavigator();

// Definindo estilos comuns para a barra de navegação
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2296F3',  
  },
  headerTintColor: '#fff',  
  headerTitleStyle: {
    fontWeight: 'bold',  
  },
};

function App() {
  return (
    <ClientesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
          <Stack.Screen
            name="Lista"
            component={ListaScreen}
            options={{ title: 'Lista de Clientes' }}  
          />
          <Stack.Screen
            name="Cadastro"
            component={CadastroScreen}
            options={{ title: 'Cadastro de Clientes' }}  
          />
          <Stack.Screen
            name="Editar"
            component={EditarScreen}
            options={{ title: 'Editar Cliente' }}  
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </ClientesProvider>
  );
}

export default App;
