import { StyleSheet, Text, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import React from 'react';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props : CurrencyButtonProps):JSX.Element =>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.countryName}>{props.name}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'center',
    },
    flag: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    countryName:{
        fontSize: 14,
        color: '#2d3436',
    },

});

export default  CurrencyButton;


