import React from 'react';
import { Component } from 'react'
import {
    // SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width
export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(likeada){
        return likeada ? 
        require('../../resources/img/s2-checked.png') : 
        require('../../resources/img/s2.png')
        
    }

    like(){
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({foto:fotoAtualizada})
    }

    render() {
        const { foto } = this.state
        return (
            <View>
                <View style={style.cabecalho}>
                    <Image source={require('../../rolinha.jpg')}
                        style={style.fotoDePerfil} />
                    <Text>Rolinha</Text>
                </View>

                <Image source={{ uri: foto.urlFoto }}
                    style={style.fotoPost} />

                <View style={style.rodape}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={style.botaoDeLike}
                            source={this.carregaIcone(foto.likeada)} />
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
};

const style = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoDePerfil: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25
    },
    fotoPost: {
        width: width,
        height: width
    },
    botaoDeLike: {
        height: 40,
        width: 40
    },
    rodape: {
        margin: 10
    }
})


// export default Post;

