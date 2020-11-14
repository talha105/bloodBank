import React from 'react';
import {Item, Input, Icon,Text} from 'native-base';
function LoginInput(props) {
    const {placeholder,secureTextEntry,input,meta:{touch,error}}=props;
    console.log(error)
    return (
        <Item error={error?true:false} regular style={style.input}>
        <Icon name="key" />
        <Input {...input} placeholder={error?error:placeholder} secureTextEntry={secureTextEntry}/>
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
    }
  }

export default LoginInput;