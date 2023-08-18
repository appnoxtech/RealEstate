import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';

const ChangelogScreen = () => {
  const changelogData = [
    {
      version: '1.0.0',
      date: '2023-08-01',
      changes: [
        'Added crud module in post property all.',
        'Fixed bugs .',
        'Improved performance.',
      ],
    },
  ];

  const renderChangelogItem = ({item}) => (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
       
      <View style={styles.versionContainer}>
      <HeaderWithBackBtn />
        <Text style={styles.version}>{item.version}</Text>
        <Text style={styles.date}>{item.date}</Text>
        {item.changes.map((change: Array<string>, index: string) => (
          <Text key={index} style={styles.change}>
            {change}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={changelogData}
      renderItem={renderChangelogItem}
      keyExtractor={item => item.version}
    />
  );
};

const styles = StyleSheet.create({
  versionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  version: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
    marginBottom: 8,
  },
  change: {
    marginLeft: 8,
  },
});

export default ChangelogScreen;
