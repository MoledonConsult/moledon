import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AllDispatchVehicles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Vehicles</Text>
        <Text style={styles.subtitle}>
          View & Manage Vehicles of Emeka & Sons LPG
          <Text style={styles.newVehicleLink}> New Vehicle?</Text>
        </Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.statusTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Assigned</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Not Assigned</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Not in Use</Text>
        </TouchableOpacity>
      </View>

      {vehicleData.map((vehicle, index) => (
        <View key={index} style={styles.vehicleCard}>
          <View style={styles.vehicleIcon}>
            <Text style={[styles.vehicleIconText, { color: vehicle.iconColor }]}>{vehicle.icon}</Text>
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehicleName}>{vehicle.name}</Text>
            <Text style={styles.vehicleModel}>{vehicle.model}</Text>
            <Text style={styles.vehicleDriver}>{vehicle.driver}</Text>
          </View>
          <Text style={[styles.vehicleStatus, { color: vehicle.statusColor }]}>{vehicle.status}</Text>
        </View>
      ))}
    </View>
  );
};

const vehicleData = [
  {
    icon: 'M',
    iconColor: '#4d6ba7',
    name: 'Mercedes Saloon',
    model: '2023 Model | ABC-123-FF',
    driver: 'Emeka Ciraq',
    status: 'Assigned',
    statusColor: '#50ac3d',
  },
  {
    icon: 'P',
    iconColor: '#e4cf10',
    name: 'Peugeot Jeep',
    model: '2004 Model | BAA-345TY',
    driver: 'N/A',
    status: 'Not Assigned',
    statusColor: '#ef0909',
  },
  {
    icon: 'J',
    iconColor: '#7ed958',
    name: 'Jinceng Motorcycle',
    model: '1994 Model | REW-900-BB',
    driver: 'Yusuf Chinonso',
    status: 'Assigned',
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
  newVehicleLink: {
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
  vehicleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  vehicleIcon: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  vehicleIconText: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Manrope',
  },
  vehicleDetails: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  vehicleModel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  vehicleDriver: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  vehicleStatus: {
    fontSize: 9,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});

export default AllDispatchVehicles;
