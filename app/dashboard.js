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

const WalletBalanceCard = () => {
  return (
    <View style={styles.walletCard}>
      <Text style={styles.walletName}>Mohgas Wallet</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>N123,456.78</Text>
      </View>
      <View style={styles.cardNumberContainer}>
        <Text style={styles.cardNumber}>•••• •••• •••• 2234</Text>
        <Text style={styles.cardHolder}>AHMED PETER (HOOLI LPG)</Text>
      </View>
      <Image
        style={styles.circle}
        source={{ uri: 'https://placeholder.pics/svg/100x100' }}
      />
    </View>
  );
};

const BranchInfoCard = ({ name, office, amount, status, color }) => {
  return (
    <View style={[styles.branchCard, { borderColor: color }]}>  
      <Image
        source={{ uri: 'https://placeholder.pics/svg/40x40' }}
        style={styles.branchAvatar}
      />
      <View style={styles.branchInfoContainer}>
        <Text style={styles.branchName}>{name}</Text>
        <Text style={styles.branchOffice}>{office}</Text>
      </View>
      <View style={styles.branchStatusContainer}>
        <Text style={styles.branchAmount}>{amount}</Text>
        <Text style={styles.branchStatus}>{status}</Text>
      </View>
    </View>
  );
};

const NavigationBar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navIconContainer}>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/50x50' }}
          style={styles.navIcon}
        />
        <Text style={styles.navLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIconContainer}>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/50x50' }}
          style={styles.navIcon}
        />
        <Text style={styles.navLabel}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIconContainer}>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/50x50' }}
          style={styles.navIcon}
        />
        <Text style={styles.navLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <UserProfileHeader />
      <WalletBalanceCard />
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsLabel}>Branch Offices</Text>
          <Text style={styles.statsValue}>19</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsLabel}>Orders Completed</Text>
          <Text style={styles.statsValue}>101/238</Text>
        </View>
      </View>
      <Text style={styles.activeBranchesTitle}>Active Branch(es)</Text>
      <BranchInfoCard name="Ciroq Hassan" office="Kubwa I Sales Office" amount="N123,456.78" status="Active" color="green" />
      <BranchInfoCard name="Ciroq Hassan" office="Kubwa I Sales Office" amount="N123,456.78" status="Active" color="red" />
      <BranchInfoCard name="Ciroq Hassan" office="Kubwa I Sales Office" amount="N123,456.78" status="Active" color="blue" />
      <NavigationBar />
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
  walletCard: {
    backgroundColor: '#4A6FA5',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 190,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  walletName: {
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
    fontSize: 14,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumberContainer: {
    marginTop: 10,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 16,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsBox: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  statsLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  statsValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeBranchesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  branchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: '100%',
    height: 83,
    marginBottom: 10,
    borderWidth: 2,
  },
  branchAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  branchInfoContainer: {
    flex: 1,
  },
  branchName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  branchOffice: {
    fontSize: 14,
    color: '#666',
  },
  branchStatusContainer: {
    alignItems: 'flex-end',
  },
  branchAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  branchStatus: {
    fontSize: 14,
    color: 'green',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 74,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navIconContainer: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default App;

