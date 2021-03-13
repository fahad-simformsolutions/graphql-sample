import React from 'react';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Drawer from './DrawerNavigator';
import CenterSpinner from '../screens/components/Util/CenterSpinner';

LogBox.ignoreAllLogs(true);

const Main = () => {

  const fetchSession = async () => {
    // fetch session
    const session = await AsyncStorage.getItem('@todo-graphql:session');
    const sessionObj = JSON.parse(session);
    const { token, id } = sessionObj;
  }

  React.useEffect(() => {
    fetchSession();
  }, [])

  return <Drawer />
}

export default Main;