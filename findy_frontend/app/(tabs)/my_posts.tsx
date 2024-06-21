import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function myPostsPage() {
    return ( 
            <ThemedView>
                <ThemedText style={styles.textmargin}>myPostsPage</ThemedText>
            </ThemedView> 
    )
}

const styles = StyleSheet.create({
    textmargin: {
        marginTop: 50
    }, 
    pageMargin: {
        marginTop: 80
    }
})