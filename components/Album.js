import React from 'react';
import { Text, View } from 'react-native'
import Card from './Card'

const AlbumDetail = (props) => {
   return (
      <Card>
         <Text>
            great Album = {props.album.title}
         </Text>
      </Card>
   )
}

export default AlbumDetail