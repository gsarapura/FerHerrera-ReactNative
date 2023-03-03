import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useUsuarios } from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {
  const {paginaAnterior, paginaSiguiente, usuarios} = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    const {id, avatar, email, first_name, last_name} = usuario;
    return (
        <View key={id.toString()}>
            <Image 
                style={styles.tinyLogo}
                source={{
                uri: avatar, 
            }}/>
            <Text>{email}</Text>
            <Text>{first_name} {last_name}</Text>
        </View>
    )
  }
  
  return (
    <>
        <Text>Usuarios</Text>
        {
            usuarios.map(renderItem)
        }
        <View style={styles.centerContent}>
            <TouchableOpacity
                style={styles.previousButton}
                onPress={paginaAnterior}
            >
                <Text>Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={paginaSiguiente}
            >
                <Text>Siguiente</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    centerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    nextButton: {
        alignItems: 'center',
        backgroundColor: 'cyan',
        padding: 4,
    },
    previousButton: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 4,
    },
    tinyLogo: {
        width: 80,
        height: 80,
    },
})