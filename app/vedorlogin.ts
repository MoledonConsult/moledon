import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VendorLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>Login to continue</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email / Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#31313147"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="**********"
          placeholderTextColor="#31313147"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink}>Register as Vendor</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    marginTop: 50,
    marginBottom: 30,
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    marginBottom: 10,
    fontFamily: 'Manrope',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    marginBottom: 30,
    fontFamily: 'Inter',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'Manrope',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    fontSize: 12,
    fontFamily: 'Inter',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Manrope',
  },
  loginButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
  registerText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Manrope',
  },
  registerLink: {
    color: '#3b5998',
    fontWeight: '600',
  },
});

export default VendorLogin;
