import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {TimeUtil} from '../Utils';
const _renderTopView = ({
  trackName,
  artworkUrl,
  collectionName,
  artistName,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri: artworkUrl}} style={{flex: 1, aspectRatio: 1}} />
      <View style={{marginStart: 14, flex: 3}}>
        <Text numberOfLines={1} style={styles.title}>
          {trackName}
        </Text>
        <Text numberOfLines={1} style={[styles.subtitle]}>
          {artistName}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.subtitle]}>
          {collectionName}
        </Text>
      </View>
    </View>
  );
};
const Header = ({title, subtitle}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={[styles.title, styles.subtitle, styles.centerText]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, styles.centerText, styles.subtitle]}>
        {subtitle}
      </Text>
    </View>
  );
};
const SongDetail = ({route}) => {
  const {
    trackName,
    artworkUrl100: artworkUrl,
    artistName,
    collectionName,
    collectionPrice,
    trackPrice,
    currency,
    releaseDate,
    trackNumber,
    trackTimeMillis,
    primaryGenreName,
    trackCount,
  } = route.params?.track || {};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {_renderTopView({trackName, artworkUrl, artistName, collectionName})}
      <View style={styles.section}>
        <Header title="GENRE" subtitle={primaryGenreName} />
        <Header
          title="PLAYBACK TIME"
          subtitle={`${Math.round(
            TimeUtil.convertMillisToMinute(trackTimeMillis),
          )}m`}
        />
      </View>
      <View style={styles.section}>
        <Header
          title="COLLECTION PRICE"
          subtitle={`${collectionPrice}  ${currency}`}
        />
        <Header title="TRACK PRICE" subtitle={`${trackPrice}  ${currency}`} />
      </View>
      <View style={styles.section}>
        <Header title="RELEASED ON" subtitle={releaseDate} />
      </View>
      <View style={styles.section}>
        <Header title="TRACK NUMBER" subtitle={trackNumber} />
        <Header title="TOTAL TRACKS" subtitle={trackCount} />
      </View>
    </ScrollView>
  );
};

export default SongDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 5,
    flexDirection: 'column',
  },
  section: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00111110',
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 0.5,
  },
  title: {
    fontSize: 24,
    flex: 1,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    flex: 1,
  },
  centerText: {
    textAlign: 'center',
    lineHeight: 30,
    color: 'black',
  },
});
