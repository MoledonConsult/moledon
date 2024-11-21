import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddVehicle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placeholder.pics/svg/15x15' }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>New Vehicle</Text>
        <Text style={styles.subtitle}>Add a New Vehicle</Text>
        <Image
          source={{ uri: 'https://placeholder.pics/svg/62x62' }}
          style={styles.profileImage}
        />
      </View>

      <Image
        source={{ uri: 'https://placeholder.pics/svg/115x112' }}
        style={styles.vehicleImage}
      />
      <Text style={styles.uploadText}>
        Upload a clear photo of the Vehicle showing the License Plate Number
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
        <Text style={styles.addButtonText}>ADD VEHICLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const formFields = [
  { label: 'Type of Vehicle *', placeholder: 'e.g Modified Keke, Truck, Van' },
  { label: 'Model *', placeholder: 'e.g 2003' },
  { label: 'License Plate Number *', placeholder: 'e.g ABC-234-VV' },
  { label: 'Chasis No *', placeholder: 'e.g 12345678900' },
  { label: 'Select Branch *', placeholder: 'Select' },
  { label: 'Select Rider *', placeholder: 'Select' },
  { label: 'Status', placeholder: 'Active' },
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
  vehicleImage: {
    width: 115,
    height: 112,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Manrope',
    textAlign: 'center',
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

export default AddVehicle;
