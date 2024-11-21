import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.userName}>Emeka Awa</Text>
      <Text style={styles.premiumMember}>Premium Member</Text>
      <View style={styles.userIcon}>
        <Text style={styles.userInitial}>E</Text>
      </View>
    </View>
  );
};

const WalletCard = () => {
  return (
    <View style={styles.walletCard}>
      <Text style={styles.walletTitle}>Mohgas Wallet</Text>
      <Text style={styles.walletBalance}>Balance: ₦ 28600</Text>
      <Text style={styles.walletInfo}>
        Get Your Dedicated Moghas Funding Wallet Account 
        <TouchableOpacity>
          <Text style={styles.clickHere}> Click here</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.referrals}>0 Referrals</Text>
    </View>
  );
};

const ActionButtons = () => {
  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Refill</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Accessories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Fund Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmptyOrderMessage = () => {
  return (
    <View style={styles.emptyOrderContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/61x44' }} 
        style={styles.emptyOrderImage} 
      />
      <Text style={styles.emptyOrderText}>
        Ongoing Order Shows Up Here. Click to 
        <Text style={styles.createOrderLink}> Create a New Order?</Text>
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <WalletCard />
      <ActionButtons />
      <EmptyOrderMessage />
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
  welcomeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#313131',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#313131',
  },
  premiumMember: {
    fontSize: 12,
    color: '#313131',
  },
  userIcon: {
    backgroundColor: '#4d6ba7',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  userInitial: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  walletCard: {
    backgroundColor: '#4A6FA5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  walletTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
  walletBalance: {
    fontSize: 16,
    color: '#fff',
  },
  walletInfo: {
    fontSize: 12,
    color: '#fff',
    marginTop: 10,
  },
  clickHere: {
    color: '#ff0',
    fontWeight: '500',
  },
  referrals: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#4A6FA5',
    borderRadius: 50,
    padding: 15,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  emptyOrderContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyOrderImage: {
    width: 61,
    height: 44,
    marginBottom: 10,
  },
  emptyOrderText: {
    fontSize: 12,
    color: '#313131',
    textAlign: 'center',
  },
  createOrderLink: {
    color: '#4d6ba7',
    fontWeight: '700',
  },
});

export default App;
