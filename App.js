import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import Rdv from "./pages/Rdv";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <View style={styles.nav}>
          <Link to="/">
            <Text style={styles.textWhite}>APP RDV</Text>
          </Link>
          <View style={styles.authButtons}>
            <Link style={styles.link} to="/login">
              <Text style={styles.textMain}>Connexion</Text>
            </Link>
            <Link style={styles.link} to="/register">
              <Text style={styles.textMain}>Inscription</Text>
            </Link>
          </View>
        </View>

        <Routes>
          <Route exact path="/" element={<Rdv />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  nav: {
    marginTop: 50,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#2596be',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  authButtons: {
    flexDirection: 'row',
  },
  link: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 50
  },
  textWhite: {
    color: 'white'
  },
  textMain: {
    color: '#2596be'
  }
});
