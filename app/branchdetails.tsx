import React from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const BranchDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Branch Info</Text>
        <Text style={styles.subtitle}>View & Manage Madalla II Branch</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Image
        source={{ uri: 'https://placeholder.pics/svg/131x131' }}
        style={styles.mainProfileImage}
      />

      <Text style={styles.name}>Ciraq Hassan</Text>
      <Text style={styles.bankDetails}>1234567890 (WEMA BANK)</Text>

      <View style={styles.infoContainer}>
        {infoItems.map((item, index) => (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.infoLabel}>{item.label}</Text>
            <Text style={[styles.infoValue, item.color && { color: item.color }]}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Toggle to Deactivate Branch</Text>
        <Switch value={true} trackColor={{ false: '#767577', true: '#50ac3d' }} />
      </View>
    </View>
  );
};

const infoItems = [
  { label: 'Parent Group', value: 'Emeka & Son LPG Ltd.' },
  { label: 'Branch Name', value: 'Madalla II Branch' },
  { label: 'Telephone', value: '09 123 456 7890' },
  { label: 'Branch Email', value: 'email@example.com' },
  { label: 'Branch Address', value: '100 Main Street Madalla II, Korea' },
  { label: 'Member Since', value: '25 Sept, 2003 @ 02:00 PM' },
  { label: 'Amount Generated', value: 'N0.00' },
  { label: 'Total Orders', value: '0' },
  { label: 'Account Status', value: 'Active', color: '#50ac3d' },
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
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
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
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ff0101d4',
    fontFamily: 'Inter',
  },
});

export default BranchDetails;
