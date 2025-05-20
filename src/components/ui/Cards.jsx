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
    <TouchableOpacity
     onPress={onPress} 
     className='flex-1 flex-col bg-bray-300 w-full max-h-40 rounded-xl border border-gray-800 p-4 mb-6'
     >
      <View className='flex-row items-center my-1'>
        <View className="mr-3">
          <Icon name={logo} size={40} color="#1e3a8a" />
        </View>
        <View style={{ flex: 1 }}>
          <Text className='text-2xl font-bold flex-wrap' numberOfLines={2} ellipsizeMode='tail'>
            {title}
          </Text>
        </View>
      </View>
        <Text className='text-xl text-blue-900 mx-4 my-1' numberOfLines={2} ellipsizeMode='tail'>{description}</Text>
    </TouchableOpacity>
  )
}

export default Cards