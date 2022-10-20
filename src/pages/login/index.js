import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from "./styles";
import Redes from "../../components/cardRedesSociais";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from "../../context/auth";



export const Login = ({ navigation }) => {

    
    
    
    const [hidePass, setHidePass] = useState(true);
    const [isSelected, setSelected] = useState(false);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    // const { signin } = useAuth();

    // const [error, setError] = useState("");

    // const handleLogin = () => {
    //     if (!email | !senha) {
    //       setError("Preencha todos os campos");
    //       return;
    //     }
    // }

    // const res = signin(email, senha);

    // if (res) {
    //   setError(res);
    //   return;
    // }

    // navigate("/home");
    
    //   function signIn() {
    //     auth()
    //       .signInWithEmailAndPassword(login, password)
    //       .then(() => {
    //         console.log('user is authenticated');
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }
  


    return (

        <ScrollView style={[{ backgroundColor: "#2e2e2e" }]}>


            <View style={styles.all}>
                <View style={styles.cardLogin}>
                    <TextInput
                        style={styles.inputemail}
                        placeholder="email"
                        placeholderTextColor='#aaa'
                        value={login}
                        onChangeText={
                            // (e) => [setEmail(e.target.value), setError("")]
                            setLogin} />


                    <View style={styles.inputArea}>
                        <TextInput style={styles.inputsenha}
                            placeholder="password"
                            placeholderTextColor='#aaa'
                            value={password}
                            onChangeText={
                                // (e) => [setSenha(e.target.value), setError("")]
                                 setPassword}
                            secureTextEntry={hidePass}
                        />
                        <TouchableOpacity style={styles.eye} onPress={() => setHidePass(!hidePass)}>
                            <Ionicons name={hidePass ? 'eye' : 'eye-off'} color="#ccc" size={23} />
                        </TouchableOpacity>
                        
                    </View>

                    <CheckBox title="Me manter conectado"
                        onPress={() => setSelected(!isSelected)}
                        checkedIcon="check"
                        checkedColor="#2e2e2e"
                        uncheckedIcon="square-o"
                        checked={isSelected}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('Home') && signIn()}>
                        <Text style={styles.login}>LOGIN</Text>
                    </TouchableOpacity>


                    <View style={[{ flexDirection: "row", alignSelf: "center", paddingTop: 25 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>Não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>

                            <Text style={[styles.cadastrar]}> Cadastre-se</Text>

                        </TouchableOpacity>

                    </View>
                    <Redes />
                </View>

            </View>

        </ScrollView>


    )
}
;

