import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Good Afternoon</Text>
      <Text style={styles.userName}>Yakubu Daniel</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.userImage} 
      />
    </View>
  );
};

const WalletCard = () => {
  return (
    <View style={styles.walletCard}>
      <Text style={styles.walletTitle}>Mohgas Wallet</Text>
      <Text style={styles.walletBalance}>Total Balance</Text>
      <Text style={styles.walletAmount}>N123,456.78</Text>
      <Text style={styles.walletDetails}>AHMED PETER (ZUBA LPG)</Text>
    </View>
  );
};

const StatsSection = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsBox}>
        <Text style={styles.statsLabel}>Sales Today</Text>
        <Text style={styles.statsValue}>N123,456.78</Text>
      </View>
      <View style={styles.statsBox}>
        <Text style={styles.statsLabel}>Orders Completed</Text>
        <Text style={styles.statsValue}>10/238</Text>
      </View>
    </View>
  );
};

const CurrentDelivery = () => {
  return (
    <View style={styles.deliveryContainer}>
      <Text style={styles.deliveryTitle}>Current Delivery</Text>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View All</Text>
      </TouchableOpacity>
      <View style={styles.deliveryCard}>
        <Image 
          source={{ uri: 'https://placeholder.pics/svg/31x31' }} 
          style={styles.deliveryImage} 
        />
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryName}>Ahmed Peter</Text>
          <Text style={styles.deliveryStatus}>Pending</Text>
          <Text style={styles.deliveryRef}>Order Ref: MOH2489BB</Text>
          <Text style={styles.deliveryAmount}>NGN 25,000.00</Text>
          <Text style={styles.deliveryDetails}>Refill (50Kg LPG) - 110 Allen Avenue, Lagos Island, Nigeria</Text>
          <Text style={styles.deliveryDate}>22 Sept, 2024 @ 11:54PM</Text>
        </View>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <WalletCard />
      <StatsSection />
      <CurrentDelivery />
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
  greeting: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
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
    marginBottom: 20,
  },
  walletTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#e3e3e3',
  },
  walletBalance: {
    fontSize: 18,
    color: '#e3e3e3',
  },
  walletAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e8e8e8',
  },
  walletDetails: {
    fontSize: 13,
    color: '#e3e3e3',
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
    fontSize: 13,
    color: '#e3e3e3',
  },
  statsValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e8e8e8',
  },
  deliveryContainer: {
    marginBottom: 20,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  viewAll: {
    fontSize: 12,
    color: '#4d6ba7',
    textAlign: 'right',
  },
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  deliveryImage: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    marginRight: 10,
  },
  deliveryInfo: {
    flex: 1,
  },
  deliveryName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
  },
  deliveryStatus: {
    fontSize: 15,
    color: '#c1af10',
  },
  deliveryRef: {
    fontSize: 15,
    color: '#111',
  },
  deliveryAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  deliveryDetails: {
    fontSize: 15,
    color: '#111',
  },
  deliveryDate: {
    fontSize: 15,
    color: '#f60e0e',
  },
  detailsButton: {
    backgroundColor: '#4A6FA5',
    borderRadius: 5,
    padding: 5,
  },
  detailsButtonText: {
    color: '#fafafa',
    fontSize: 12,
  },
});

export default App;
