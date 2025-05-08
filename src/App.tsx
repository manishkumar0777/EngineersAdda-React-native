import '../global.css'
import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './navigations/Navigation'


const App = () => {
  return (
    <View className='flex-1'>
      <Navigation />
    </View>
  )
}

export default App