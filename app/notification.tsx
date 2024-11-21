import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Notifications = () => {
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

      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>Set Account Notification Preference</Text>

      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>LOGIN ALERTS</Text>
        {loginAlerts.map((alert, index) => (
          <View key={index} style={styles.alertRow}>
            <Text style={styles.alertText}>{alert}</Text>
            <Switch value={true} trackColor={{ false: '#767577', true: '#0066FF' }} />
          </View>
        ))}
      </View>

      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>TRANSACTION ALERTS</Text>
        {transactionAlerts.map((alert, index) => (
          <View key={index} style={styles.alertRow}>
            <Text style={styles.alertText}>{alert}</Text>
            <Switch value={true} trackColor={{ false: '#767577', true: '#0066FF' }} />
          </View>
        ))}
      </View>
    </View>
  );
};

const loginAlerts = ['Email', 'SMS'];
const transactionAlerts = ['WhatsApp', 'Push Notification', 'Email'];

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
    fontSize: 11,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 20,
  },
  alertContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  alertTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  alertRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  alertText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
});

export default Notifications;
