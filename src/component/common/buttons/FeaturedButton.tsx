import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FeaturedButton({ props  } : any) {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})