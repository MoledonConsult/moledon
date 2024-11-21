import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Yakubu Daniel</Text>
        <Text style={styles.bankDetails}>1234567890 (WEMA BANK)</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Change Password</Text>
        <Text style={styles.subtitle}>Changing your account password is easy.</Text>

        {passwordFields.map((field, index) => (
          <View key={index} style={styles.formField}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#11101033"
              secureTextEntry
            />
          </View>
        ))}

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const passwordFields = [
  { label: 'Current Password', placeholder: '**********' },
  { label: 'New Password', placeholder: '**********' },
  { label: 'Confirm New Password', placeholder: '**********' },
];

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
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 20,
    textAlign: 'center',
  },
  formField: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    fontSize: 12,
    fontFamily: 'Inter',
  },
  updateButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  updateButtonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default ChangePassword;
