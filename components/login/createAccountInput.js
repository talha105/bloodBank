import React from "react";
import {
   Item,
   Icon,
   Input,
   Text
} from "native-base"


function CreateAccountInput({iconName,placeHolder,input}){
    return(
        <Item  >
        <Icon name={iconName} />
        <Input {...input} placeholder={placeHolder}/>
        <Text style={style.error}>error</Text>
        </Item>
    )
}

const style = {
    input: {
      width: '90%',
      marginTop:10,
      marginBottom:10
    },
    error:{
        marginRight:10,
        color:'red'
      }
  }
  export default CreateAccountInput;