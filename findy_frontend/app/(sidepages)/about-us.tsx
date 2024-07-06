import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function aboutUsPage() {
    return ( 
            <ThemedView>
                <ThemedText style={styles.textmargin}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos sapiente vel fuga. Assumenda, iusto. Atque vel voluptatem eos optio numquam quae reprehenderit. Officiis distinctio maiores sed velit commodi repellat eos, deleniti officia itaque dignissimos soluta iure architecto tenetur quasi deserunt cupiditate expedita fuga blanditiis ut sit vel tempore enim!</ThemedText>
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