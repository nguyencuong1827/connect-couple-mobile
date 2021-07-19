import { StyleSheet } from 'react-native'
import { BaseColor } from './color'

export const TagMessageStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: BaseColor.green_sea
  }
})
