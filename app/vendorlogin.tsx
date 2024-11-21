import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VendorLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>Login to continue</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email / Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#31313147"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="**********"
          placeholderTextColor="#31313147"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgotten Password?</Text>
        </TouchableOpacity>
      </View>

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
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'Manrope',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Inter',
  },
  form: {
    marginBottom: 20,
  },
  label: {
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
    marginBottom: 20,
    fontSize: 12,
    fontFamily: 'Inter',
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'right',
    fontFamily: 'Manrope',
  },
  loginButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
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
    textAlign: 'center',
    fontFamily: 'Manrope',
  },
  registerLink: {
    color: '#3b5998',
    fontWeight: '600',
  },
});

export default VendorLogin;
