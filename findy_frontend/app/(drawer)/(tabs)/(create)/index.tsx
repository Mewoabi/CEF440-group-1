import { StyleSheet, Text, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/connections/firebaseConfig';
import { router } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

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


    return (
        <ScrollView>
            <ThemedView style={styles.container}>
                <ThemedView>
                    <ThemedText style={styles.report}>Enter Item Information</ThemedText>
                    <ThemedText style={styles.text}>Item name</ThemedText>
                    <TextInput style={styles.textInput} />
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
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </ThemedView>
                <ThemedView style={styles.status_view}>
                    <ThemedText style={styles.status_label}>Status:</ThemedText>
                    <TouchableOpacity style={styles.status_button}>
                        <ThemedText style={styles.status_button_text}>Lost</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.status_button}>
                        <ThemedText style={styles.status_button_text}>Found</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={styles.text}>Description</ThemedText>
                    <TextInput multiline style={styles.textInput} />
                    <ThemedText style={styles.text}>Additional information</ThemedText>
                    <ThemedView style={styles.additional_view}>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>color: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='color of the object' />
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>Brand: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='Item brand' />
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>content: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='contents of the object' />
                        </ThemedView>
                        <ThemedView style={styles.additional_box}>
                            <ThemedText style={styles.additional_label}>state: </ThemedText>
                            <TextInput style={styles.additional_field} placeholder='old, new, torn, wet, etc..' />
                        </ThemedView>
                    </ThemedView>
                    <ThemedText style={styles.text}>Location</ThemedText>
                    <TextInput style={styles.textInput} />
                </ThemedView>
                <ThemedView>
                    <TouchableOpacity style={styles.continue_button} onPress={() => router.push('./create_two')}>
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