import React, { useContext } from "react"
import { StyleSheet, Text, View, FlatList, Button } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Context } from "../context/BlogContext"

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather name="trash" style={styles.icon} />
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen
