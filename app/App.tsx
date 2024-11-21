import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ userName }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.greeting}>Good Afternoon</Text>
      <Text style={headerStyles.userName}>{userName}</Text>
      <Image
        style={headerStyles.avatar}
        source={{ uri: 'https://placeholder.pics/svg/50x50' }}
      />
    </View>
  );
};

const WalletCard = () => {
  return (
    <View style={walletStyles.card}>
      <Text style={walletStyles.title}>Mohgas Wallet</Text>
      <View style={walletStyles.balanceContainer}>
        <Text style={walletStyles.balanceLabel}>Total Balance</Text>
        <Text style={walletStyles.balance}>NGN 0.00</Text>
      </View>
      <View style={walletStyles.cardDetailsContainer}>
        <Text style={walletStyles.cardNumber}>•••• •••• •••• 2234</Text>
        <Text style={walletStyles.cardHolder}>HOOLI LPG PLANT</Text>
      </View>
      <Image
        style={walletStyles.circle}
        source={{ uri: 'https://placeholder.pics/svg/100x100' }}
      />
    </View>
  );
};

const WelcomeMessage = () => {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.welcomeText}>Welcome Hooli,</Text>
      <View style={welcomeStyles.uploadPrompt}>
        <Image 
          source={{ uri: 'https://placeholder.pics/svg/100x100' }} 
          style={welcomeStyles.image}
        />
        <Text style={welcomeStyles.promptText}>Please upload your document</Text>
      </View>
    </View>
  );
};

const DocumentStatus = () => {
  return (
    <View style={documentStyles.container}>
      <Text style={documentStyles.text}>Documents Required</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/100x100' }} 
        style={documentStyles.image} 
      />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Header userName="Yakubu Daniel" />
      <WalletCard />
      <WelcomeMessage />
      <DocumentStatus />
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
    color: '#111010d4',
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

const walletStyles = StyleSheet.create({
  card: {
    backgroundColor: '#4A6FA5',
    borderRadius: 10,
    padding: 20,
    width: 369,
    height: 190,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDetailsContainer: {
    marginTop: 10,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 2,
  },
  cardHolder: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
  circle: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 100,
    height: 100,
    opacity: 0.1,
  },
});

const welcomeStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    color: '#111010d4',
    marginBottom: 20,
  },
  uploadPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  promptText: {
    fontSize: 16,
  },
});

const documentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Manrope',
    fontWeight: '800',
    lineHeight: 16.5,
    color: '#a2a2a2',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
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

