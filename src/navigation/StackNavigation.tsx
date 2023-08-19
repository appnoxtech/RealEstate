import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {storeInterface} from '../interfaces/reducer/store';
import AuthRoute from '../routes/AuthRoutes';
import UnAuthRoutes from '../routes/unAuthRoutes';
import AgentRoute from '../routes/AgentRoute';
import OwnerRoute from '../routes/OwnerRoute';
import {getItem, storeData} from '../hooks/CommonHooks/storageHelper';

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const StackNavigation = () => {
  const {userDetails} = useSelector((state: any) => state.user);
  const {isLogin} = useSelector((store: storeInterface) => store.user);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const hasLaunched = await getItem(HAS_LAUNCHED);
      setIsLoading(false)
      if (hasLaunched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, 'true');
      }
    };
    getData().catch(error => console.log(error));
  }, []);

  if(isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size={'large'} color='#8BC83F' />
      </View>
    )
  }

  if (isLogin) {
    if (userDetails?.role === 'tenant') {
      return <AuthRoute />;
    } else if (userDetails?.role === 'agent') {
      return <AgentRoute />;
    } else if (userDetails?.role === 'owner') {
      return <OwnerRoute />;
    }
  } else {
    return <UnAuthRoutes hasLaunched={hasLaunched} />;
  }
};

export default StackNavigation;

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
