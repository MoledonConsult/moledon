import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const VendorsDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Afternoon</Text>
        <Text style={styles.name}>Yakubu Daniel</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Mohgas Wallet</Text>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balance}>NGN 0.00</Text>
        <Text style={styles.walletNumber}>•••• •••• •••• 2234</Text>
        <Text style={styles.walletName}>HOOLI LPG PLANT</Text>
      </View>

      <Image
        source={{ uri: 'https://placeholder.pics/svg/267x231' }}
        style={styles.dashboardImage}
      />

      <View style={styles.notificationContainer}>
        <View style={styles.notificationIcon}>
          <Text style={styles.notificationText}>!</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome Hooli,</Text>
        <TouchableOpacity>
          <Text style={styles.uploadLink}>Upload relevant documents to start selling.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.documentsContainer}>
        <Text style={styles.documentsTitle}>Documents Required</Text>
        <Text style={styles.fileType}>Upload only PDF, JPEG or PNG file type</Text>
        {documents.map((doc, index) => (
          <View key={index} style={styles.documentRow}>
            <Text style={styles.documentName}>{doc.name}</Text>
            <Text style={[styles.documentStatus, { color: doc.statusColor }]}>{doc.status}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const documents = [
  { name: 'CAC Document (Required)', status: 'Not Uploaded', statusColor: '#e4cf10' },
  { name: 'TIN (Required)', status: 'Uploaded', statusColor: '#50ac3d' },
  { name: 'Board of Directors (Optional)', status: 'Uploaded', statusColor: '#50ac3d' },
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
  greeting: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    position: 'absolute',
    right: 0,
  },
  walletContainer: {
    backgroundColor: '#3b5998',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  walletTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#e3e3e3',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  balanceLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#e3e3e3',
    fontFamily: 'Manrope',
  },
  balance: {
    fontSize: 16,
    fontWeight: '400',
    color: '#e8e8e8',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  walletNumber: {
    fontSize: 13,
    fontWeight: '800',
    color: '#e3e3e3',
    fontFamily: 'Manrope',
    letterSpacing: 3.25,
  },
  walletName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#e3e3e3',
    fontFamily: 'Manrope',
  },
  dashboardImage: {
    width: 267,
    height: 231,
    alignSelf: 'center',
    marginBottom: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationIcon: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  notificationText: {
    fontSize: 23,
    fontWeight: '900',
    color: '#4d6ba7',
    fontFamily: 'Inter',
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  uploadLink: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4d6ba7',
    textDecorationLine: 'underline',
    fontFamily: 'Inter',
  },
  documentsContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  documentsTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  fileType: {
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  documentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  documentName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  documentStatus: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});

export default VendorsDashboard;
