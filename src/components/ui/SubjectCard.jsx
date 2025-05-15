import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SubjectCard = ({
    subjectCode = "XXXXXX",
    subjectName = "Subject Name",
    credits = "0",
    modules = "0",
}) => {

  const navigation = useNavigation();

  const navigateToSyllbus = () => {
    navigation.navigate('SyllabusScreen', {
      subjectCode,
      subjectName,
      credits,
      modules,
      module,
      moduleName,
      source,
      books,
      
    })
  }


  return (
    <View className='flex-1 justify-center w-full h-20 bg-gray-50 rounded-xl border border-blue-950 p-4 mb-2'>
        <View className=''>
            <Text className='text-2xl text-blue-950 font-bold'>{subjectName}</Text>
        </View>
    </View>
  )
}

export default SubjectCard