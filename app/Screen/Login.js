import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Your login logic here
    // For simplicity, let's assume successful login for any username/password
    Actions.index(); // Redirect to index.js
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/kemal.jpg")}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Login</Text>
        </View>
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder="Email"
          onChange={(e) => setEmail(e.nativeEvent.text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder="Password"
          onChange={(e) => setPassword(e.nativeEvent.text)}
          style={styles.textInput}
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: 8,
          marginRight: 10,
        }}
      >
        <Text style={{ color: "#420475", fontWeight: "bold" }}>
          Forgot password?
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={handleLogin}>
          <Text style={styles.textSign}>Login</Text>
        </TouchableOpacity>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#420475" }}>
            ---or Continue as ---
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: "#420475",
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,

    color: "#05375a",
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#420475",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    marginTop: -20,
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  inBut: {
    width: "70%",
    backgroundColor: "#420475",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inBut2: {
    backgroundColor: "#420475",
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default LoginScreen;
