import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>New Rider</Text>
      <Text style={styles.headerSubtitle}>Add a New Rider/Delivery Agent</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.headerImage} 
      />
    </View>
  );
};

const SuccessIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/45x34' }} 
        style={styles.successIcon} 
      />
    </View>
  );
};

const SuccessMessage = () => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageTitle}>Rider Account Created</Text>
      <Text style={styles.messageText}>
        Boom! Rider has been Added. It will be activated as soon as the admin confirms the information submitted and documents uploaded are true and accurate.
      </Text>
      <Text style={styles.createAnother}>Create Another?</Text>
    </View>
  );
};

const ContinueButton = () => {
  return (
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueButtonText}>CONTINUE</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <SuccessIcon />
      <SuccessMessage />
      <ContinueButton />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    lineHeight: 38.73,
    fontFamily: 'Inter',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#111',
    marginBottom: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successIcon: {
    width: 45,
    height: 34,
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#111',
    marginBottom: 10,
  },
  createAnother: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
  },
  continueButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default App;
