import React, { useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { EvilIcons } from "@expo/vector-icons"
import { Context } from "../context/BlogContext"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  }
}

export default ShowScreen
