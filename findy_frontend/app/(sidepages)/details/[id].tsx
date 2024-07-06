
import { StyleSheet, Image, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { postInterface } from '@/components/post'
import { Directions } from 'react-native-gesture-handler'
import { TabBarIconThree, TabBarIconTwo } from '@/components/navigation/TabBarIcon'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const index = () => {
    return (
        <ScrollView>
            <ThemedView style={styles.container}>
                <StatusBar backgroundColor='#6C63FF' barStyle='default' />
                <ThemedView style={styles.top_icons_box}>
                        <TouchableOpacity style={styles.top_icons_back_box} onPress={() => router.back()}>
                            <TabBarIconTwo name={'arrow-back'} color={"#6C63FF"} size={24} style={styles.top_icons_back} />
                        </TouchableOpacity>

                        <ThemedView style={styles.top_icons_eye_box}>
                            <TabBarIconTwo name={'eye'} color={"#6C63FF"} size={24} style={styles.top_icons_eye} />
                            <ThemedText style={styles.top_icons_eye_text}>50</ThemedText>
                        </ThemedView>
                    </ThemedView>
                <ThemedView style={styles.details_image_box}>
                    <Image source={{ uri: "https://picsum.photos/id/1/200/300" }} style={styles.image} />
                </ThemedView>
                <ThemedText style={styles.title_box_text}>I lost my laptop</ThemedText>
                <ThemedView style={styles.title_icons_box}>
                    <ThemedView style={styles.title_box}>
                    </ThemedView>
                    <ThemedView style={styles.icons_box}>
                        <ThemedView style={styles.icon_box_item}>
                            <TabBarIconTwo name={'location'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} size={30} style={styles.icon_box_icon} />
                            <ThemedText style={styles.icon_box_text}>location</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.icon_box_item}>
                            <TabBarIconTwo name={'calendar'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} size={30} style={styles.icon_box_icon} />
                            <ThemedText style={styles.icon_box_text}>date</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.icon_box_item}>
                            <TabBarIconThree name={'coins'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} size={30} style={styles.icon_box_icon} />
                            <ThemedText style={styles.icon_box_text}>reward</ThemedText>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.details_content_box}>
                    <ThemedView style={styles.description_box}>
                        <ThemedText style={styles.description_label}>Description</ThemedText>
                        <ThemedText style={styles.description_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatibus laudantium maxime saepe nemo omnis iure, quam laborum aperiam mollitia nesciunt harum possimus non facere in perferendis, amet odit aliquid et ducimus! Perferendis minima provident tenetur ea veritatis nemo corrupti maiores debitis impedit voluptate, officiis harum soluta at distinctio expedita!</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.additionalInfo_box}>
                        <ThemedText style={styles.additionalInfo_box_label}>Additional Info</ThemedText>
                        <ThemedView style={styles.additionalInfo_box_content}>
                            <ThemedView style={styles.additionalInfo_item}>
                                <ThemedText style={styles.additionalInfo_label}>Brand:</ThemedText>
                                <ThemedText style={styles.additionalInfo_value}>Louis vuitton</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.additionalInfo_item}>
                                <ThemedText style={styles.additionalInfo_label}>Color:</ThemedText>
                                <ThemedText style={styles.additionalInfo_value}>brown</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.additionalInfo_item}>
                                <ThemedText style={styles.additionalInfo_label}>State:</ThemedText>
                                <ThemedText style={styles.additionalInfo_value}>new</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.additionalInfo_item}>
                                <ThemedText style={styles.additionalInfo_label}>Content:</ThemedText>
                                <ThemedText style={styles.additionalInfo_value}>books, hair brush, calculator</ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                    <ThemedView style={styles.post_profile_box}>
                        <ThemedText style={styles.post_profile_label}>Reported By</ThemedText>
                        <ThemedView style={styles.post_profile}>
                            <Image source={{ uri: "https://picsum.photos/id/22/200/300" }} style={styles.post_profile_image} />
                            <ThemedView style={styles.post_profile_info}>
                                <ThemedText style={styles.userName}>Ojong-Enyang Oyere</ThemedText>
                                <ThemedText style={styles.userEmail}>ojongemmy24@gmail.com</ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                    <ThemedView style={styles.action_buttons}>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: "#C3FDC2" }}>
                            <ThemedText style={styles.button_text}>Message</ThemedText>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ ...styles.button, backgroundColor: "#6C63FF" }}>
                            <ThemedText style={{ ...styles.button_text, color: 'white' }}>Claim Item</ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        paddingVertical: 33,
        position: 'relative'
    },
    details_image_box: {
        width: "100%",
        height: 430
    },
    details_content_box: {
        paddingHorizontal: 20
    },
    image: {
        width: "100%",
        height: "100%"
    },
    title_icons_box: {
        display: 'flex',
        flexDirection: "column",
        height: 145,
        width: "93%",
        marginHorizontal: 'auto',
        position: 'absolute',
        top: 408,
        zIndex: 1,
        left: 13,
        borderRadius: 10,
        opacity: 0.3
    },
    title_box: {
        backgroundColor: "#dedee9",
        height: 55,
        textAlign: 'center',
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'relative'
    },
    title_box_text: {
        position: 'absolute',
        top: 423,
        fontSize: 20,
        fontWeight: 'bold',
        // left: 130,
        textAlign: 'center',
        width: "100%",
        zIndex: 2,
    },
    icons_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        height: 90,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#d3d2ee",
    },
    icon_box_item: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: "transparent"
    },
    icon_box_icon: {
        marginBottom: 5
    },
    icon_box_text: {

    },
    description_box: {

        marginTop: 100,
        paddingVertical: 20
    },
    description_label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    description_text: {

    },
    additionalInfo_box: {
        marginBottom: 30
    },
    additionalInfo_box_label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    additionalInfo_box_content: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "space-between"
    },
    additionalInfo_item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start'
    },
    additionalInfo_label: {
        fontWeight: 'bold',
        width: "30%"
    },
    additionalInfo_value: {
        width: "65%"
    },
    action_buttons: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: "red"
        marginBottom: 40
    },
    button: {
        paddingVertical: 10,
        width: "47%",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    button_text: {
        color: 'black'
    },
    post_profile_box: {
        marginBottom: 40
    },
    post_profile_label: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    post_profile: {
        height: 46,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 10,
    },
    post_profile_image: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    post_profile_info: {
        display: 'flex',
        flexDirection: "column",
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    userEmail: {
        fontSize: 13,
        fontStyle: 'italic',
        textDecorationLine: "underline"
    }, 
    top_icons_box: {
        width: "100%", 
        paddingHorizontal: 20, 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between",
        position: 'absolute',
        top: 43,
        zIndex: 1,
        alignItems: 'center', 
        backgroundColor: "transparent"
        // backgroundColor: "red"
    }, 
    top_icons_back_box: {
        backgroundColor: "white", 
        width: 34, 
        height: 34,
        borderRadius: 17, 
        padding: 7, 
        paddingLeft: 5,
        paddingTop:5
        // display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center'
    },  
    top_icons_back: {},
    top_icons_eye_box: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        width: 70,
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingVertical: 5
    },
    top_icons_eye: {
        marginRight: 5
    },
    top_icons_eye_text: {
        color: "#6C63FF"
    }, 

})