import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VendorBusinessRegistration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>Business Info</Text>

      <View style={styles.steps}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepLabel}>Business</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepLabel}>Manager</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepNumber}>3</Text>
          <Text style={styles.stepLabel}>Review</Text>
        </View>
      </View>

      <View style={styles.form}>
        {formFields.map((field, index) => (
          <View key={index} style={styles.formField}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#31313147"
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
};

const formFields = [
  { label: 'Business name', placeholder: 'e.g. Hooli LPG Station' },
  { label: 'Email', placeholder: 'e.g. youremail@example.com' },
  { label: 'Telephone', placeholder: '+234 070 123 456 789' },
  { label: 'Address', placeholder: 'e.g 100 main street, sokale' },
  { label: 'State', placeholder: 'Select' },
  { label: 'Select LGA', placeholder: 'Bwari' },
  { label: 'Select City', placeholder: 'Federal Capital Territory' },
  { label: 'Referral Code', placeholder: 'e.g MOH 23409' },
];

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
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Manrope',
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    lineHeight: 33,
    fontSize: 14,
    fontWeight: '800',
    color: '#4d6ba7',
    fontFamily: 'Manrope',
  },
  stepLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#11101066',
    fontFamily: 'Inter',
    marginTop: 5,
  },
  line: {
    width: 75,
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 10,
  },
  form: {
    marginBottom: 20,
  },
  formField: {
    marginBottom: 15,
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
    fontSize: 12,
    fontFamily: 'Inter',
  },
  continueButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
  loginText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Manrope',
  },
  loginLink: {
    color: '#3b5998',
    fontWeight: '600',
  },
});

export default VendorBusinessRegistration;
