import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileTitle}>Profile</Text>
        <Text style={styles.subtitle}>View & Manage Delivery Agents of Dunes</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.editAccountContainer}>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/17x17' }}
          style={styles.editIcon}
        />
        <Text style={styles.editAccountText}>Edit Account</Text>
      </View>

      <Image
        source={{ uri: 'https://placeholder.pics/svg/131x131' }}
        style={styles.mainProfileImage}
      />

      <Text style={styles.name}>Ahmed Emeka(M)</Text>
      <Text style={styles.bankDetails}>1234567890 (WEMA BANK)</Text>

      <View style={styles.infoContainer}>
        {infoItems.map((item, index) => (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.infoLabel}>{item.label}</Text>
            <Text style={[styles.infoValue, item.color && { color: item.color }]}>{item.value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.deactivateButton}>
        <Text style={styles.deactivateText}>Deactivate Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const infoItems = [
  { label: 'Parent Group', value: 'Emeka & Son LPG Ltd.' },
  { label: 'Branch Assigned', value: 'Madalla II Branch' },
  { label: 'Amount Generated', value: 'N123,456,789.00' },
  { label: 'Total Orders', value: '211/305' },
  { label: 'Account Status', value: 'Verified', color: '#50ac3d' },
  { label: 'Dispatch Vehicle', value: 'Mercedes 2003 (ABC-123-BB)' },
  { label: 'Member Since', value: '25 Sept, 2003 @ 02:00 PM' },
  { label: 'Telephone', value: '09 123 456 7890' },
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
  profileTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  editAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  editIcon: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  editAccountText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#50ac3d',
    fontFamily: 'Inter',
  },
  mainProfileImage: {
    width: 131,
    height: 131,
    borderRadius: 65.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'Inter',
  },
  bankDetails: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  infoValue: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  deactivateButton: {
    alignSelf: 'center',
  },
  deactivateText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#ff0101d4',
    fontFamily: 'Inter',
  },
});

export default ProfileInformation;
