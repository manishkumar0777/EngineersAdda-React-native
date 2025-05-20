import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SubjectCard = ({
    subjectCode = "XXXXXX",
    subjectName = "Subject Name",
    credits = "0",
    modules = "0",
    module,
    source,
    books,
    subject,
}) => {

  const navigation = useNavigation();

  const navigateToSyllbus = () => {
    navigation.navigate('SyllabusScreen', {
      subject,
    })
  }


  return (
    <TouchableOpacity 
      className='flex-1 justify-center w-full h-20 bg-gray-50 rounded-xl border border-blue-950 p-4 mb-2 ease-in duration-300' 
      onPress={navigateToSyllbus}
    >
        <View className=''> 
            <Text className='text-2xl text-blue-950 font-bold'>{subjectName}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SubjectCard