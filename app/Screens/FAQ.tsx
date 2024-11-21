import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

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

      <Text style={styles.sectionTitle}>Account Related Issues</Text>

      {faqTopics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={styles.faqContainer}
          onPress={() => toggleExpand(index)}
        >
          <View style={styles.faqHeader}>
            <Text style={styles.faqTitle}>{topic.title}</Text>
            <Text style={styles.expandIcon}>{expanded === index ? '▲' : '▼'}</Text>
          </View>
          {expanded === index && <Text style={styles.faqContent}>{topic.content}</Text>}
        </TouchableOpacity>
      ))}

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

const faqTopics = [
  {
    title: 'Account Topic 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate leo a dignissim rhoncus. Aenean eu pellentesque felis.',
  },
  { title: 'Account Topic 2', content: '' },
  { title: 'Account Topic 3', content: '' },
  { title: 'Account Topic 4', content: '' },
  { title: 'Account Topic 5', content: '' },
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
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0066FF',
    marginBottom: 10,
  },
  faqContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  expandIcon: {
    fontSize: 12,
    color: '#111010d4',
  },
  faqContent: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  contactContainer: {
    alignItems: 'center',
    marginTop: 20,
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

export default FAQ;
