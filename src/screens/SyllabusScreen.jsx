import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import SyllabusCard from '../components/ui/SyllabusCard';


const SyllabusScreen = () => {
  
  const route = useRoute();
  const {subject} = route.params;

  return (

    <View className= 'flex-1 p-4 bg-white pt-6'>

      {subject.length === 0 ? 
      <View className='flex-1 p-4 bg-white pt-6'>
        <Text className='text-2xl font-bold text-blue-950'>Coming Soon...</Text>
      </View>
      : 
      <View className='flex-1  bg-white'>
         <View className='flex-row justify-between items-center mb-3'>
        <Text className='text-2xl font-bold text-blue-950 flex-wrap'>{subject.name}</Text>
        <Text className='text-blue-950 text-2xl font-bold'>Code:{subject.subjectCode}</Text> 
      </View>
      <ScrollView className='flex'>
        {subject.modules.map((module, index) => (
          <SyllabusCard module={module} key={index} index={index}/>
          
        ))}
      </ScrollView>
      </View>
      }
    </View>
  )
}

export default SyllabusScreen