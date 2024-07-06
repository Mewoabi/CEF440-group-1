
import { TabBarIcon, TabBarIconThree, TabBarIconTwo } from '@/components/navigation/TabBarIcon';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';



const Settings = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.option_box}>
                <TabBarIconTwo name={'notifications'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
                <ThemedText style={styles.itemText}>Push Notifications</ThemedText>
                <Switch />
            </ThemedView>
            <ThemedView style={styles.option_box}>
                <TabBarIcon name={'moon-waning-crescent'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
                <ThemedText style={styles.itemText}>Mode</ThemedText>
                <Switch />
            </ThemedView>
            <TouchableOpacity style={styles.option_box} >
                <TabBarIcon name={'archive-lock-outline'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
                <ThemedText style={styles.itemText}>Privacy policy</ThemedText>
                <ThemedText style={styles.arrow}>›</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical: 40
    },
    backButton: {
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    option_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20, 
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    itemText: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
    },
    arrow: {
        fontSize: 25,
        color: '#000',
        paddingRight: 20
    },
});

export default Settings;
