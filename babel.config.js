module.exports = function(api) {
  api.cache(true);
  return{
    presets: [
      'module:@react-native/babel-preset',
      'nativewind/babel'
    ],

    plugins: [
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true
    }]
    
    ],
  }


  
};

