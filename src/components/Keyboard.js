import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Row from './Row';
import React, { useContext } from 'react';
import { contextGeneral } from '../App';

export function Keyboard() {

    const { firstValue, setFirst, secondValue, setSecond } = useContext(contextGeneral)

    const onClick = (number) => {

        if (firstValue[0] === 0) {
            firstValue.pop(0)
        }
    
        setFirst(firstValue => [...firstValue, number])
    }

    const reset = () => {
        setFirst([0])
    }

    const del = () => {
        let copy = [...firstValue]
        copy.pop()

        setFirst(copy)
    }

    function calcX(firstValue, secondValue){
        let cal = firstValue
    }


    return (
        <View>
            <Row>
                <TouchableOpacity style={styles.buttonC} onPress={() => { reset() }}>
                    <Text style={styles.text}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { del() }}>
                    <Text style={styles.textDel}>Del</Text>
                </TouchableOpacity>
            </Row>
            <Row>
                <TouchableOpacity style={styles.button} onPress={() => { onClick(7) }}>
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(8) }}>
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(9) }}>
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.textSinais}>x</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity style={styles.button} onPress={() => { onClick(4) }}>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(5) }}>
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(6) }}>
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {  }}>
                    <Text style={styles.textSinais}>-</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity style={styles.button} onPress={() => { onClick(1) }}>
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(2) }}>
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { onClick(3) }}>
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textSinais}>+</Text>
                </TouchableOpacity>
            </Row>


            <Row>
                <TouchableOpacity style={styles.buttonZero} onPress={() => { onClick(0) }}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textSinais}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textSinais}>-</Text>
                </TouchableOpacity>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#c3c2c2',
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: 'center'
    },

    text: {
        marginTop: 15,
        fontSize: 35
    },

    buttonZero: {
        backgroundColor: '#c3c2c2',
        margin: 10,
        height: 65,
        width: 150,
        borderRadius: 40,
        alignItems: 'center'
    },
    textSinais: {
        marginTop: 12,
        fontSize: 35
    },
    buttonC: {
        backgroundColor: '#c3c2c2',
        margin: 10,
        height: 65,
        width: 235,
        borderRadius: 40,
        alignItems: 'center'
    },
    textDel: {
        marginTop: 20,
        fontSize: 25
    }
})

