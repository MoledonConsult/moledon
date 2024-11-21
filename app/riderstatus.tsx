import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Riders</Text>
      <Text style={styles.headerSubtitle}>
        View & Manage Dispatchers for Emeka & Sons LPG
        <Text style={styles.newDispatcherLink}> New Dispatcher?</Text>
      </Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.headerImage} 
      />
    </View>
  );
};

const TabNavigation = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.activeTabText}>Approved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Pending</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Declined</Text>
      </TouchableOpacity>
    </View>
  );
};

const RiderCard = ({ name, branch, orders, status, amount }) => {
  return (
    <View style={styles.riderCardContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/33x33' }} 
        style={styles.riderImage} 
      />
      <View style={styles.riderInfo}>
        <Text style={styles.riderName}>{name}</Text>
        <Text style={styles.riderBranch}>{branch}</Text>
        <Text style={styles.riderOrders}>{orders}</Text>
      </View>
      <View style={styles.riderStatus}>
        <Text style={styles.riderAmount}>{amount}</Text>
        <Text style={styles.riderStatusText}>{status}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <TabNavigation />
      <RiderCard 
        name="Thompson Ahmed" 
        branch="Maitama Extension" 
        orders="ABC-1233DD | 03 Orders" 
        status="Assigned" 
        amount="N123,456,789" 
      />
      <RiderCard 
        name="Abubakar Ciraq" 
        branch="Malalla Branch" 
        orders="N/A" 
        status="Not Assigned" 
        amount="N0.00" 
      />
      <RiderCard 
        name="Emeka Bola" 
        branch="Mararaba Branch" 
        orders="ABC-1233DD | 33 Orders" 
        status="Assigned" 
        amount="N123,456,789" 
      />
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
  newDispatcherLink: {
    color: '#4d6ba7',
    fontWeight: '600',
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#4A6FA5',
  },
  tabText: {
    fontSize: 12,
    color: '#111',
  },
  activeTabText: {
    color: '#fff',
  },
  riderCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  riderImage: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    marginRight: 10,
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#a2a2a2',
  },
  riderBranch: {
    fontSize: 15,
    color: '#111',
  },
  riderOrders: {
    fontSize: 15,
    color: '#111',
  },
  riderStatus: {
    alignItems: 'flex-end',
  },
  riderAmount: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  riderStatusText: {
    fontSize: 15,
    color: '#50ac3d',
  },
});

export default App;
