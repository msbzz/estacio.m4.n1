import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OlaMundo from "./src/componens/microatividades/OlaMundo";
import PizzaTranslator from "./src/componens/microatividades/Pizza";
import SVComponent from "./src/componens/microatividades/SVComponent";
import SectionListBasics from "./src/componens/microatividades/SectionListBasics";
import FlatListBasics from "./src/componens/microatividades/FlatListBasics";
import DisplayAnImage from "./src/componens/microatividades/DisplayAnImage";
import DisplayAnImageWithStyle from "./src/componens/microatividades/DisplayImageWithStyle";
import CatApp from "./src/telas/CatApp";
import WelcomeScreen from "./src/telas/WelcomeScreen"; // Importe o novo componente

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Ola Mundo" component={OlaMundo} />
        <Drawer.Screen name="Pizza Translator" component={PizzaTranslator} />
        <Drawer.Screen name="SV Component" component={SVComponent} />
        <Drawer.Screen name="Section List Basics" component={SectionListBasics} />
        <Drawer.Screen name="Flat List Basics" component={FlatListBasics} />
        <Drawer.Screen name="Display An Image" component={DisplayAnImage} />
        <Drawer.Screen name="Display An Image With Style" component={DisplayAnImageWithStyle} />
        <Drawer.Screen name="CatApp" component={CatApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
