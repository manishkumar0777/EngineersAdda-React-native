import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import SemesterCard from '../components/ui/SemesterCard';


const SemesterScreen = () => {

  const route = useRoute();
  const {branchCode, branchName} = route.params;

  const semesterNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']


  return (
    <View className='flex-1 w-full p-4 bg-white'>
      <FlatList
        data={semesterNumbers}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => (
          <SemesterCard semesterNumber={item} branchCode={branchCode} branchName={branchName}/>
        )}
      />
    </View>
  )
}

export default SemesterScreen