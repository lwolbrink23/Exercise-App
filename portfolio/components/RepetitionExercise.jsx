import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react"

export default function RepFunction({ route, navigation}){
    let [count, setCount] = useState(0)
    let [savedCounts, setSavedCounts] = useState([])

    function addCount() {
        setCount(count + 1)
    }

    function restart() {
        setCount(0)
    }

    function saveCount()
    {
        setSavedCounts([...savedCounts, count]);
    }

    function Save() {
        return <View>{savedCounts.map(prevCount => (<Text>{prevCount}</Text>))}</View>
    }

    function toHome() {
        navigation.navigate("Home")
    }

    function toSuggested() {
        navigation.navigate(`Repetition`, { title: `${route.params.suggested}`, suggested: `${route.params.suggested}` });
    }
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>{route.params.title}</Text>
            <Text style={{fontSize: 30}}>{count}</Text>
            <View>
            <View style={{paddingVertical: 5}}><Button title="Complete Rep" onPress={addCount}></Button></View>
            <View style={{paddingVertical: 5}}><Button title="Save Current Increment" onPress={saveCount}></Button></View>
            <View style={{paddingVertical: 5}}><Button title="Restart" onPress={restart}></Button></View>
            </View>
            <Text>Previous recordings:</Text>
            <Save/>
            <View style={{paddingVertical: 20}}><Button title="Clear" onPress={() => setSavedCounts([])}></Button></View>
            <View style={{paddingVertical: 10}}><Button title={`Suggested: ${route.params.suggested}`} onPress={toSuggested}></Button></View>
            <Button title="Go Home" onPress={toHome}></Button>
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