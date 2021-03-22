import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {TimeUtil} from '../Utils';

const SongCard = ({
  trackId,
  artworkUrl,
  trackName = 'N/A',
  artistName,
  trackTime = 0,
  onPress,
}) => {
  if (trackTime) {
    trackTime = `${Math.round(TimeUtil.convertMillisToMinute(trackTime))}m`;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress && onPress(trackId);
      }}
      style={styles.container}>
      <Image source={{uri: artworkUrl}} style={styles.artwork} />
      <View style={styles.textsContainer}>
        <Text style={styles.trackName} lineBreakMode="tail" numberOfLines={2}>
          {trackName || 'N/A'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{artistName}</Text>
          <Text style={styles.trackTime}>{trackTime || 'N/A'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SongCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 12,
    flexDirection: 'row',
  },
  textsContainer: {
    flexDirection: 'column',
    marginStart: 10,
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  artwork: {
    backgroundColor: 'red',
    height: 70,
    aspectRatio: 1,
  },
  trackName: {
    fontSize: 18,
  },
  trackTime: {marginStart: 15},
});
