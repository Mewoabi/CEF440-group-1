import { StyleSheet, Text, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import React, { useContext, useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/connections/firebaseConfig';
import { router } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ItemContext } from '@/contexts/itemContext';
import { categoryType, itemInterface } from '@/types/item';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];


const categories = [
    { label: 'Phone', value: 'phones' },
    { label: 'Laptop', value: 'laptops' },
    { label: 'Other electronics', value: 'other electronics' },
    { label: 'writing material', value: 'writing materials' },
    { label: 'Bag', value: 'bags' },
    { label: 'Document', value: 'documents' },
    { label: 'Shoe', value: 'shoes' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Jewelry', value: 'jewelry' },
    { label: 'Money', value: 'money' },
    { label: 'Other wearables', value: 'other wearables' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Others', value: 'others' }
]


export default function createPage() {
    const [value, setValue] = useState("null");
    const [isFocus, setIsFocus] = useState(false);
    const {state: {item}, dispatch} = useContext(ItemContext)

    const [title, setTitle] = useState(item.title)
    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.description)
    const [color, setColor] = useState(item.additionalInfo.color)
    const [brand, setBrand] = useState(item.additionalInfo.brand)
    const [content, setContent] = useState(item.additionalInfo.content)
    const [state, setState] = useState(item.additionalInfo.state)
    const [category, setCategory] = useState<categoryType>(item.category)
    const [location, setLocation] = useState(item.location)
    const [reporter, setReporter] = useState(item.reporter)
    const [type, setType] = useState(item.type)
    const [imageUrl, setImageUrl] = useState(item.imageUrl)
   
    const handleContinue = () => {
        const partItem: itemInterface = {title, name, description, additionalInfo: {color, brand, content, state}, category, location, reporter, type, imageUrl}

        dispatch({type: 'ADD_ITEM', payload: partItem})
        router.push('./create_two')
    }

    return (
        <ScrollView>
            <ThemedView style={styles.container}>
                <ThemedView>
                    <ThemedText style={styles.report}>Enter Item Information</ThemedText>
                    <ThemedText style={styles.text}>Post title</ThemedText>
                    <TextInput style={styles.textInput} value={title} onChangeText={(val) => setTitle(val)}/>
                </ThemedView>
                <ThemedView> 
                    <ThemedText style={styles.text}>Item name</ThemedText>
                    <TextInput style={styles.textInput} value={name} onChangeText={(val) => setName(val)}/>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={styles.text}>Category</ThemedText>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={categories}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={category}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setCategory(item.value as categoryType)
                            setIsFocus(false);
                        }}
                    />
                </ThemedView>
                <ThemedView style={styles.status_view}>
                    <ThemedText style={styles.status_label}>Status:</ThemedText>
                    <TouchableOpacity 
                    style={{...styles.status_button, backgroundColor: type == 'found' ? "#6C63FF" : "#ccc"}}
                    onPress={()=> {setType('lost')}}
                    >
                        <ThemedText style={styles.status_button_text}>Lost</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{...styles.status_button, backgroundColor: type == 'found' ? "#6C63FF" : "#ccc"}}
                     onPress={() => setType('found')}
                     >
                        <ThemedText style={styles.status_button_text}>Found</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={styles.text}>Description</ThemedText>
                    <TextInput multiline style={styles.textInput} value={(description)} onChangeText={(val) => setDescription(val)}/>
                    <ThemedText style={styles.text}>Additional information</ThemedText>
                    <ThemedView style={styles.additional_view}>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>color: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='color of the object' value={color} onChangeText={(val) => setColor(val)}/>
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>Brand: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='Item brand' value={brand} onChangeText={(val) => setBrand(brand)}/>
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>content: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='contents of the object' value={content} onChangeText={(val) => setContent(val)}/>
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>state: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='old, new, torn, wet, etc..' value={state} onChangeText={(val) => setState(val)}/>
                        </ThemedView>
                    </ThemedView>
                    <ThemedText style={styles.text}>Location</ThemedText>
                    <TextInput style={styles.textInput} value={location} onChangeText={(val) => setLocation(val)}/>
                </ThemedView>
                <ThemedView>
                    <TouchableOpacity style={styles.continue_button} onPress={() => handleContinue()}>
                        <ThemedText style={styles.button_text}>continue</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold'
    },

    continue_button: {
        paddingTop: 10,
        backgroundColor: "#C3FDC2",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: 330,
        height: 51,
        borderRadius: 10,
        elevation: 3,
        marginVertical: 20
    },
    textInput: {
        color: '#444',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
        height: 51,
        width: 330,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16
    },

    button_text: {
        marginBottom: 6,
        paddingLeft: 8,
    },

    status_button: {
        // backgroundColor: '#C3FDC2',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 15,
        marginLeft: 11,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        elevation: 2
    },
    status_button_text: {
        color: '#fff',
        fontSize: 15,
    },
    status_view: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: 330,
        marginVertical: 15
    },

    status_label: {
        marginRight: 5,
        fontSize: 17,
        fontWeight: "bold"
    },
    report: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        color: 'gray',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom: 15,
        height: 45,
        width: 280,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropdown: {
        height: 51,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 330
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    additional_view: {
        width: 330,
        borderWidth: 1,
        borderColor: '#ccc',
        height: 200,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 15
    },
    additional_box: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        width: 300,
        marginBottom: 10
    },
    additional_field: {
        width: "75%",
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    additional_label: {
        width: "25%"
    }
})