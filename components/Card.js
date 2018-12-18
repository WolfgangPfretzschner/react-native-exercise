import React from 'react'
import { View } from 'react-native'


const Card = (props) => {
   const {containerStyle} = styles
   return (
      <View style={containerStyle} >
         {props.children}
      </View>
   )
}

console.log("%ctestq","color:red;font-size:18px",)
const styles = {
   containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10

   },
   bg: {
    width: 327,
    height: 188,
    shadowColor: 'rgba(69, 91, 99, 0.08)',
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
}

export default Card