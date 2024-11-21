import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Order History</Text>
      <Text style={styles.headerSubtitle}>See all transactions and orders</Text>
      <View style={styles.notificationBadge}>
        <Text style={styles.notificationText}>103</Text>
      </View>
    </View>
  );
};

const TabNavigation = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.activeTabText}>Pending</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Cancelled</Text>
      </TouchableOpacity>
    </View>
  );
};

const OrderCard = ({ refill, date, distance, duration, amount, status }) => {
  return (
    <View style={styles.orderCardContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/31x31' }} 
        style={styles.orderImage} 
      />
      <View style={styles.orderInfo}>
        <Text style={styles.orderRefill}>{refill}</Text>
        <Text style={styles.orderDate}>{date}</Text>
        <Text style={styles.orderDistance}>{distance}</Text>
        <Text style={styles.orderDuration}>{duration}</Text>
      </View>
      <View style={styles.orderStatus}>
        <Text style={styles.orderAmount}>{amount}</Text>
        <Text style={styles.orderStatusText}>{status}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <TabNavigation />
      <OrderCard 
        refill="50.00kg LPG Refill" 
        date="25 Sept, 2003 @ 02:00 PM" 
        distance="10.3km" 
        duration="1hr 13min" 
        amount="N123,456.78" 
        status="Order Status: Completed" 
      />
      <OrderCard 
        refill="25.00kg LPG Refill" 
        date="25 Sept, 2003 @ 02:00 PM" 
        distance="10.3km" 
        duration="1hr 13min" 
        amount="N123,456.78" 
        status="Order Status: Cancelled" 
      />
      {/* Add more OrderCards as needed */}
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
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
    marginBottom: 10,
  },
  notificationBadge: {
    backgroundColor: '#ff0000',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
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
  orderCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  orderImage: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    marginRight: 10,
  },
  orderInfo: {
    flex: 1,
  },
  orderRefill: {
    fontSize: 17,
    fontWeight: '800',
    color: '#a2a2a2',
  },
  orderDate: {
    fontSize: 15,
    color: '#111',
  },
  orderDistance: {
    fontSize: 15,
    color: '#111',
  },
  orderDuration: {
    fontSize: 15,
    color: '#111',
  },
  orderStatus: {
    alignItems: 'flex-end',
  },
  orderAmount: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1818',
  },
  orderStatusText: {
    fontSize: 15,
    color: '#50ac3d',
  },
});

export default App;
