import React from  "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from "../components/login/createAccount"
import Login from "../components/login/login";
import {Container} from "native-base"
import login from "../components/login/login";


const Stack = createStackNavigator();

function Routes(){
    return(
        <Container>
        <NavigationContainer>
            <Stack.Navigator >
            {/* <Stack.Screen name="login" options={{headerShown:false}}  component={login}/> */}
            <Stack.Screen name="createAccount" options={{title:'Create Account',}} component={CreateAccount}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Container>
    )
}
export default Routes