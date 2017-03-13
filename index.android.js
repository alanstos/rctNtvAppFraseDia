import React from 'react';
import { Text, AppRegistry, View , TouchableOpacity} from 'react-native';

//Formatação
// fontSize, backgroundColor,  height , width
// padding, paddingTop, paddingLeft, paddingRight, paddingBottom
// margin , marginHorizontal, marginVertical, marginTop
// borderColor : '#000',borderWidth : 5
// ---- sombra ----
//shadowColor: '#000',
//shadowOffset: {width: 25, height: 25},
//shadowOpacity: 0.4,
//shadowRadius: 1
// --- Text ---
//fontStyle : 'italic',
//textShadowColor : '#000',
//textShadowOffset : {width: 10, height: 10},
//fontWeight : 'bold'
//textAlign : 'right'
//alignSelf: 'center' -- alinhamento do proprio objeto
//---- Layout with Flexbox --
//flex: 1
//flexDirection : 'row' ou 'column'
//justifyContent : flex-start, center, flex-end, space-around, and space-between
//alignItems: 'center' ,flex-start, center, flex-end, and stretch
const Estilos = {
    estiloTexto : {
      fontSize : 30,
      backgroundColor: '#3D57A1',
      color: '#fff',
      padding : 30,
      marginTop: 5,
      marginHorizontal: 10,

    }
};

//Criar o componente
const App = () => {

    return (

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column',backgroundColor: '#FFFFAA'}}>
        
        
			<TouchableOpacity disabled={false}>
			  <Text>I am disabled</Text>
			</TouchableOpacity>              
        
        
      </View>

    );

};

//Renderizar para o dispositivo
AppRegistry.registerComponent('rctNtvAppFraseDia', () => App);