import { View, Text , TextInput , ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import branches from '../constants/branches'
import BranchCard from '../components/ui/BranchCard'

const BranchScreen = () => {

  const navigation = useNavigation();

  //state
  const [search , setSearch] = useState('');
  const [fileteredBranches, setFilteredBranches] = useState(branches);


  //seach function
  const searchBranch = (text) => {
    setSearch(text);

    const filtered = branches.filter((branch) => (
      branch.title.toLowerCase().includes(text.toLowerCase()) ||
      branch.code.toLowerCase().includes(text.toLowerCase())
    ))

    setFilteredBranches(filtered)
  }

  return (
    <View className='flex-1 w-full justify-center bg-white p-4'>
      <View className='flex-row w-full h-[8%] items-center justify-evenly border border-blue-900 rounded-xl p-1 mb-4'>
        <Icon name='search' size={28} className='text-blue-950 mx-4 ' />
        <TextInput 
          name='search'
          placeholder='EE or Electrical Eng..'
          className='flex-1 w-full mx-2 text-gray-600 text-xl'
          value={search}
          onChangeText={searchBranch}
        />
      </View>
      <View className='flex-1 flex-col w-full h-[90%]'>
        <ScrollView className='w-full h-full'>
          {fileteredBranches.map((branch) => (
            <BranchCard 
              key={branch.code}
              title={branch.title}
              description={branch.description}
              logo={branch.iconName}
              coverImage={branch.coverImage}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default BranchScreen
