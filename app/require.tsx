import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Account</Text>
    </View>
  );
};

const VerificationStatus = () => {
  return (
    <View style={verificationStyles.container}>
      <Image
        style={verificationStyles.image}
        source={{ uri: 'https://placeholder.pics/svg/100x100' }}
      />
      <Text style={verificationStyles.companyName}>Hooli LPG Limited</Text>
      <Text style={verificationStyles.status}>Pending Verification</Text>
    </View>
  );
};

const DocumentPrompt = () => {
  return (
    <View style={promptStyles.container}>
      <Text style={promptStyles.text}>Provide relevant document for verification</Text>
    </View>
  );
};

const SubmitButton = () => {
  return (
    <TouchableOpacity style={buttonStyles.container}>
      <Text style={buttonStyles.text}>SUBMIT</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Header />
      <VerificationStatus />
      <DocumentPrompt />
      <SubmitButton />
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 38.73,
    color: '#313131',
  },
});

const verificationStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 106.75,
    height: 106.75,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: '#111010d4',
  },
  status: {
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 16.5,
    color: '#4d6ba7',
    textAlign: 'center',
  },
});

const promptStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 14.52,
    color: '#111010d4',
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#4d6ba7',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    color: '#fff',
  },
});

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
});

export default App;
