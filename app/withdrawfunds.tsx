import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WithdrawFund = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Withdraw Fund</Text>
        <Text style={styles.subtitle}>Use this window to withdraw Funds</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.sectionTitle}>Initiate Fund Withdrawal</Text>
      <Text style={styles.note}>
        <Text style={styles.noteLabel}>Note:</Text> Only Bank Accounts added in the past 48 hours are approved to be used
      </Text>

      <Text style={styles.balance}>N 240,000.00</Text>
      <Text style={styles.balanceLabel}>Available Balance</Text>

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
    </View>
  );
};

const formFields = [
  { label: 'Enter an Amount to Withdraw', placeholder: '0.00' },
  { label: 'Account Name *', placeholder: 'Ahmed Peter Hassan' },
  { label: 'Account No *', placeholder: '12345678900' },
  { label: 'Bank *', placeholder: 'GTB Bank' },
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
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  note: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 20,
  },
  noteLabel: {
    color: '#ef0909',
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#313131e5',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#ef0909bf',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  formField: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
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

export default WithdrawFund;
