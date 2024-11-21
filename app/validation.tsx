import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Confirm OTP</Text>
      <Text style={styles.headerSubtitle}>Create a New Branch Office</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.headerImage} 
      />
    </View>
  );
};

const OTPInstructions = () => {
  return (
    <View style={styles.instructionsContainer}>
      <Text style={styles.instructionsTitle}>Validate Telephone</Text>
      <Text style={styles.instructionsText}>
        An OTP has been sent to the Email and Telephone Number you provided.
      </Text>
    </View>
  );
};

const OTPInput = () => {
  return (
    <View style={styles.otpContainer}>
      <Text style={styles.otpLabel}>Enter OTP</Text>
      <Text style={styles.otpTimer}>00 : 43</Text>
      <View style={styles.otpBoxes}>
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
      </View>
    </View>
  );
};

const ResendOptions = () => {
  return (
    <View style={styles.resendContainer}>
      <Text style={styles.resendText}>Didn't Receive Code? <Text style={styles.resendLink}>Resend</Text></Text>
      <Text style={styles.orText}>OR</Text>
      <Text style={styles.changeNumberText}>Change Telephone Number?</Text>
    </View>
  );
};

const ConfirmButton = () => {
  return (
    <TouchableOpacity style={styles.confirmButton}>
      <Text style={styles.confirmButtonText}>CONFIRM</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <OTPInstructions />
      <OTPInput />
      <ResendOptions />
      <ConfirmButton />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    lineHeight: 38.73,
    fontFamily: 'Inter',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  instructionsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  instructionsText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#111',
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  otpLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  otpTimer: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginVertical: 10,
  },
  otpBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpBox: {
    width: 36,
    height: 34,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 12,
    color: '#31313147',
  },
  resendLink: {
    color: '#313131',
  },
  orText: {
    fontSize: 12,
    color: '#31313147',
    marginVertical: 10,
  },
  changeNumberText: {
    fontSize: 12,
    color: '#313131cc',
  },
  confirmButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default App;
