import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useRouter } from 'expo-router'

const inbox = () => {
    const router=useRouter()
  return (
    <View>
       <Button icon="camera" mode="contained" onPress={() => router.push('/message/notification')}>
    Press me
  </Button>
  
    </View>
  )
}

export default inbox