import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WithdrawalAccountList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.menuDots}>•••</Text>
      </View>

      <Text style={styles.title}>My Local Accounts</Text>
      <Text style={styles.subtitle}>
        See all your withdrawal accounts. <Text style={styles.addNew}>Add New?</Text>
      </Text>

      {accounts.map((account, index) => (
        <View key={index} style={styles.accountContainer}>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/31x31' }}
            style={styles.bankIcon}
          />
          <View style={styles.accountDetails}>
            <Text style={styles.accountName}>{account.name}</Text>
            <Text style={styles.accountNumber}>{account.number}</Text>
            <Text style={styles.bankName}>{account.bank}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.updateText}>Update</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const accounts = [
  {
    name: 'Ahmed Mohammed',
    number: '123 456 789 100',
    bank: 'Zenith Bank',
  },
  {
    name: 'Emeka Ciraq',
    number: '123 456 789 100',
    bank: 'Wema bank',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    width: 15,
    height: 15,
  },
  menuDots: {
    fontSize: 24,
    color: '#313131',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 20,
  },
  addNew: {
    color: '#4d6ba7',
    fontWeight: '700',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bankIcon: {
    width: 31,
    height: 31,
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  bankName: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  updateText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4d6ba7',
    fontFamily: 'Inter',
    fontStyle: 'italic',
  },
});

export default WithdrawalAccountList;
