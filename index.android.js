import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatação
// fontSize, backgroundColor,  height , width
//
const Estilos = {
    estiloTexto : {
      fontSize : 30,
      backgroundColor: '#3D57A1',
      
      padding : 30
    }
};

//Criar o componente
const App = () => {

    return (
      <Text style={ Estilos.estiloTexto }>Frase do dia 2</Text>
    );

};

//Renderizar para o dispositivo
AppRegistry.registerComponent('rctNtvAppFraseDia', () => App);