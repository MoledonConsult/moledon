import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfileHeader = () => {
  return (
    <View style={styles.userProfileContainer}>
      <Text style={styles.greeting}>Good Afternoon</Text>
      <Text style={styles.userName}>Yakubu Daniel</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.userImage} 
      />
    </View>
  );
};

const VerificationTabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.activeTabText}>Upload ID</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Selfie</Text>
      </TouchableOpacity>
    </View>
  );
};

const UploadInstruction = () => {
  return (
    <View style={styles.instructionContainer}>
      <Text style={styles.instructionTitle}>Upload Your ID Card For Verification</Text>
      <View style={styles.uploadPlaceholder}>
        <Text style={styles.uploadText}>Click to select</Text>
      </View>
    </View>
  );
};

const ConfirmButton = () => {
  return (
    <TouchableOpacity style={styles.confirmButton}>
      <Text style={styles.confirmButtonText}>CONFIRM</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <UserProfileHeader />
      <Text style={styles.verificationTitle}>Identity Verification</Text>
      <VerificationTabs />
      <UploadInstruction />
      <ConfirmButton />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    lineHeight: 38.73,
    fontFamily: 'Inter',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  verificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#4A6FA5',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  activeTabText: {
    color: '#fff',
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  uploadPlaceholder: {
    width: 174,
    height: 146,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: '#111',
    opacity: 0.64,
  },
  confirmButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
});

export default App;
