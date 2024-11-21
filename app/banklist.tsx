import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AllBanks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Bank List</Text>
        <Text style={styles.subtitle}>
          View and Manage all Approved Bank Accounts
          <Text style={styles.addBankLink}> Add New Bank?</Text>
        </Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.statusTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Approved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Not Approved</Text>
        </TouchableOpacity>
      </View>

      {bankData.map((bank, index) => (
        <View key={index} style={styles.bankCard}>
          <View style={styles.bankIcon}>
            <Text style={[styles.bankIconText, { color: bank.iconColor }]}>{bank.icon}</Text>
          </View>
          <View style={styles.bankDetails}>
            <Text style={styles.bankName}>{bank.name}</Text>
            <Text style={styles.bankAccount}>{bank.account}</Text>
            <Text style={styles.bank}>{bank.bank}</Text>
          </View>
          <View style={styles.bankActions}>
            <Text style={[styles.bankStatus, { color: bank.statusColor }]}>{bank.status}</Text>
            <Text style={styles.removeLink}>Remove?</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const bankData = [
  {
    icon: 'G',
    iconColor: '#4d6ba7',
    name: 'Ahmed Peter Hassan',
    account: '123 456 789 012',
    bank: 'GBT Bank',
    status: 'Approved',
    statusColor: '#50ac3d',
  },
  {
    icon: 'F',
    iconColor: '#e4cf10',
    name: 'Peter Hassan Ahmed',
    account: '098 156 192 127',
    bank: 'Fedelity Bank Plc',
    status: 'Approved',
    statusColor: '#50ac3d',
  },
  {
    icon: 'O',
    iconColor: '#7ed958',
    name: 'Hassan Ahmed Peter',
    account: '123 564 876 102',
    bank: 'Opay',
    status: 'Approved',
    statusColor: '#50ac3d',
  },
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
    fontFamily: 'Manrope',
    marginBottom: 10,
    textAlign: 'center',
  },
  addBankLink: {
    color: '#4d6ba7',
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  statusTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activeTab: {
    backgroundColor: '#3b5998',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeTabText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  inactiveTab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  inactiveTabText: {
    color: '#111010d4',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  bankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bankIcon: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  bankIconText: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Manrope',
  },
  bankDetails: {
    flex: 1,
  },
  bankName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  bankAccount: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  bank: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  bankActions: {
    alignItems: 'flex-end',
  },
  bankStatus: {
    fontSize: 9,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  removeLink: {
    fontSize: 10,
    fontWeight: '500',
    color: '#cb0404d4',
    fontFamily: 'Inter',
  },
});

export default AllBanks;
