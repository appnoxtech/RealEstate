import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Shortlisted() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
      <Text>Hey there I'm Shortlisted Page</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
})