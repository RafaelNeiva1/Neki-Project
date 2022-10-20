import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';
import {api} from '../../services/api';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

export const Cadastro = ({navigation}) => {

    const [hidePass, setHidePass] = useState(true);
    const [dados, setDados] = useState({   login: "",     password: ""   });
    
    const  Login= async() =>{
        const response = await api.post('users', dados);
    }
    const clickHandler = () => {
        alert('Cadastro Realizado');
    };
    

    return (

        <ScrollView style={styles.container}>

            <View style={styles.form}>
                <Text style={{
                    alignSelf: "center", fontSize: 20, fontWeight: "bold",
                    paddingBottom: 20, color: "#002B5B"
                }}>Cadastro</Text>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.inputemail}
                    textContentType={"name"}
                    keyboardType={"default"}
                    placeholder={"Digite seu email"}
                    onChangeText={(e) => setDados({ ...dados, login: e })}/>

                <Text style={styles.text}>Senha</Text>
                <View style={styles.inputArea}>

                    <TextInput
                        style={styles.inputsenha}
                        textContentType={"name"}
                        keyboardType={"default"}
                        placeholder={"Digite seu senha"}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.eye} onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name={hidePass ? 'eye' : 'eye-off'} color="#ccc" size={23} />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.inputsenha}
                        textContentType={"name"}
                        keyboardType={"default"}
                        placeholder={"Confirme sua senha"}
                        secureTextEntry={hidePass}
                        onChangeText={(e) => setDados({ ...dados, password: e })}
                    />
                    <TouchableOpacity style={styles.eye} onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name={hidePass ? 'eye' : 'eye-off'} color="#ccc" size={23} />
                    </TouchableOpacity>
                </View>

                <View style={[{ flexDirection: "row", alignSelf: "center", paddingTop: 0 }]}>
                <Text style={[{ fontWeight: "bold" }]}>Ja tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.entre]}>Entre</Text>
                </TouchableOpacity>
                </View>


                <TouchableOpacity  style={styles.cadastrar}
                onPress={ () => Login() && clickHandler()}>
                    <EvilIcons name="check" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.back}
                onPress={ () => navigation.navigate('Home')}>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>


            </View>
        </ScrollView>
    );

}