import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
 
const { width } = Dimensions.get("window");
 
export default function LoginCadastro() {
  const [isLogin, setIsLogin] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;
 
  const handleSwitch = (showLogin) => {
    setIsLogin(showLogin);
    Animated.timing(animation, {
      toValue: showLogin ? 0 : -width,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
 
  return (
    <LinearGradient
      colors={['#02C63E', '#003D8D']}
      start={{ x: 0, y: 0 }}  // início (topo esquerdo)
      end={{ x: 1, y: 1 }}    // fim (baixo direito)
      style={styles.container}
    >
      {/* Botões de troca */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, isLogin && styles.activeButton]}
          onPress={() => handleSwitch(true)}
        >
          <Text style={[styles.switchText, isLogin && styles.activeText]}>
            Logar
          </Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          style={[styles.switchButton, !isLogin && styles.activeButton]}
          onPress={() => handleSwitch(false)}
        >
          <Text style={[styles.switchText, !isLogin && styles.activeText]}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
 
      {/* Área que segura e corta o conteúdo animado */}
      <View style={styles.sliderWrapper}>
        <Animated.View
          style={[
            styles.formContainer,
            { transform: [{ translateX: animation }] },
          ]}
        >
          {/* Tela de Login */}
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <TextInput 
              placeholder="Email"
              style={styles.input} 
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
          </View>
 
          {/* Tela de Cadastro */}
          <View style={styles.form}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput 
              placeholder="Nome completo"
              style={styles.input} 
            />
            <TextInput 
              placeholder="Email"
              style={styles.input} 
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeButton: {
    borderBottomColor: "#00bfff",
  },
  switchText: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: "600",
  },
  activeText: {
    color: "#00bfff",
  },
  sliderWrapper: {
    width: width,        
    overflow: "hidden",  
  },
  formContainer: {
    flexDirection: "row",
    width: width * 2,
  },
  form: {
    width: width,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  btn: {
    backgroundColor: "#00bfff",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});