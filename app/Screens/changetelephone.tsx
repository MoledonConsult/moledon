import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ChangeTelephone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Change Phone</Text>
        <Text style={styles.subtitle}>Create a New Branch Office</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.changeTitle}>Change Telephone Number</Text>
      <Text style={styles.instruction}>
        Didn't receive OTP to the +234 8123 456 789?{'\n'}
        Request OTP to a New Telephone Number Instead
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Telephone</Text>
        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>+234</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="70 123 456 789"
            placeholderTextColor="#31313147"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
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
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  changeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    textAlign: 'center',
    marginBottom: 5,
  },
  instruction: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 12,
    fontWeight: '400',
    color: '#31313199',
    fontFamily: 'Inter',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Inter',
  },
  continueButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default ChangeTelephone;
