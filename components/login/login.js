import React, { Component } from "react";
import {reduxForm,Field} from "redux-form"
import { Container, Content, Item, Input, Icon, Body, H1, Button, Text } from 'native-base';
import { ImageBackground,Image } from "react-native";
import backgroundimage from "../../assets/background.png";
import LoginInput from "./loginInput"

class Login extends Component{

  render(){
  return (
    <Container>
      <ImageBackground source={backgroundimage} style={style.image}>
        <Content style={style.container}>
          <Body>
            <Image style={{width:150,marginBottom:20}} source={require('../../assets/logo.png')}/>
              <Field iconName="ios-mail" name="email" secureTextEntry={false} placeholder="Enter Email" component={LoginInput}/>
              <Field name="password" iconName="key" secureTextEntry={true} placeholder="Enter Password" component={LoginInput}/>
            <Button block style={style.button} onPress={this.props.handleSubmit(value=>console.log(value))}><Text>Login</Text></Button>
          </Body>
        </Content>
      </ImageBackground>
    </Container>
  );
}
}
function validate(value){
const error={};
if(value.email<3){
  error.email="max character 4"

}
}

export default reduxForm({
  validate,
  form:'loginForm'
})(Login)



const style = {
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
    backgroundColor:'darkred',
    marginTop:10
  },
  container:{
    marginTop:50
  },
  img:{
    height:200,
    marginTop:50
  }
}