import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TagMessageStyle } from '../themes/style'
import AntDesign from 'react-native-vector-icons/AntDesign'

const AdditionTag = () => {
  return (
    <View style={ TagMessageStyle.container }>
      <AntDesign name={'plus'} size={20}/>
    </View>
  )
}


export default AdditionTag
