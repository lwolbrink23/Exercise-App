import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useRef } from 'react'

export default function DurFunction({ route, navigation }){

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        return `${getMinutes} : ${getSeconds}`
    }
    
    const [time, setTime] = useState(0)
    let [savedTimes, setSavedTimes] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)
    

    // if timer on is true ->
    
    function startTimer() {
        setIsActive(true)
        setIsPaused(true)
        increment.current = setInterval(() => {
        setTime((time) => time + 1)
        }, 1000)
    }

    function pauseTimer() {
        clearInterval(increment.current)
        setIsPaused(false)
    }

    function resumeTimer() {
        setIsPaused(true)
        increment.current = setInterval(() => {
        setTime((timer) => timer + 1)
        }, 1000)
    }

    function resetTimer() {
    clearInterval(increment.current)
    setTime(0)
    setIsActive(false)
    setIsPaused(false)
   }

    function saveTime() {
        setSavedTimes([...savedTimes, time])
    }

    function Save() {
        return <View>{savedTimes.map(prevTime => (<Text>{formatTime(prevTime)}</Text>))}</View>
    }

    function goHome() {
        navigation.navigate('Home');
    }

    function toSuggested() {
        navigation.navigate(`Duration`, { title: `${route.params.suggested}`, suggested: `${route.params.suggested}` });
    }

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>{route.params.title}</Text>
            <Text style={{fontSize: 30}}>{formatTime(time)}</Text>
            <View>
            {
            !isActive && !isPaused ?
              <Button title="Start" onPress={startTimer}></Button>
              : (
                isPaused ? <Button title="Pause" onPress={pauseTimer}></Button> :
                  <Button title="Resume" onPress={resumeTimer}></Button>
              )
            }
            <View style={{paddingVertical: 10}}><Button title="Reset" onPress={resetTimer} disabled={!isActive}></Button></View>
            <Button title="Save Timestamp" onPress={saveTime} disabled={!isActive}></Button>
            </View>
            <Text style={{fontSize: 15}}>Previous Recordings</Text>
            <Save/>
            <View style={{paddingVertical: 20}}><Button title="Clear" onPress={() => setSavedTimes([])}></Button></View>
            <View style={{paddingVertical: 10}}><Button title={`Suggested: ${route.params.suggested}`} onPress={toSuggested}></Button></View>
            <Button title="Go Home" onPress={goHome}></Button>
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