import { StyleSheet, Text, Button, Dimensions, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import Row from './Row';

const number = 0;

export function Keyboard() {

    return (
        <View>
            <Row>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSinais}>x</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSinais}>-</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSinais}>+</Text>
                </TouchableOpacity>
            </Row>


            <Row>
                <TouchableOpacity style={styles.buttonZero}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSinais}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
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
        marginTop: 13,
        fontSize: 35
    }
})

