import {StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {storeInterface} from '../interfaces/reducer/store';
import AuthRoute from '../routes/AuthRoutes';
import UnAuthRoutes from '../routes/unAuthRoutes';
import AgentRoute from '../routes/AgentRoute';
import OwnerRoute from '../routes/OwnerRoute';


const HAS_LAUNCHED = 'HAS_LAUNCHED';

const StackNavigation = () => {
  const {userDetails} = useSelector((state: any) => state.user);
  const {isLogin} = useSelector((store: storeInterface) => store.user);

  if (isLogin) {
    if (userDetails?.role === 'tenant') {
      return <AuthRoute />;
    } else if (userDetails?.role === 'agent') {
      return <AgentRoute />;
    } else if (userDetails?.role === 'owner') {
      return <OwnerRoute />;
    }
  } else {
    return <UnAuthRoutes />;
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
