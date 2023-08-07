import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {storeInterface} from '../interfaces/reducer/store';
import AuthRoute from '../routes/AuthRoutes';
import UnAuthRoutes from '../routes/unAuthRoutes';
import AgentRoute from '../routes/AgentRoute';
import OwnerRoute from '../routes/OwnerRoute';

const StackNavigation = () => {
  const {userDetails} = useSelector((state: any) => state.user);

  
  const {isLogin} = useSelector((store: storeInterface) => store.user);
  // console.log(userDetails?.role);
  

 
  // console.log('yello');
  // if(true) {
  //   <AuthRoute />
  // } else {
  //   <UnAuthRoutes />
  // }
  if (isLogin) {
    if (userDetails?.role === 'tenant') {
      return <AuthRoute />;
    } else if(userDetails?.role === 'agent') {
      return <AgentRoute />;
    } else if( userDetails?.role === 'owner') {
      return <OwnerRoute />;
    }
  }else {
    return <UnAuthRoutes />
  }
};

export default StackNavigation;
