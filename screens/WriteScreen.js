import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'


export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submit = ()=>{
        db.collection("Stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        return Alert.alert("Your story has been submitted.")
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header 
                    backgroundColor = {'yellow'}
                    centerComponent = {{
                        text : 'Bed Time Stories',
                        style : { color: 'white', fontSize: 20}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submit}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10
  },
  author: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'yellow',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});