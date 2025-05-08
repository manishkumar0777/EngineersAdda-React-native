import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Cards = ({
    onPress,
    title,
    description,
    logo,
    visit='Explore',
}) => {
  return (
    <View className='flex-1 flex-col bg-bray-300 w-full max-h-80 rounded-xl border border-gray-800 p-4 mb-8'>
      <View className='flex-row items-center my-2'>
        <View className="mr-3">
          <Icon name={logo} size={50} color="#1e3a8a" />
        </View>
        <View style={{ flex: 1 }}>
          <Text className='text-3xl font-bold flex-wrap'>
            {title}
          </Text>
        </View>
      </View>
        <Text className='text-2xl text-blue-900 mx-4 my-2'>{description}</Text>
      <TouchableOpacity 
        className='flex-1 flex-row justify-center items-center my-2 bg-blue-950 w-full h-20 rounded-xl absolute bottom-2 left-4 right-4'
        onPress={onPress}
    >
        <Text className='text-white text-2xl font-semibold mx-2'>{visit}</Text>
        <Icon name='arrow-forward' size={24} color="#fff" className='mx-3' />
      </TouchableOpacity>
    </View>
  )
}

export default Cards