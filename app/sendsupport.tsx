import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SendSupport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Yakubu Daniel</Text>
        <Text style={styles.bankDetails}>1234567890 (WEMA BANK)</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>Mohgas Help/Support</Text>
      <Text style={styles.subtitle}>Send in your message</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Subject *</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Message *</Text>
        <TextInput style={[styles.input, styles.textArea]} multiline />

        <Text style={styles.label}>Upload Screenshots</Text>
        <View style={styles.uploadContainer}>
          <View style={styles.uploadBox}>
            <Text style={styles.uploadText}>+</Text>
          </View>
          <View style={styles.uploadBox}>
            <Text style={styles.uploadText}>+</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND MESSAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    left: 0,
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  bankDetails: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 20,
    fontSize: 12,
    fontFamily: 'Inter',
  },
  textArea: {
    height: 80,
  },
  uploadContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  uploadBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  uploadText: {
    fontSize: 24,
    color: '#cccccc',
  },
  sendButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default SendSupport;
