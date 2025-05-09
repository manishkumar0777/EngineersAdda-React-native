import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BranchCard = ({
  onPress,
  title,
  description,
  logo,
  visit = 'Explore',
  coverImage,
}) => {
  return (
    <ImageBackground
      source={{ uri: coverImage }}
      resizeMode="cover"
      className="w-full min-h-80 rounded-xl overflow-hidden mb-8"
    >
      <View className="absolute inset-0 bg-black opacity-60" />

      <View className="flex-1 flex-col w-full h-full p-4 justify-between">
        <View className="flex-row items-center my-2">
          <View className="mr-3">
            <Icon name={logo} size={50} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text className="text-3xl font-bold text-white flex-wrap">
              {title}
            </Text>
          </View>
        </View>

        <Text className="text-2xl text-white mx-4 my-2">{description}</Text>

        <TouchableOpacity
          className="flex-row justify-center items-center bg-gray-50 w-full h-20 rounded-xl mb-2 border border-blue-950"
          onPress={onPress}
        >
          <Text className="text-blue-950 text-2xl font-semibold mx-2">{visit}</Text>
          <Icon name="arrow-forward" size={24} className='text-blue-950' />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BranchCard;
