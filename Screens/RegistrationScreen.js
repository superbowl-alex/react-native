import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  // state
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // handlers
  const handleInputFocus = (textinput) => {
    setIsFocused({
      [textinput]: true,
    });
  };

  const handleInputBlur = (textinput) => {
    setIsFocused({
      [textinput]: false,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/background.jpg")}
      >
        <View style={styles.formWrap}>
          <Text style={styles.formTitle}>Register</Text>
          <View style={styles.form}>
            <TextInput
              style={
                isFocused.login
                  ? [
                      styles.input,
                      { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
                    ]
                  : styles.input
              }
              selectionColor={"#212121"}
              placeholder={"Login"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleInputFocus("login")}
              onBlur={() => handleInputBlur("login")}
            />
            <TextInput
              style={
                isFocused.email
                  ? [
                      styles.input,
                      { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
                    ]
                  : styles.input
              }
              selectionColor={"#212121"}
              placeholder={"Email"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleInputFocus("email")}
              onBlur={() => handleInputBlur("email")}
            />
            <View style={styles.wrapPassword}>
              <TextInput
                style={
                  isFocused.password
                    ? [
                        styles.input,
                        { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
                      ]
                    : styles.input
                }
                selectionColor={"#212121"}
                placeholder={"Password"}
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={!showPassword ? true : false}
                onFocus={() => handleInputFocus("password")}
                onBlur={() => handleInputBlur("password")}
              />
              <Text
                style={styles.inputPasswordText}
                onPress={handleTogglePassword}
              >
                {!showPassword ? "Show" : "Hide"}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.buttonTitle}>Register</Text>
            </TouchableOpacity>
            <View style={styles.warning}>
              <Text style={styles.warningText}>Already have an account?</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.warningBtn}>
                <Text style={styles.warningBtnTitle}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.avatarSceleton}>
            <View style={styles.avatarAdd}>
              <Text style={styles.avatarAddText}>+</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    position: "relative",
    flex: 1,
    resizeMode: "contain",
  },
  formWrap: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    justifyContent: "flex-end",
  },
  formTitle: {
    fontSize: 30,
    // fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
  },
  form: {
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 78,
  },
  input: {
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  wrapPassword: {
    position: "relative",
  },
  inputPasswordText: {
    position: "absolute",
    right: 16,
    top: 15,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    height: 51,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  warning: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginRight: 15,
  },
  warningBtn: {
    height: 20,
    backgroundColor: "#FF6C00",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  warningBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  avatarSceleton: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarAdd: {
    position: "absolute",
    bottom: 14,
    right: -14,
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarAddText: {
    fontSize: 25,
    lineHeight: 25,
    color: "#FF6C00",
  },
});
