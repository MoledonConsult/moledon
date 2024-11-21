import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Support = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Yakubu Daniel</Text>
        <Text style={styles.bankDetails}>1234567890 (WEMA BANK)</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>Mohgas Help/Support</Text>
      <Text style={styles.subtitle}>
        Review some FAQs on some issues you might be having
      </Text>

      <View style={styles.helpTopics}>
        {helpTopics.map((topic, index) => (
          <View key={index} style={styles.topicContainer}>
            <Image
              source={{ uri: 'https://placeholder.pics/svg/41x41' }}
              style={styles.topicIcon}
            />
            <View style={styles.topicDetails}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>{topic.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>
          Can't find the answers you are looking for?
        </Text>
        <View style={styles.contactOptions}>
          <View style={styles.contactOption}>
            <Text style={styles.contactLabel}>Support</Text>
            <Text style={styles.contactInfo}>080 123 456 78</Text>
          </View>
          <View style={styles.contactOption}>
            <Text style={styles.contactLabel}>Send a Message</Text>
            <Text style={styles.contactInfo}>info@mohgas.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const helpTopics = [
  {
    title: 'Account Issues',
    description:
      "If you're experiencing problems with accessing your account, such as login difficulties, password reset issues, or account suspension",
  },
  {
    title: 'Delivery Issues',
    description:
      "Having trouble with your order delivery? Whether it's a delayed shipment, wrong address, or a missing package",
  },
  {
    title: 'Wallet Issues',
    description:
      'For any concerns related to your wallet, such as adding funds, balance discrepancies, or difficulties accessing your stored payment information',
  },
  {
    title: 'Transaction Issues',
    description:
      "If you've encountered issues with a transaction, such as failed payments, double charges, or unrecognized transactions",
  },
  {
    title: 'Order Issues',
    description:
      "Whether you received the wrong item, your order is incomplete, or you're facing trouble placing an order",
  },
  {
    title: 'Accessories Issues',
    description:
      'If you have any concerns with accessories, such as missing parts, faulty items, or compatibility problems',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    left: 0,
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  bankDetails: {
    fontSize: 10,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 20,
  },
  helpTopics: {
    marginBottom: 20,
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  topicIcon: {
    width: 41,
    height: 41,
    marginRight: 15,
  },
  topicDetails: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 11,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 5,
  },
  topicDescription: {
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  contactOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  contactOption: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: 'Inter',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default Support;
