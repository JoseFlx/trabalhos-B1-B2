import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, ImageBackground, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  const imgFundo='./src/images/carro01.png'


  function verificaNome(){
    if (input === '') 
    {alert('Informe um nome!'); 
    return;};

    setDoor(true);
  }


{/*------------------------------------------------------------*/}


  function um(){
    setImage(true);
    setLink(require('./src/images/carro02.png'));
    setDescript('R$ 850000,00 Carro Modelo - Ferrari');
  }
  function dois(){
    setImage(true);
    setLink(require('./src/images/carro03.png'));
    setDescript('R$ 70000,00 Carro Modelo - Saveiro');
  }
  function tres(){
    setImage(true);
    setLink(require('./src/images/carro04.png'));
    setDescript('R$ 30000,00 Carro Modelo - Fusca');
  }
  function quatro(){
    setImage(true);
    setLink(require('./src/images/carro05.png'));
    setDescript('R$ 120000,00 Carro Modelo - Corolla');
  }
  function cinco(){
    setImage(true);
    setLink(require('./src/images/carro06.png'));
    setDescript('R$ 300000,00 Carro Modelo - Range Rover');
  }
  
  return (

    <SafeAreaView style={styles.container}>

      {/*Imagem de fundo da tela inicial*/}
      <ImageBackground 
           source={require('./src/images/carro01.png')} 
           style={{height: 1000, width: 1340,flexDirection:  'center'}} 
      >
      <StatusBar backgroundColor='#171d31' barStyle='light-content' />

      <Animatable.View animation="fadeInUp" useNativeDriver>
        <Text style={styles.title}>Loja do José Felix</Text>
        
        <TextInput 
        placeholder='Usuário'
        placeholderTextColor='#FFFF'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

           {/*Botão para entrar*/}
          <TouchableOpacity onPress={verificaNome} style={styles.head}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}}name="car" size={40} color="#212121" />
            <Text style={{color: "#212121"}}>Entrar</Text>
          </TouchableOpacity>

      </Animatable.View>
      </ImageBackground>{/*Fechamento da imagem de fundo da tela inicial*/}

      <Modal animationtype='bounceInUp' transparent={false} visible={door} >
        
        <SafeAreaView style={styles.container}>
          

        <ImageBackground 
           source={require('./src/images/carro01.png')} 
           style={{height: 1000, width: 1340,flexDirection:  'center'}} 
      >
        {/*FALTA AJEITAR O BOTÃO DE RETORNO*/}
        <TouchableOpacity onPress={ () => setImage(false) }>
            <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#212121"/>
          </TouchableOpacity>


            <Text style={styles.title}>
            Loja de Carros do José Felix
            </Text>

            <Text style={styles.subtitle}> 
             Seja Bem Vindo, {input}! 
            </Text>





          <View style={styles.images}>
            <TouchableOpacity onPress={um}>
              <Image  
                source={require('./src/images/carro02.png')} 
                style={{height: 90, width: 90, flexDirection: 'row'}} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.images}>
            <TouchableOpacity onPress={dois}>
              <Image 
                source={require('./src/images/carro03.png')} 
                style={{height: 90, width: 90, flexDirection: 'row'}} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.images}>
            <TouchableOpacity onPress={tres}>
                <Image  
                    source={require('./src/images/carro04.png')} 
                    style={{height: 90, width: 90, flexDirection: 'row'}} 
                />
            </TouchableOpacity>
          </View>
          
          <View style={styles.images}>
            <TouchableOpacity onPress={quatro}>
              <Image  
                source={require('./src/images/carro05.png')} 
                style={{height: 90, width: 90, flexDirection: 'row'}} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.images}>
            <TouchableOpacity onPress={cinco}>
              <Image  
                source={require('./src/images/carro06.png')} 
                style={{height: 90, width: 90, flexDirection: 'row'}} 
              />
            </TouchableOpacity>
          </View>


          </ImageBackground>
        </SafeAreaView>

       
      </Modal>

      <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#fff8e2'}}>

         
          <TouchableOpacity onPress={ () => setImage(false) }>
            <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#212121"/>
          </TouchableOpacity>

          <Image source={link} style={styles.into} />
          <Text style={{textAlign:'center'}}>{descript}</Text>  
        
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 90,
    width: 90,
    backgroundColor: '#212121',
    justifyContent: 'center',
    marginLeft: 9,
    marginRight: 9,
    borderColor: '#fff8e2',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 5,
  },
  into:{
    height: 460,
    width: 320,
    backgroundColor: '#212121',
    justifyContent: 'center',
    marginLeft: 9,
    marginRight: 9,
    borderColor: '#fff8e2',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  input:{
    fontSize:15,
    marginLeft: 9,
    marginRight:9,
    marginTop:30,
    backgroundColor:'#212121',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#fff8e2',
    borderRadius: 5,
  },
  container:{
    flex:1,
    backgroundColor: "#fff8e2"
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#000'
  },
  subtitle:{
    marginTop:9,
    paddingBottom: 9,
    fontSize: 15,
    textAlign: 'center',
    color: '#212121',
  },
  enter:{
    color: '#212121',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#212121',
    alignSelf: 'center',
  },
  TouchableOpacity:{
  backgroundColor: '#000000',
  transition: '0.5s',
  opacity: '0.7',
  }

})


