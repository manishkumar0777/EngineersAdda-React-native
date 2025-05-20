import { View, Text , TextInput , ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import BranchCard from '../components/ui/BranchCard'
import { getBranches } from '../services/requests/branch'

const BranchScreen = () => {

  const navigation = useNavigation();

  //state
  const [loading, setLoading] = useState(false);
  const [allBranches, setAllBranches] = useState([]);
  const [search , setSearch] = useState('');
  const [fileteredBranches, setFilteredBranches] = useState([]);


  //fetch branche s
  useEffect(() => {
    setLoading(true);
    getBranches()
      .then((res) => {
        setFilteredBranches(res);
        setAllBranches(res);
        setLoading(false);
      })
      .catch((err) => console.log('Fetch Error :', err))
  }, [])

  //seach function
  const searchBranch = (text) => {
    setSearch(text);

    const filtered = allBranches.filter((branch) => (
      branch.title.toLowerCase().includes(text.toLowerCase()) ||
      branch.code.toLowerCase().includes(text.toLowerCase())
    ))

    setFilteredBranches(filtered)
  }


  return (
    <View className='flex-1 w-full justify-center bg-white p-4'>
      <View className='flex-row w-full h-16 items-center justify-evenly border border-blue-900 rounded-xl p-1 mb-4'>
        <Icon name='search' size={28} className='text-blue-950 mx-4 ' />
        <TextInput 
          name='search'
          placeholder='CSE or Computer Sc...'
          className='flex-1 w-full mx-2 text-gray-600 text-xl'
          value={search}
          onChangeText={searchBranch}
        />
      </View>
      <View className='flex-1 flex-col w-full h-[90%]'>

      {loading ?
       <View className='flex-1 w-full items-center justify-center'>
        <ActivityIndicator size={50} color='blue'/>
       </View> 
       : 
       <ScrollView className='w-full h-full'>
          {fileteredBranches.map((branch) => (
            <BranchCard 
              key={branch.code}
              title={branch.title}
              description={branch.description}
              logo={branch.iconName}
              coverImage={branch.coverImage}
              code={branch.code}
            />
          ))}
        </ScrollView> }
        
      </View>
    </View>
  )
}

export default BranchScreen
