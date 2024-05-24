import { View, TextInput, Button, StyleSheet, Text, Modal } from 'react-native'
import { useState } from 'react';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function goalInputHandler(text) {
        setEnteredGoalText(text)
        if (errorMessage) {
            setErrorMessage('');
        }
    }

    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) {
            setErrorMessage('⚠️ Goal is Required');
            return;
        }
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                    placeholder='Your Goals' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} />
                </View>
                <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel}/>
                </View>
                </View>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccc',
        width: '100%',
        padding: 8,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})