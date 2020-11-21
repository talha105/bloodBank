import React from 'react';
import {Item, Input, Icon,Text} from 'native-base';
function LoginInput(props) {
    const {placeholder,secureTextEntry,input,meta}=props;
    return (
        <Item error={meta.touched && meta.error?true:false} regular style={style.input}>
        <Icon name="key" />
        <Input {...input} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
    <Text style={style.error} note>{meta.touched && meta.error?meta.error:''}</Text>
        </Item>
    );
}
const style = {
    input: {
      backgroundColor: "white",
      width: '90%',
      borderRadius: "8",
      marginTop:10,
      marginBottom:10
    },
    error:{
      marginRight:10,
      color:'red'
    }
  }

export default LoginInput;