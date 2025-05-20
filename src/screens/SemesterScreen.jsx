import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import SemesterCard from '../components/ui/SemesterCard';


const SemesterScreen = () => {

  const route = useRoute();
  const {branchCode, branchName} = route.params;

  const semesterNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']


  return (
    <View className='flex-1 w-full p-2 bg-blue-950'>
      <View className='w-full flex-1 flex-col justify-center items-center bg-blue-950 rounded-xl p-2'>
        <Text 
          className='text-2xl font-bold text-gray-50 justify-center mx-4 my-3 flex-wrap' 
          numberOfLines={1}
          ellipsizeMode="tail"
        >{branchName}</Text>
        <View className='w-full flex-1'>
          <FlatList
            data={semesterNumbers}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <SemesterCard semesterNumber={item} branchCode={branchCode} branchName={branchName} />
            )}
          />
        </View>
      </View>

      
    </View>
  )
}

export default SemesterScreen