  
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    fontSize: 18,
    color: '#333',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },

  error: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10 ,
    marginTop: 6,
    textAlign: 'center',
  }
});