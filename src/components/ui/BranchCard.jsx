import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const BranchCard = ({
  code,
  title,
  description,
  logo,
  visit = 'Explore',
  coverImage,
}) => {

  const navigation = useNavigation();

  const navigateToSemester = () => {
    navigation.navigate('SemesterScreen', {
      branchCode : code,
      branchName : title,
    })
  }

  return (
    <ImageBackground
      source={{ uri: coverImage }}
      resizeMode="cover"
      className="w-full min-h-70 max-h-70 rounded-xl overflow-hidden mb-4 border-2 border-blue-950"
      onPress={navigateToSemester}
    >
      <View className="absolute inset-0 bg-black opacity-60" />

      <View className="flex-1 flex-col w-full h-full px-4 py-2 justify-between">
        <View className="flex-row items-center my-2">
          <View className="mr-3">
            <Icon name={logo} size={50} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text 
              className="text-3xl font-bold text-white flex-wrap"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
          </View>
        </View>

        <Text 
          className="text-2xl text-white mx-4 my-2"
          numberOfLines={2}
          ellipsizeMode="tail"
        >{description}</Text>

        <TouchableOpacity
          className="flex-row justify-center items-center bg-gray-50 w-full h-16 rounded-xl mt-2 bottom-2 border border-blue-950"
          onPress={navigateToSemester}
        >
          <Text className="text-blue-950 text-2xl font-semibold mx-2">{visit}</Text>
          <Icon name="arrow-forward" size={24} className='text-blue-950' />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BranchCard;
