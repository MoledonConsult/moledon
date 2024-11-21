import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const UserProfileHeader = () => {
  return (
    <View style={styles.userProfileContainer}>
      <Text style={styles.greeting}>Good Afternoon</Text>
      <Text style={styles.userName}>Yakubu Daniel</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.userImage} 
      />
    </View>
  );
};

const ReviewSection = () => {
  return (
    <View style={styles.reviewSectionContainer}>
      <Text style={styles.reviewSectionTitle}>Reviews from Kubwa Branch Office</Text>
      <Text style={styles.reviewSectionSubtitle}>See reviews from customers</Text>
    </View>
  );
};

const ReviewCard = ({ name, date, content }) => {
  return (
    <View style={styles.reviewCardContainer}>
      <Text style={styles.reviewName}>{name}</Text>
      <Text style={styles.reviewContent}>{content}</Text>
      <Text style={styles.reviewDate}>{date}</Text>
      <View style={styles.starsContainer}>
        {/* Placeholder for stars */}
        <Text>⭐⭐⭐⭐☆</Text>
      </View>
    </View>
  );
};

const ResponseInput = () => {
  return (
    <TextInput
      style={styles.responseInput}
      placeholder="Respond to review"
    />
  );
};

const ActionButtons = () => {
  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <UserProfileHeader />
      <ReviewSection />
      <ReviewCard 
        name="Adams Maxwell Matewalle" 
        date="12/03/2024" 
        content="“Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”" 
      />
      <ReviewCard 
        name="Adams Maxwell Matewalle" 
        date="12/03/2024" 
        content="“Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”" 
      />
      <ReviewCard 
        name="Adams Maxwell Matewalle" 
        date="12/03/2024" 
        content="“Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”" 
      />
      <ResponseInput />
      <ActionButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
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
  reviewSectionContainer: {
    marginBottom: 20,
  },
  reviewSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  reviewSectionSubtitle: {
    fontSize: 12,
    color: '#111',
  },
  reviewCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  reviewName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#111',
  },
  reviewContent: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#000',
    marginVertical: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  responseInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#4A6FA5',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    borderColor: '#4A6FA5',
    borderWidth: 1,
  },
  closeButtonText: {
    color: '#4A6FA5',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default App;
