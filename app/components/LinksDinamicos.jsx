import { Linking } from 'react-native';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
//import { Linking } from 'react-native';

const ExternalLink = ({ url, children }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 100,
  },
});

export default ExternalLink;
