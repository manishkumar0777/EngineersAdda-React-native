import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import SubjectCard from '../components/ui/SubjectCard';


const SubjectScreen = () => {
    
    const route = useRoute();
    const {branchCode , branchName , semesterNumber} = route.params;
  return (
    <View className='flex-1 w-full p-4 bg-white '>
      <SubjectCard />
    </View>
  )
}

export default SubjectScreen