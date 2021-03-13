import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Drawer from './DrawerNavigator';
import CenterSpinner from '../screens/components/Util/CenterSpinner';
import {ApolloProvider} from 'react-apollo';
import makeApolloClient from '../apollo';

const Main = () => {
  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    // fetch session
    const session = await AsyncStorage.getItem('@todo-graphql:session');
    const { token, id } = JSON.parse(session);
    const apolloClient = makeApolloClient(token);
    setClient(apolloClient);
  }

  React.useEffect(() => {
    fetchSession();
  }, []);

  if (!client) return <CenterSpinner />;

  return (
    <ApolloProvider client={client}>
      <Drawer />
    </ApolloProvider>
  );
}

export default Main;
