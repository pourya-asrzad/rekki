// File: app/signup.tsx
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("DE");
  const [phone, setPhone] = useState("");
  const [countryCallingCode, setCountryCallingCode] = useState("+49");

  const handleSignUp = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        {/* Left Panel */}
        <View style={styles.leftPanel}>
          <View>
            <Text style={styles.header}>
              REKKI <br /> DISTRIBUTORS
            </Text>
            <Text style={styles.subHeader}>
              the online platform for managing your{"\n"}customers, orders and
              payments
            </Text>
          </View>
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
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFilled} />
            </View>

            <Text style={styles.header}>set up your supplier account</Text>
            <Text style={styles.subtext}>
              enter your business details and an email address for receiving
              orders
            </Text>

            <TextInput
              style={styles.input}
              placeholder="business name\ne.g. Veg Supplier"
              placeholderTextColor="#555"
              value={businessName}
              onChangeText={setBusinessName}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="order email\ne.g. orders@vegsupplier.com"
              placeholderTextColor="#555"
              value={email}
              onChangeText={setEmail}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="business address\ne.g. 1 Drury Lane, NE3 FOD"
              placeholderTextColor="#555"
              value={address}
              onChangeText={setAddress}
              multiline
            />

            <View style={styles.phoneRow}>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={countryCallingCode}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    setCountryCallingCode(itemValue)
                  }
                >
                  <Picker.Item label="+49 (DE)" value="+49" />
                  <Picker.Item label="+1 (US)" value="+1" />
                  <Picker.Item label="+44 (UK)" value="+44" />
                </Picker>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="business phone number\ne.g. 7710131124"
                placeholderTextColor="#555"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>get started</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              already have an account? <Text style={styles.link}>log in</Text>
            </Text>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  pickerWrapper: {
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    flex: 0.6,
  },
  picker: {
    height: 56,
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
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "flex-start",
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#eee",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 24,
  },
  progressBarFilled: {
    width: "33%",
    height: "100%",
    backgroundColor: "#007aff",
  },

  subtext: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  countryPickerContainer: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  countryText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
  },
  countryCode: {
    fontSize: 16,
    color: "#000",
  },
  phoneInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 4,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },
  languageButton: {
    alignItems: "center",
    marginTop: "auto",
  },
});
