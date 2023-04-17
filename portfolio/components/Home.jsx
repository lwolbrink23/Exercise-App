import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const data = [
    {component: "Repetition", title: "Push Ups Exercise", suggested:"Sit Ups Exercise", id: 1},
    {component: "Duration", title: "Bicycling Exercise", suggested:"Running Exercise", id: 2},
    {component: "Repetition", title: "Jumping Jacks Exercise", suggested:"Push Ups Exercise", id: 3},
    {component: "Duration", title: "Running Exercise", suggested:"Bicycling Exercise", id: 4},
    {component: "Repetition", title: "Sit Ups Exercise", suggested:"Jumping Jacks Exercise", id: 5}
]

const Item = ({ title, component, navigation, suggested }) => (
  <View style={{paddingVertical: 5}}>
    <Button title={title} onPress={() => navigation.navigate({ name: component, params: { title, suggested } })}></Button>
  </View>
);

const renderItem = ({ item, navigation }) => (
  <Item title={item.title} component={item.component} navigation={navigation} suggested={item.suggested} />
);

export default function Home( { navigation } ) {
  function toLogs() {
    navigation.navigate("Logs")
  }

    return(
      <View style={styles.container}>
        
        <View>
            {data && (
                <FlatList
                    data={data}
                    renderItem={(item) => renderItem({ ...item, navigation })}
                    keyExtractor={(item) => item.id}
                />
                )}
            
        </View>
        <View style={{paddingTop: 50}}><Button title="Exercise Logs" onPress={toLogs}></Button></View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});