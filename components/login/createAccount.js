import React from "react";
import { 
    Container,
    Body,
    Content,
    H3,
    Button,
    Text
}from "native-base";
import CreateAccountInput from "./createAccountInput";
import {reduxForm,Field} from "redux-form";


function CreateAccount(){
    return(
        <Container>
            <Content padder>
            <H3 style={styles.heading}>Create Account</H3>
                <Body>
                    <Field name="name" iconName="people" placeHolder="Enter your Name" component={CreateAccountInput}/>
                    <Field name="email" iconName="mail" placeHolder="Enter email" component={CreateAccountInput}/>
                    <Field name="passord" iconName="key" placeHolder="Enter password" component={CreateAccountInput}/>
                    <Field name="rePassword" iconName="key" placeHolder="confirmPassword" component={CreateAccountInput}/>
                </Body>
                <Button block style={styles.button}><Text>Create Account</Text></Button>
            </Content>
        </Container>
    )
}

const styles={
    heading:{
        marginTop:20,
        marginBottom:20,
        textAlign:'center'
    },
    button:{
        backgroundColor:'darkred',
        color:'white'
    }

}
export default reduxForm({
    form:'createAccount'
})(CreateAccount);