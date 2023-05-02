import { StyleSheet, Text, Button, Dimensions, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import Row from './Row';

const number = 0;

export function Keyboard() {

    return (
        <View>
            <Row>
                <TouchableOpacity title='7' style={styles.button}>
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity title='8' style={styles.button}>
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity title='9' style={styles.button}>
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity title='x' style={styles.button}>
                    <Text style={styles.text}>x</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity title='4' style={styles.button}>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity title='5' style={styles.button}>
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity title='6' style={styles.button}>
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity title='-' style={styles.button}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </Row>

            <Row>
                <TouchableOpacity title='1' style={styles.button}>
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity title='2' style={styles.button}>
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity title='3' style={styles.button}>
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity title='+' style={styles.button}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </Row>


            <Row>
                <TouchableOpacity title='0' style={styles.buttonZero}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity title='-' style={styles.button}>
                    <Text style={styles.text}>-</Text>
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
        width: 235,
        borderRadius: 40,
        alignItems: 'center'
    }
})

