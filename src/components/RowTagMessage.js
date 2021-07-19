import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TagMessage from "./TagMessage";
import AdditionTag from "./AdditionTag";

const RowTagMessage = (props) => {
  const { items } = props
  if (!items) {
    return null
  }
  const renderListTag = items.map((item, index) => {
    if (item.message === 'Add') {
      return <AdditionTag key={index}/>
    }
    return <TagMessage key={index} message={item.message} tagColor={item.tagColor} contentColor={item.contentColor}/>
  })

  return (
    <View style={styles.container}>
      { renderListTag }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10
  },
})

export default RowTagMessage
