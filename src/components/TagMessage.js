import React from 'react'
import {Text, StyleSheet, TouchableOpacity, TouchableOpacityComponent, TouchableHighlight} from 'react-native'
import { TagMessageStyle } from '../themes/style'

const TagMessage = (props) => {
  const { message, tagColor, contentColor } = props
  if (!message) {
    return null
  }
  const containerStyle = StyleSheet.flatten([
    TagMessageStyle.container,
    {
      backgroundColor: tagColor
    }
  ])
  const contentStyle = StyleSheet.flatten([
    styles.content,
    {
      color: contentColor
    }
  ])
  return (
    <TouchableOpacity style={containerStyle}>
      <Text style={contentStyle}>{message}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 14
  }
})

export default TagMessage
