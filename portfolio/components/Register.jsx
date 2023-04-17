import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from "@rneui/themed"
import { useState, useCallback } from "react"
export default function Register({ navigation }){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [ageError, setAgeError] = useState("");

    function toHome() {
        navigation.navigate("Home")
    }

    let validateAge = useCallback(() => {
        if (!/^\d+$/.test(age)) {
          setAgeError("Error: Must be a digits.");
        } else {
          setAgeError("");
        }
      }, [age]);

    const isButtonEnabled =
    firstName.length > 0 &&
    lastName.length > 0 &&
    age.length > 0 &&
    ageError == ""

    return(
        <View>
        <Input placeholder='First Name' value={firstName} onChangeText={setFirstName}></Input>
        <Input placeholder='Last Name' value={lastName} onChangeText={setLastName}></Input>
        <Input placeholder='Age' value={age} onChangeText={setAge} errorMessage={ageError} onBlur={validateAge}></Input>
        <Button title="Submit" onPress={toHome} disabled={!isButtonEnabled} />
        </View>
    )
}
