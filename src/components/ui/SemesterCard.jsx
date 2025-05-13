import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SemesterCard = ({
  semesterNumber,
  branchCode,
  branchName,
}) => {

  const navigation = useNavigation();

  const navigateToSubject = () => {
    navigation.navigate('SubjectScreen' ,{
      branchCode : branchCode,
      branchName : branchName,
      semesterNumber : semesterNumber,
    })
  }

  return (
    <TouchableOpacity 
      className='flex-1 items-center justify-center w-full h-40 bg-gray-50 elevation-md rounded-xl mb-2 mx-2 p-2 border-2 border-blue-950'
      onPress={navigateToSubject}
    >
      <Text className='text-3xl text-blue-950 text-center font-bold'>{semesterNumber}</Text>
    </TouchableOpacity>
  )
}

export default SemesterCard