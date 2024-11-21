import React from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/100x100' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Ahmed Peter Hassan</Text>
        <Text style={styles.bankDetails}>123 456 789 WEMA BANK</Text>
        
        <TouchableOpacity style={styles.viewProfileButton}>
          <View style={styles.iconContainer}>
            <Image 
              source={{ uri: 'https://placeholder.pics/svg/24x24' }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.buttonText}>View Profile</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>General Settings</Text>
        
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.settingItem}>
            <View style={styles.iconContainer}>
              <Image 
                source={{ uri: 'https://placeholder.pics/svg/24x24' }}
                style={styles.icon}
              />
            </View>
            <Text style={styles.settingText}>{option.title}</Text>
            {option.hasSwitch ? (
              <Switch 
                value={true}
                trackColor={{ false: '#767577', true: '#0066FF' }}
                thumbColor={'#ffffff'}
              />
            ) : (
              <Text style={styles.chevron}>›</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const settingsOptions = [
  { title: 'Change Password' },
  { title: 'Mode', hasSwitch: true, subtitle: 'Dark & Light' },
  { title: 'Account Verification' },
  { title: 'Sales Offices' },
  { title: 'Dispatch Vehicles' },
  { title: 'Withdraw Fund' },
  { title: 'Support' },
  { title: 'Notifications' },
  { title: 'Log Out' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
    fontFamily: 'Inter',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  bankDetails: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    fontFamily: 'Inter',
  },
  viewProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    padding: 12,
    borderRadius: 8,
    width: '90%',
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF20',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
    fontFamily: 'Inter',
  },
  settingsSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000000',
    fontFamily: 'Inter',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#000000',
    fontFamily: 'Inter',
  },
  chevron: {
    fontSize: 20,
    color: '#666666',
    marginLeft: 8,
  }
});

export default ProfileScreen;
