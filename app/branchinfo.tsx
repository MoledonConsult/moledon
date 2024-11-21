import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Branch Info</Text>
      <Text style={styles.headerSubtitle}>View & Manage Madalla II Branch</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.headerImage} 
      />
    </View>
  );
};

const ProfileSection = () => {
  return (
    <View style={styles.profileContainer}>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/100x100' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.profileName}>Ciraq Hassan</Text>
      <Text style={styles.profileBank}>1234567890 (WEMA BANK)</Text>
      <TouchableOpacity>
        <Text style={styles.reassignManager}>Reassign Manager</Text>
      </TouchableOpacity>
    </View>
  );
};

const BranchDetails = () => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Parent Group</Text>
        <Text style={styles.detailValue}>Emeka & Son LPG Ltd.</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Branch Name</Text>
        <Text style={styles.detailValue}>Madalla II Branch</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Telephone</Text>
        <Text style={styles.detailValue}>09 123 456 7890</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Branch Email</Text>
        <Text style={styles.detailValue}>email@example.com</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Branch Address</Text>
        <Text style={styles.detailValue}>100 Main Street Madalla II, Korea</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Member Since</Text>
        <Text style={styles.detailValue}>25 Sept, 2003 @ 02:00 PM</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Amount Generated</Text>
        <Text style={styles.detailValue}>N0.00</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Total Orders</Text>
        <Text style={styles.detailValue}>0</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Account Status</Text>
        <Text style={styles.detailValue}>Active</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Reviews</Text>
        <Text style={styles.detailValue}>0</Text>
      </View>
    </View>
  );
};

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.toggleContainer}>
      <Text style={styles.toggleText}>Toggle to Deactivate Branch</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <ProfileSection />
      <BranchDetails />
      <ToggleSwitch />
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    marginBottom: 5,
  },
  profileBank: {
    fontSize: 10,
    color: '#111',
    marginBottom: 5,
  },
  reassignManager: {
    fontSize: 10,
    color: '#ff0101',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 12,
    color: '#111',
  },
  detailValue: {
    fontSize: 12,
    color: '#111',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 10,
    color: '#ff0101',
  },
});

export default App;
