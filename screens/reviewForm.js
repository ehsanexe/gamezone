import React from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/flatButton'

const reviewSchema = yup.object({
    title: yup.string().required(),
    body: yup.string().required().min(10),
    rating: yup.string().required()
            .test('is-num-1-5','rating must be a no b/w 1-5', (val) => (parseInt(val)<6 && parseInt(val)>0) )
})

export default function reviewForm( { addReview } ){
    return(
        <View style={globalStyles.container}>
            <Formik 
            initialValues={{title: '',body: '',rating: ''}}
            validationSchema= {reviewSchema}
            onSubmit= { (values , actions) => {
                actions.resetForm(); 
                addReview(values);
            }}
            >
            {
                (formikprops) => (
                    <View >
                        <TextInput
                            style= {globalStyles.input}
                            placeholder='Title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                            onBlur = {formikprops.handleBlur('title')}
                        />

                        <Text style={globalStyles.error}> {formikprops.touched.title && formikprops.errors.title}</Text>

                        <TextInput
                            multiline minHeight={80}
                            style= {globalStyles.input}
                            placeholder='Body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                            onBlur = {formikprops.handleBlur('body')}
                        />

                        <Text style={globalStyles.error}> {formikprops.touched.body && formikprops.errors.body}</Text>

                        <TextInput
                            style= {globalStyles.input}
                            placeholder='Rating 1-5'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            keyboardType='numeric'
                            onBlur = {formikprops.handleBlur('rating')}
                        />

                        <Text style={globalStyles.error}> {formikprops.touched.rating && formikprops.errors.rating}</Text>

                        
                        <FlatButton title='Submit' onPress={formikprops.handleSubmit}/>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}