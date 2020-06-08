/**
 * Integração com a lib Linking.
 * by: Vagner Pinto
 */

import React from 'react';
import {View, Text, Linking, Platform} from 'react-native';

/*
  Screen Home
 */
const homeScreen = () => {
    let msg = 'Oi';
    let phoneWithCountryCode = 'PAÍS_DDD_NUMERONOWHATSAPP';
    let urlApp = 'whatsapp://send?phone=' + phoneWithCountryCode + '&text=' + msg;
    let urlWeb = 'https://api.whatsapp.com/send?' + phoneWithCountryCode + '&text=' + msg;

    return (
        <View>
            <Text
                style={{marginTop: 30}}
                onPress={() => {
                    Linking.canOpenURL(urlApp).then(supported => {
                        if (supported) {
                            return Linking.openURL(urlApp);
                        } else {
                            return Linking.openURL(urlWeb);
                        }
                    });
                }}
            >
                WhatsApp Mensagem Manual (Clique aqui)
            </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text
                onPress={() => {
                    if (Platform.OS == 'android') {
                        Linking.sendIntent('android.content.Intent.ACTION_SEND', [{
                            text: 'Opa!',
                            type: 'text/plain',
                            Package: 'com.whatsapp',
                        }])
                            .catch((error) => {
                                console.log('error= ' + error.message + ' ' + error.code);
                                alert('Ops! Erro = ' + error.message);
                            });
                    }
                }}

            >
                WhatsApp Manual via Intent (Clique aqui)
            </Text>
        </View>
    );
};
export default homeScreen;
