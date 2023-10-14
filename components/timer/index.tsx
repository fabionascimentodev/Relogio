import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function relogio() {
    const [horas, setHoras] = useState<string>('');

    useEffect(() => {
        const intervalo = setInterval(() => {
            const rel = new Date();
            const horas = rel.getHours().toString().padStart(2, "0");
            const minutos = rel.getMinutes().toString().padStart(2, "0");

            setHoras(`${horas}:${minutos}`);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <View>
            <Text style={styles.titulo}>Hora Certa</Text>
            <Text style={styles.relogio}>{horas}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
    },
    relogio: {
        fontSize: 80,
    }
});
