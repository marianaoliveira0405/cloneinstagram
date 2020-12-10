import React, { Component} from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchhableWithouFeedback as TWF,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icos/FontAwesonme'

class AddComment extends Component {
    state ={
        comment: '',
        editMode: false
    }
    handleAddComment =() => {
        Alert.alert('Adicionado', this.state.comment)
    }
    render(){
        let commentArea = null
        if (this.state.editMode){
            commentArea = (
                <View style={Styles.container}>
                    <Text Input placeholder= 'Pode comentar...'
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({comment})}
                        onSubmitEditing={this.handleAddComment} />
                        <TWF onPress={() => this.setState({ editMode: false})}>
                            <Icon name='times' size={15} color='#555'/>
                        </TWF>    
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({ ediMode: true})}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555'/>
                        <Text style={styles.caption}>
                        Adicione um comentário...
                        </Text>            
                    </View>
                </TWF>
            )
            
        }
    }
}
    