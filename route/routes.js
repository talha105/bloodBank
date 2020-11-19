import React from  "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from "../components/login/createAccount"
import Login from "../components/login/login";
import {Container} from "native-base"


const Stack = createStackNavigator();

function Routes(){
    return(
        <Container>
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
            <Stack.Screen name="login" component={CreateAccount}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Container>
    )
}
export default Routes