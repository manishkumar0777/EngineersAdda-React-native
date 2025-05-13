import { View, Text } from 'react-native'
import React from 'react'

const SubjectCard = ({
    subjectcode = "XXXXXX",
    subjectName = "Subject Name",
    credits = "0",
    modules = "0",
}) => {
  return (
    <View className='flex-1 justify-center w-full max-h-40 bg-gray-50 rounded-xl border border-blue-950 p-4'>
        <View className=''>
            <Text className='text-3xl text-blue-950 font-bold'>{subjectName}</Text>
            <Text className='text-xl text-blue-950 font-semibold'>Subject Code : {subjectcode}</Text>
            <Text className='text-xl text-blue-950 font-semibold'>Credits : {credits}</Text>
            <Text className='text-xl text-blue-950 font-semibold'>Modules : {modules}</Text>
        </View>
    </View>
  )
}

export default SubjectCard