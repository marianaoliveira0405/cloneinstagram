import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { connect} from 'react-redux'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    render(){
        retunr (
            <View style={StyleSheet.container}>
                <TextInput placeholder= 'Nome' style={Style.input}
                autoFocus={true} value={this.state.name}
                onChangeText={name => this.setState({ name })}/>
                <TextInput placeholder='Email' style={styles.input}
                keyboardType='email-address' value={this.state.email}
                onChangeText={email => this.setState({ email })}/>
                <TextInput plaeholder='Senha' style={styles.input}
                secureTextEntry={true} value={this.setState({password})}
                onChangeText={password => this.setState({password})}/>
                <TouchableOpacity onPress={() => { } } style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    INPUT: {
        MARGINtOP: 20,
        width: '90',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15

    }
})
export default Register