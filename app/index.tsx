import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        {/* Left Panel */}
        <View style={styles.leftPanel}>
          <Text style={styles.header}>REKKI DISTRIBUTORS</Text>
          <Text style={styles.subHeader}>
            the online platform for managing your{"\n"}customers, orders and
            payments
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.link}>restaurants</Text>
            <Text style={styles.link}>distributors</Text>
            <Text style={styles.link}>help</Text>
            <Text style={styles.link}>about us</Text>
            <Text style={styles.link}>faqs</Text>
            <Text style={styles.link}>terms and conditions</Text>
          </View>
        </View>

        {/* Right Panel */}
        <View style={styles.rightPanel}>
          <Text style={styles.loginTitle}>log in to REKKI</Text>

          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            placeholderTextColor="#999"
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>forgot password?</Text>
          </TouchableOpacity>

          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.loginButton}
            labelStyle={{ fontSize: 16 }}
          >
            log in
          </Button>

          <Text style={styles.newUser}>
            new to REKKI?{" "}
            <Text style={styles.signup}>set up a distributor account</Text>
          </Text>

          <TouchableOpacity style={styles.languageSelector}>
            <Text style={styles.languageText}>English (US) ▼</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  innerContainer: {
    flexDirection: "row",
    flexGrow: 1,
    padding: 0,
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    padding: 24,
  },
  header: {
    fontSize: 32,
    fontWeight: "900",
    color: "#000",
  },
  subHeader: {
    fontSize: 18,
    color: "#555",
    marginTop: 16,
  },
  footerLinks: {
    position: "absolute",
    bottom: 20,
    left: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  link: {
    color: "#000",
    fontSize: 12,
    marginRight: 12,
    marginTop: 6,
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
    backgroundColor: "#eee",
  },
  forgotPassword: {
    color: "#000",
    textDecorationLine: "underline",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    borderRadius: 4,
  },
  newUser: {
    marginTop: 20,
    fontSize: 14,
  },
  signup: {
    color: "#007aff",
    textDecorationLine: "underline",
  },
  languageSelector: {
    marginTop: 40,
  },
  languageText: {
    fontSize: 14,
    color: "#333",
  },
});
