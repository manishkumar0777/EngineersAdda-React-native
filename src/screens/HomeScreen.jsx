import { View, Text } from 'react-native'
import React from 'react'
import Cards from '../components/ui/Cards'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  const openBranchScreen = () => {
    navigation.navigate('BranchScreen');
  }

  return (
    <View className='flex-1 flex-col w-full p-4 bg-white'>
      <Cards
       title='Bachelor of Technology'
       description='A technical degree focused on practical engineering skills and innovation in various fields.'
       logo='engineering'
       onPress={openBranchScreen}
      />
      <Cards  />
    </View>
  )
}

export default HomeScreen