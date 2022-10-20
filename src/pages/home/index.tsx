import React, { useEffect, useState } from "react";
import { Text, Image, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { api } from "../../services/api";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 





export const Home = ({ navigation }) => {

    interface skills {
        id: number,
        name: string,
        version: string,
        description: string,
        imageUrl: string
    }

    

    const [p, setP] = useState(false);
    let exibir = p
    const [skills, setSkills] = useState([]);
    


    const [dados, setDados] = useState({ id:"",  name: "", version: "", description: "", imageUrl: "" });

    const AddSkills = async () => {
        const response = await api.post('skills', dados);
    }

    const [list,setList] = useState([dados])

    useEffect(() => {
        api.get("skills").then(({ data }) => {
            setSkills(data.skills);

        });
        console.log(dados)

    }
        , []);

        const  GetSkill= async() =>{
            const response = await api.get('skills');
        }

    

    return (


        <View style={styles.container}>

            <View style={styles.options}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.plus}
                    onPress={() => setP(!p)}>

                    <AntDesign name="plus" size={28} color="black" />
                </TouchableOpacity>

                <FontAwesome name="gears" size={24} color="black" />

                <TouchableOpacity style={styles.sair}
                    onPress={() => navigation.navigate('Login')}
                >
                    <MaterialIcons name="logout" size={22} color="white" />
                </TouchableOpacity>
            </View>






            {exibir ? <View style={styles.form}>
                <Text style={styles.add}>Adcionar Skill</Text>

                <Text style={styles.text}>
                    Nome da Skill
                </Text>
                <TextInput
                    style={styles.input}
                    textContentType={"name"}
                    keyboardType={"default"}
                    onChangeText={(e) => setDados({ ...dados, name: e })}
                />

                <Text style={styles.text}>
                    URL da Imagem
                </Text>
                <TextInput
                    style={styles.input}
                    textContentType={"name"}
                    keyboardType={"default"}
                    onChangeText={(e) => setDados({ ...dados, imageUrl: e })}
                />

                <Text style={styles.text}>
                    Level(version)
                </Text>
                <TextInput
                    style={styles.input}
                    textContentType={"name"}
                    keyboardType={"default"}
                    onChangeText={(e) => setDados({ ...dados, version: e })}
                />

                <Text style={styles.text}>
                    Descrição
                </Text>
                <TextInput
                    style={styles.input}
                    textContentType={"name"}
                    keyboardType={"default"}
                    onChangeText={(e) => setDados({ ...dados, description: e })}
                />
                <TouchableOpacity style={styles.salvar}
                onPress={ () => AddSkills() && GetSkill()}
                >
                    <Text >
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View> : null}






            {list?.map((skills) => (<View style={styles.card}>
                <FlatList
                    data={list}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return <TouchableOpacity style={styles.skills}>
                            <Image source={dados.imageUrl} style={styles.imgMenor} />
                            <View style={[{ position: "relative", paddingLeft: 10 }]}>
                                <Text style={styles.textNome}>
                                    {dados.name}
                                </Text>
                                <Text style={styles.version}>
                                    {dados.version}
                                </Text>
                                <Text style={styles.descricao}>
                                    {dados.description}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.id}
                />

            </View>))}




        </View>

    );


}

