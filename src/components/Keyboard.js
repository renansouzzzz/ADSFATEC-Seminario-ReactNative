import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Row from './Row';
import React, { useContext, useState } from 'react';
import { contextGeneral } from '../App';


export default function Keyboard() {

    const [saveValue, setSave] = useState([])
    const [operator, setOperator] = useState('')

    const { firstValue, setFirst } = useContext(contextGeneral)

    const onClick = (number) => {
        parseInt(number)
        if (firstValue[0] === 0) {
            firstValue.pop(0)
        }

        setFirst([...firstValue, number])
    }

    const reset = () => {
        setFirst([0])
        setSave([])
    }

    const del = () => {
        let copy = [...firstValue]
        copy.pop()

        setFirst(copy)
    }

    const equals = () => {
        let operacao = operator;
        let valor1 = parseInt(saveValue[0])
        let valor2 = parseInt(saveValue[2])
        let conta = 0

        console.log(valor1, valor2)

        switch (operacao) {
            case 'vezes':
                conta = valor1 * valor2;
                break;
            case 'dividir':
                conta = valor1 / valor2;
                break;
            case 'soma':
                conta = valor1 + valor2;
                break;
            case 'subtrair':
                conta = valor1 - valor2;
                break
        }

        setFirst(conta)
        setOperator('')
    }

    const calcX = () => {
        let first = [...firstValue]
        let joinValue = first.join('')
        parseInt(joinValue)

        if (!saveValue) {
            setSave([joinValue])
        }

        setSave([...saveValue, joinValue])

        setFirst([0])
        setOperator('vezes')
        console.log(firstValue, saveValue, operator)
        console.log(saveValue[0])
        console.log(saveValue[2])
        console.log(saveValue[0] * saveValue[2])
    }


    return (
        <View>
            <Row>
                <TouchableOpacity style={styles.buttonC} onPress={() => { reset() }}>
                    <Text style={styles.text}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_del} onPress={() => { del() }}>
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

                <TouchableOpacity style={styles.button_operadores} onPress={() => { calcX() }}>
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

                <TouchableOpacity style={styles.button_operadores} onPress={() => { }}>
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

                <TouchableOpacity style={styles.button_operadores} onPress={() => { }}>
                    <Text style={styles.textSinais}>+</Text>
                </TouchableOpacity>
            </Row>


            <Row>
                <TouchableOpacity style={styles.buttonZero} onPress={() => { onClick(0) }}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_operadores} onPress={() => { equals() }}>
                    <Text style={styles.textSinais}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_operadores} onPress={() => { }}>
                    <Text style={styles.textSinais}>÷</Text>
                </TouchableOpacity>
            </Row>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333333',
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: 'center' 
    },
    button_operadores: {
        backgroundColor: "#FEA00A",
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: 'center'
    },
    button_del: {
        backgroundColor: '#c3c2c2',
        margin: 10,
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: 'center' 
    },
    text: {
        marginTop: 15,
        fontSize: 35,
        color: "#fff"
    },
    buttonZero: {
        backgroundColor: '#333',
        margin: 10,
        height: 65,
        width: 150,
        borderRadius: 40,
        alignItems: 'center'
    },
    textSinais: {
        marginTop: 12,
        fontSize: 35,
        color: "#fff"
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
        fontSize: 25,
        color: "#FFF"
    }
})

