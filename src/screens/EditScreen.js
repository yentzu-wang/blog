import React, { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import { Context } from "../context/BlogContext"

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  )

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChange={newTitle => setTitle(newTitle)} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
