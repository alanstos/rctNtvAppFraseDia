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
		paddingHorizontal: 30,
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
	var numAleatorio = Math.random();
	numAleatorio = numAleatorio * 10;
  	numAleatorio = Math.floor(numAleatorio);	

  	var frases = [];
  	frases[0] = 'Se tiver que amar, ame hoje. Se tiver que sorrir, sorria hoje. Se tiver que chorar, chore hoje. Pois o importante é viver hoje. O ontem já foi e o amanhã talvez não venha.';
  	frases[1] = 'Se temos de esperar, que seja para colher a semente boa que lançamos hoje no solo da vida. Se for para semear, então que seja para produzir milhões de sorrisos, de solidariedade e amizade.';
  	frases[2] = 'E quando tudo parece estar bem, uma decepção aparece e a tristeza te invade. A dor que hoje me machuca, é a que amanhã me ensina...';
  	frases[3] = 'Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver';
  	frases[4] = 'Viva hoje! Arrisque hoje! Faça hoje! Não se deixe morrer lentamente! Não se esqueça de ser feliz... Feliz... Arriscar à Fazer, para Viver Feliz!';
  	frases[5] = 'Eu vou ficar na minha, não vou me desgastar. Se tiver alguma batalha, só por hoje eu me retiro, preciso cuidar um pouco mais de mim';
  	frases[6] = 'Não fique o dia todo pensando no que fazer, FAÇA! Porque se o mundo acabar hoje você tem que morrer orgulhoso de ter feito algo.';
  	frases[7] = 'Ih. Sem frase';
  	frases[8] = 'Ops. Sem frase';
  	frases[9] = 'Opa. Tenta outra vez';

	Alert.alert( frases[numAleatorio]);
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