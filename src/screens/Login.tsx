import { useEffect, useReducer } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

interface AuthState {
  validando: boolean;
  token: string | null;
  nombre: string;
  username: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  nombre: '',
  username: '',
}

type LoginPayload = {
  username: string;
  nombre: string;
}

type AuthAction = 
  | {type: 'logout'}
  | {type: 'login', payload: LoginPayload}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: '',
      }
    
    case 'login':
      const {nombre, username} = action.payload;
      return {
        validando: false,
        token: 'ABC1234',
        nombre,
        username
      }
  
    default:
      return state
  }
}

export const Login = () => {
  const [{token, validando, nombre}, dispatch] = useReducer(authReducer, initialState)
  useEffect(() => {
      setTimeout(() => {
        dispatch({type: 'logout'})
      }, 2000);
    }, [])

  const login = () => {
    dispatch({
      type: 'login', 
      payload: {
        nombre: 'Joselo',
        username: 'fff'
      } 
    })
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  if(validando) {
    return (
      <View style={styles.validating}>
        <Text style={styles.text}>
          Validando
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      {
        ( token ) 
            ? 
              <View style={styles.accepted}>
                <Text style={styles.text}>Autenticado como: {nombre}</Text>
              </View>
            
            : 
              <View style={styles.rejected}>
                <Text style={styles.text}>No autenticado</Text>
              </View>
            
      }
      {
        ( token )
            ? 
              <TouchableOpacity style={styles.buttonLogout}>
                <Text 
                  style={styles.text}
                  onPress= {logout} 
                  >Log out</Text>
              </TouchableOpacity>
            
            : 
              <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={login}>
                <Text 
                  style={styles.text}
                  >Log in</Text>
              </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  validating: {
    backgroundColor: 'cyan'
  },
  accepted: {
    backgroundColor: 'green'
  },
  rejected: {
    backgroundColor: 'red'
  },
  text: {
    textAlign: 'center',
    fontSize: 40
  },
  buttonLogin: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'cyan'

  },
  buttonLogout: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'orange'

  }
})