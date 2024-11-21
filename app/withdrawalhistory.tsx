import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WithdrawalHistory = () => {
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
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Approved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>History</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Withdrawal Histories</Text>
      <Text style={styles.sectionSubtitle}>See all withdrawal histories</Text>

      {historyData.map((history, index) => (
        <View key={index} style={styles.historyCard}>
          <View style={styles.historyIcon}>
            <Text style={[styles.historyIconText, { color: history.iconColor }]}>{history.icon}</Text>
          </View>
          <View style={styles.historyDetails}>
            <Text style={styles.historyName}>{history.name}</Text>
            <Text style={styles.historyAccount}>{history.account}</Text>
            <Text style={styles.historyBank}>{history.bank}</Text>
          </View>
          <View style={styles.historyActions}>
            <Text style={[styles.historyStatus, { color: history.statusColor }]}>{history.status}</Text>
            <Text style={styles.historyAmount}>{history.amount}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const historyData = [
  {
    icon: 'G',
    iconColor: '#4d6ba7',
    name: 'Ahmed Peter Hassan',
    account: '123 456 789 012',
    bank: 'GBT Bank',
    status: 'Successful',
    statusColor: '#50ac3d',
    amount: 'N200.00',
  },
  {
    icon: 'F',
    iconColor: '#e4cf10',
    name: 'Peter Hassan Ahmed',
    account: '098 156 192 127',
    bank: 'Fedelity Bank Plc',
    status: 'Not Successful',
    statusColor: '#ef0909',
    amount: 'N200.00',
  },
  {
    icon: 'O',
    iconColor: '#7ed958',
    name: 'Hassan Ahmed Peter',
    account: '123 564 876 102',
    bank: 'Opay',
    status: 'Successful',
    statusColor: '#50ac3d',
    amount: 'N200.00',
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 20,
  },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  historyIcon: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  historyIconText: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Manrope',
  },
  historyDetails: {
    flex: 1,
  },
  historyName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  historyAccount: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  historyBank: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  historyActions: {
    alignItems: 'flex-end',
  },
  historyStatus: {
    fontSize: 9,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  historyAmount: {
    fontSize: 15,
    fontWeight: '400',
    color: '#313131e5',
    fontFamily: 'Inter',
  },
});

export default WithdrawalHistory;
