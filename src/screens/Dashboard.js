import React, {useEffect, useState, useCallback} from 'react';
import {Alert, FlatList} from 'react-native';
import {SongCard} from '../components';
import {APIService} from '../services';
import {useLoader} from '.';
import {RouteConstants} from '../constants';

export default function Dashboard({navigation}) {
  const [songs, setSongs] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const {setLoading} = useLoader();
  const _getSongs = useCallback(() => {
    setFetching(true);
    setLoading(true);
    APIService.getAllSongs()
      .then((data) => {
        setFetching(false);
        setLoading(false);
        if (data) {
          setSongs(data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setFetching(false);
        Alert.alert('Error', err?.message ?? 'Something Went Wrong');
      });
  }, [songs]);

  const _onSongItemPressed = useCallback(
    (trackId) => {
      let track = songs.find((item) => item.trackId == trackId);
      if (track) {
        navigation.navigate(RouteConstants.SongDetails, {track});
      }
    },
    [songs],
  );

  const _renderSongItem = useCallback(
    ({item}) => {
      const {
        trackName,
        artworkUrl60,
        artistName,
        trackTimeMillis,
        trackId,
      } = item;
      return (
        <SongCard
          trackId={trackId}
          trackName={trackName}
          artistName={artistName}
          artworkUrl={artworkUrl60}
          trackTime={trackTimeMillis}
          restData={item}
          onPress={_onSongItemPressed}
        />
      );
    },
    [songs],
  );

  useEffect(_getSongs, []);

  return (
    <>
      <FlatList
        data={songs}
        onRefresh={_getSongs}
        refreshing={isFetching}
        keyExtractor={(item) => `${item.trackId}`}
        renderItem={_renderSongItem}
      />
    </>
  );
}
