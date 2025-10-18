import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginCadastro from "./components/LoginCadastro";
import Dashboard from "./components/Dashboard";
import Jogos from "./components/Jogos";
import Estatisticas from "./components/Estatisticas";
import Times from "./components/Times";
import Campos from "./components/Campos";
import Financeiro from "./components/Financeiro";
import Administracao from "./components/Administracao";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          nome="LoginCadastro"
          component={LoginCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          nome="Dashboard"
          component={Dashboard}
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen nome="Jogos" component={Jogos} />
        <Stack.Screen nome="Estatisticas" component={Estatisticas} />
        <Stack.Screen nome="Times" component={Times} />
        <Stack.Screen nome="Campos" component={Campos} />
        <Stack.Screen nome="Financeiro" component={Financeiro} />
        <Stack.Screen nome="Administracao" component={Administracao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
