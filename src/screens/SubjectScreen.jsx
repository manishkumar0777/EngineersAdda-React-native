import { View, Text, ActivityIndicator, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import SubjectCard from '../components/ui/SubjectCard';
import { getSubjects } from '../services/requests/subject';


const SubjectScreen = () => {
  const route = useRoute();
  const {branchCode , branchName , semesterNumber} = route.params;

  //states
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch subjects
  useEffect(() => {
    setLoading(true);
    getSubjects(semesterNumber, branchName)
      .then((res) => {
        setSubjects(res);
        setLoading(false);
      })
      .catch((err) => console.log('Subject Fetch Error :', err));
  },[])
    
 
  return (
    <View className='flex-1 w-full p-4 pt-6 bg-white'>
      {loading ? 
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
         : 
        <ScrollView className='h-full w-full'>
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.code}
              subjectName = {subject.name}
            />
          ))}
        </ScrollView>
      }
    </View>
  )
}

export default SubjectScreen