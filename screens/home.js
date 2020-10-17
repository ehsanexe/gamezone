  
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button,FlatList ,TouchableOpacity, Modal } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'; 
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {

    const [modalOpen,setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
          return [review, ...currentReviews];
        });
        setModalOpen(false);
      };

    return (
        <View style={globalStyles.container}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons name="close" size={24} color="red" onPress={() => setModalOpen(false)}/>
                    <ReviewForm addReview={addReview}/>
                </View>  
            </Modal>

            <FlatList 
                data = {reviews}
                renderItem = { ({item}) => (
                    <TouchableOpacity onPress={ () => {navigation.navigate('ReviewDetails' , item)}}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>   
                    </TouchableOpacity>
                )}
            />

            <MaterialIcons style={styles.icon} name="add" size={50} color="white" onPress={() => setModalOpen(true)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
        position: 'absolute',
        bottom: 30,
        right: 30,
        borderWidth: 3,
        borderRadius: 60,
        paddingLeft: 6,
        paddingTop: 6,
        borderColor: 'red',
        backgroundColor: 'red',
        elevation: 3,
        shadowOffset: {width:1,height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },

    modalContent: {
        flex: 1,
      }
})

