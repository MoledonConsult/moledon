import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddBranch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>New Branch</Text>
        <Text style={styles.subtitle}>Create a New Branch Office</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.sectionTitle}>Add a New Branch Office</Text>
      <Text style={styles.sectionSubtitle}>
        Having more than one business location? Add a new branch and manage sales all in one place.
      </Text>

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

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD BRANCH</Text>
      </TouchableOpacity>
    </View>
  );
};

const formFields = [
  { label: 'Name of Branch', placeholder: 'e.g Mpape LPG Station' },
  { label: 'Branch Email', placeholder: 'e.g dutsebranch@email.com' },
  { label: 'Telephone', placeholder: '+234 70 123 456 789' },
  { label: 'Street', placeholder: 'e.g 100 main street, sokale' },
  { label: 'City', placeholder: 'e.g 100 main street, sokale' },
  { label: 'LGA', placeholder: 'Select' },
  { label: 'State', placeholder: 'Select' },
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
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111010d4',
    fontFamily: 'Manrope',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  formField: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
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
  addButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
});

export default AddBranch;
