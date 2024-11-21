import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const VerifyTelephoneEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Confirm OTP</Text>
        <Text style={styles.subtitle}>Create a New Branch Office</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.validateTitle}>Validate Telephone</Text>
      <Text style={styles.instruction}>
        An OTP has been sent to the Email and Telephone Number you provided.
      </Text>

      <View style={styles.otpContainer}>
        <Text style={styles.otpLabel}>Enter OTP</Text>
        <Text style={styles.timer}>00 : 43</Text>
        <View style={styles.otpBoxes}>
          {[...Array(4)].map((_, index) => (
            <TextInput key={index} style={styles.otpBox} maxLength={1} keyboardType="numeric" />
          ))}
        </View>
        <Text style={styles.resendText}>
          Didn't Receive Code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
        <Text style={styles.orText}>OR</Text>
        <Text style={styles.changeNumberLink}>Change Telephone Number?</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>CONFIRM</Text>
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
  validateTitle: {
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
  otpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  otpLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  timer: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 20,
  },
  otpBoxes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpBox: {
    width: 36,
    height: 34,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter',
  },
  resendText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#31313147',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  resendLink: {
    color: '#313131',
  },
  orText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#31313147',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  changeNumberLink: {
    fontSize: 12,
    fontWeight: '600',
    color: '#313131cc',
    fontFamily: 'Manrope',
  },
  confirmButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default VerifyTelephoneEmail;
