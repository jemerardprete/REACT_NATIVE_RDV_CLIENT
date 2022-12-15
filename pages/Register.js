import { StyleSheet, View, Text } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';


export default function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Inscription</Text>
            <Form onButtonPress={() => console.warn('do something')} buttonText="Se connecter" buttonStyle={styles.button}>
                <FormItem
                    label="Nom d'utilisateur"
                    isRequired
                    asterik
                    style={styles.input}
                />
                <FormItem
                    label="Email"
                    isRequired
                    asterik
                    style={styles.input}
                    keyboardType="email-address"
                />
                <FormItem
                    label="Mot de passe"
                    isRequired
                    asterik
                    secureTextEntry={true}
                    style={styles.input}
                />
            </Form>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 50
    },
    button: {
        backgroundColor: '#2596be'
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey'
    },

    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30
    }
});