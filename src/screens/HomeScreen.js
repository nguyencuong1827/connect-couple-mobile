import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import RowTagMessage from '../components/RowTagMessage'
import { BaseColor } from '../themes/color'

const HomeScreen = () => {
  const fakeData = [
    {
      message: 'Ăn cơm chưa?',
      tagColor: BaseColor.sun_flower,
      contentColor: 'black'
    },
    {
      message: 'Ngủ chưa ?',
      tagColor: BaseColor.blue,
      contentColor: 'black'
    },
    {
      message: 'Mai về?',
      tagColor: BaseColor.dark_sliver,
      contentColor: 'black'
    },
    {
      message: 'Hello cậu?',
      tagColor: BaseColor.carrot,
      contentColor: 'black'
    },
    {
      message: 'Hi cậu?',
      tagColor: BaseColor.dark_red,
      contentColor: 'black'
    },
    {
      message: 'Add',
      tagColor: '',
      contentColor: 'black'
    }
  ]
  const createData = () => {
    const result = []
    const numRow = Math.floor(fakeData.length / 2 )+ fakeData.length % 2
    for(let i = 0; i < numRow; i++){
      result[i] = []
      for(let j = 0; j < 2; j++) {
        if(fakeData[i*2 + j]) {
          result[i][j] = fakeData[i*2 + j]
        }
      }
    }
    return result
  }
  const renderRowItem = ({item}) => {
    return <RowTagMessage items={item}/>
  }
  const data = createData()
  const keyExtractor = (item, index) => index
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderRowItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 14
  }
})

export default HomeScreen
