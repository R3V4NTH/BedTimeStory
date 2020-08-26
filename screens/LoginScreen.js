  
import React,{Component}from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:''
    }
  }


userLogin = (emailId, password)=>{
   firebase.auth().signInWithEmailAndPassword(emailId, password)
   .then(()=>{
     return Alert.alert("Successfully Login")
   })
   .catch((error)=> {
     var errorCode = error.code;
     return Alert.alert("User not valid")
   })
 }

  render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.title}>Bed Time Stories</Text>
        </View>
        <View>
            <TextInput
            style={styles.loginBox}
            placeholder="abc@abc.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})