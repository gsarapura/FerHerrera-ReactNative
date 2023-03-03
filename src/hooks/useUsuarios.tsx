import { useState, useRef, useEffect } from "react";
import { Alert } from "react-native";
import { reqResApi } from "../api/reqRes";
import { Usuario, ReqResListado } from "../interfaces/reqRes";

export const useUsuarios = () => {
   const [usuarios, setUsuarios] = useState<Usuario[]>([]);

   const paginaRef = useRef(1);

  useEffect(() => {
    // Llamado API
    cargarUsuarios();
    console.debug(`Estoy en useEffect: ${paginaRef.current}`)
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
            page: paginaRef.current
        }
    })

    if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data)
    } else {
        paginaRef.current --;
        Alert.alert('No hay más', 'En serio', [
            {
                text: 'Intentar más rato',
                onPress: () => console.log('Intentar más rato'),
            },
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancelar'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }
  }
  const paginaSiguiente = () => {
    paginaRef.current ++;
    cargarUsuarios();
    console.debug(`Estoy en paginaSiguiente ${paginaRef.current}`)
  }

  const paginaAnterior = () => {
    if(paginaRef.current > 1){
        paginaRef.current --;
        cargarUsuarios();
    }
    console.debug(`Estoy en paginaAnterior ${paginaRef.current}`)
  }

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  }
}
