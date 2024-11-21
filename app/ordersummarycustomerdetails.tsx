import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Order Summary</Text>
      <Text style={styles.headerSubtitle}>Review Order Details</Text>
    </View>
  );
};

const OrderSummary = () => {
  return (
    <View style={styles.summaryContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/31x31' }} 
        style={styles.summaryImage} 
      />
      <Text style={styles.summaryAmount}>N123,456.78</Text>
      <Text style={styles.summaryStatus}>Order Status: CANCELLED</Text>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionTitle}>ORDER DETAILS</Text>
      <Text style={styles.detailText}>Order Type: Refill</Text>
      <Text style={styles.detailText}>Capacity: 25.00 kg</Text>
      <Text style={styles.detailText}>Order Date: 25 Sept, 2003 @ 02:00 PM</Text>
      <Text style={styles.detailText}>Distance: 10.3km</Text>
      <Text style={styles.detailText}>Estimated Time: 01 hr 13 min</Text>
      <Text style={styles.detailText}>Payment Status: Paid via Flutterwave</Text>
    </View>
  );
};

const CustomerInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.sectionTitle}>CUSTOMER INFO</Text>
      <Text style={styles.infoText}>Full Name: Emeka, Ahmed Ciraq</Text>
      <Text style={styles.infoText}>Telephone: +01 234 567 890</Text>
      <Text style={styles.infoText}>Address: 100 fake address as provided by customer, including city</Text>
    </View>
  );
};

const DeliveryDetails = () => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionTitle}>DELIVERY DETAILS</Text>
      <Text style={styles.detailText}>Delivery Agent: Full Rider Name (F)</Text>
      <Text style={styles.detailText}>Ride Plate No.: ABC-1234-DD</Text>
      <Text style={styles.detailText}>Telephone: +01 234 567 890</Text>
      <Text style={styles.detailText}>Parent Vendor: Emeka & Sons LPG (Mpape Branch)</Text>
    </View>
  );
};

const ReturnButton = () => {
  return (
    <View style={styles.returnContainer}>
      <Text style={styles.cancelMessage}>You cancelled this order</Text>
      <TouchableOpacity style={styles.returnButton}>
        <Text style={styles.returnButtonText}>RETURN TO DASHBOARD</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <OrderSummary />
      <OrderDetails />
      <CustomerInfo />
      <DeliveryDetails />
      <ReturnButton />
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
  summaryContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryImage: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    marginBottom: 10,
  },
  summaryAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1818',
  },
  summaryStatus: {
    fontSize: 15,
    color: '#ef0909',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#a2a2a2',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 12,
    color: '#111',
    marginBottom: 5,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#111',
    marginBottom: 5,
  },
  returnContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cancelMessage: {
    fontSize: 10,
    color: '#ef0909',
    marginBottom: 10,
  },
  returnButton: {
    backgroundColor: '#4d6ba7',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default App;
