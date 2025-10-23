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
          name="LoginCadastro"
          component={LoginCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen name="Jogos" component={Jogos} />
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
        <Stack.Screen name="Times" component={Times} />
        <Stack.Screen name="Campos" component={Campos} />
        <Stack.Screen name="Financeiro" component={Financeiro} />
        <Stack.Screen name="Administracao" component={Administracao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
