import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
        <Text style={styles.subtitle}>Add a New Rider/Delivery Agent</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Image
        source={{ uri: 'https://placeholder.pics/svg/115x112' }}
        style={styles.mainProfileImage}
      />

      <View style={styles.form}>
        {formFields.map((field, index) => (
          <View key={index} style={styles.formField}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#31313147"
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const formFields = [
  { label: 'Full Name', placeholder: 'e.g Mpape LPG Station' },
  { label: 'Telephone', placeholder: '09 123 456 789' },
  { label: 'Gender', placeholder: 'Select' },
  { label: 'Address', placeholder: 'e.g 100 main street, sokale' },
  { label: 'State', placeholder: 'Select' },
  { label: 'Identification Type', placeholder: "Driver's Licence" },
  { label: 'License ID', placeholder: '1234567890' },
  { label: 'Expiry Date', placeholder: '23/10/2024' },
  { label: 'Assign To', placeholder: 'Mercedes Truck (VB-123-ABB )' },
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
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  mainProfileImage: {
    width: 115,
    height: 112,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  formField: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    fontSize: 12,
    fontFamily: 'Inter',
  },
  updateButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
  },
  updateButtonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default EditProfile;
