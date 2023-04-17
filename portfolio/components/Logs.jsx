import { Button, Text, View, TextInput, Picker } from 'react-native';
import { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Logs({ route, navigation }){
    const [value, setValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("item0");
    const [logs, setLogs] = useState([]);
    const [showClearConfirmation, setShowClearConfirmation] = useState(false)

    const isButtonEnabled = selectedValue !== "none"

    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
    });

    useEffect(() => {
        // load logs from AsyncStorage when component mounts
        async function loadLogs() {
            try {
                const logsString = await AsyncStorage.getItem('logs');
                if (logsString !== null) {
                    const logsData = JSON.parse(logsString);
                    setLogs(logsData);
                }
            } catch (error) {
                console.log(error);
            }
        }
        loadLogs();
    }, []);

    async function addLog() {
        const newLog = { exercise: selectedValue, notes: value, date: dateString};
        setLogs([...logs, newLog]);
        setValue("");
        setSelectedValue("none");

        // save logs to AsyncStorage
        try {
            const logsString = JSON.stringify([...logs, newLog]);
            await AsyncStorage.setItem('logs', logsString);
        } catch (error) {
            console.log(error);
        }
    }

    function clearLogs() {
        if (logs.length > 0) {
          setShowClearConfirmation(true);
        }
      }
    
      function confirmClear() {
        setLogs([]);
        setShowClearConfirmation(false);
      }
    
      function cancelClear() {
        setShowClearConfirmation(false);
      }

    return(
        <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>Create a new log</Text>
        <View style={{flexDirection: 'row', paddingVertical: 15}}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select an exercise" value="none" />
                <Picker.Item label="Push Ups" value="Push Ups" />
                <Picker.Item label="Bicycling" value="Bicycling" />
                <Picker.Item label="Jumping Jacks" value="Jumping Jacks" />
                <Picker.Item label="Running" value="Running" />
                <Picker.Item label="Sit Ups" value="Sit Ups" />
            </Picker>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={{padding: 10, backgroundColor:"#bebebe" }}
                placeholder="type here"
            />
            <Button title="Add" disabled={!isButtonEnabled} onPress={addLog}></Button>
        </View>
        <View>
                {logs.map((log, index) => (
                    <Text key={index}>{log.exercise} - {log.notes} - {log.date}</Text>
                ))}
            </View>
            {logs.length > 0 ? (
                showClearConfirmation ? (
                <View style={{paddingVertical: 15}}>
                <Text>Are you sure?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button title="Yes" onPress={confirmClear} />
                    <Button title="Cancel" onPress={cancelClear} />
                </View>
                </View>
                ) : (
                <View style={{paddingVertical: 15}}><Button title="Clear all" onPress={clearLogs} /></View>
                )
            ) : null}
        </View>
    )
}