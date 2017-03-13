import React from 'react';
import { Text, AppRegistry, View , TouchableOpacity,Image, Alert } from 'react-native';

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
//alignSelf: 'center'

const Estilos = {
	estiloView : {
		flex: 1,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center'
	},
	estiloBotao : {
		backgroundColor: '#548619',
		paddingHorizontal: 20,
		paddingVertical: 5,
		marginTop : 15,
		borderColor : '#afafaf',
		borderWidth : 1
	},
	estiloTexto : {
		color: '#FFF',
		fontWeight : 'bold',
		fontSize: 16
	}
};

const _onPressButton = () => {
	Alert.alert('press');
}

//Criar o componente
const App = () => {

    return (

      <View style={ Estilos.estiloView }>
		<Image source={ require('./imgs/logo.png') } />
	    <TouchableOpacity style={ Estilos.estiloBotao } onPress={ _onPressButton }>
	      <Text style={ Estilos.estiloTexto }>Nova frase</Text>
	    </TouchableOpacity>		

      </View>

    );

};

//Renderizar para o dispositivo
AppRegistry.registerComponent('rctNtvAppFraseDia', () => App);