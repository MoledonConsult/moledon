import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AllBranches = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Sales Branches</Text>
        <Text style={styles.subtitle}>
          View & Manage Sales Branches For Dunes
          <Text style={styles.newBranchLink}> New Sales Branch?</Text>
        </Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      {branchData.map((branch, index) => (
        <View key={index} style={styles.branchCard}>
          <View style={styles.branchIcon}>
            <Text style={[styles.branchIconText, { color: branch.iconColor }]}>{branch.icon}</Text>
          </View>
          <View style={styles.branchDetails}>
            <Text style={styles.branchName}>{branch.name}</Text>
            <Text style={styles.branchOffice}>{branch.office}</Text>
            <Text style={styles.branchStats}>
              {branch.orders} Orders | {branch.sales} Sales
            </Text>
          </View>
          <View style={styles.branchActions}>
            <Text style={styles.branchAmount}>{branch.amount}</Text>
            <Text style={[styles.branchStatus, { color: branch.statusColor }]}>{branch.status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const branchData = [
  {
    icon: 'C',
    iconColor: '#4d6ba7',
    name: 'Ciraq Hassan',
    office: 'Kubwa I Sales Office',
    orders: '103',
    sales: '299',
    amount: 'N123,456.78',
    status: 'Active',
    statusColor: '#50ac3d',
  },
  {
    icon: 'C',
    iconColor: '#ef0909',
    name: 'Ciraq Hassan',
    office: 'Kubwa I Sales Office',
    orders: '103',
    sales: '299',
    amount: 'N123,456.78',
    status: 'Not Active',
    statusColor: '#ef0909',
  },
  {
    icon: 'C',
    iconColor: '#7ed958',
    name: 'Ciraq Hassan',
    office: 'Kubwa I Sales Office',
    orders: '103',
    sales: '299',
    amount: 'N123,456.78',
    status: 'Active',
    statusColor: '#50ac3d',
  },
  {
    icon: 'C',
    iconColor: '#e4cf10',
    name: 'Ciraq Hassan',
    office: 'Kubwa I Sales Office',
    orders: '103',
    sales: '299',
    amount: 'N123,456.78',
    status: 'Active',
    statusColor: '#50ac3d',
  },
  {
    icon: 'C',
    iconColor: '#4d6ba7',
    name: 'Ciraq Hassan',
    office: 'Kubwa I Sales Office',
    orders: '103',
    sales: '299',
    amount: 'N123,456.78',
    status: 'Active',
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
  newBranchLink: {
    color: '#4d6ba7',
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  branchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  branchIcon: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  branchIconText: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Manrope',
  },
  branchDetails: {
    flex: 1,
  },
  branchName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  branchOffice: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  branchStats: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  branchActions: {
    alignItems: 'flex-end',
  },
  branchAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1818',
    fontFamily: 'Manrope',
  },
  branchStatus: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});

export default AllBranches;
