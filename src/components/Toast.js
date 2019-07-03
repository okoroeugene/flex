import React from 'react';
import { Toast } from 'native-base';

export default function (props) {
    return (
        Toast.show({
            type: props.type,
            text: props.text,
            textStyle: {
                fontFamily: "Sofia Pro Regular"
            },
            position: "top",
            duration: 4000
        })
    )
}