import { View, Text } from 'react-native'
import React from 'react'

const SyllabusCard = ({
  module,
  index,
}) => {
  return (
    <View className='flex w-full mt-2'>
      <View className=' justify-center flex-1 bg-sky-950 rounded-lg px-2  w-full h-10'>
        <Text className='text-gray-100 text-xl font-semibold'>Unit:{index + 1} - {module.name}</Text>
      </View>
      <Text className='text-blue-950 text-md mx-2'>{module.details}</Text>
    </View>
  )
}

export default SyllabusCard