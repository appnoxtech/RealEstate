import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { storeInterface } from '../interfaces/reducer/store'
import AuthRoute from '../routes/AuthRoutes'
import UnAuthRoutes from '../routes/unAuthRoutes'

const StackNavigation = () => {
  const {isLogin} = useSelector((store: storeInterface) => store.user);
  console.log('isLogin', isLogin);
  
  if(isLogin){
    return <AuthRoute />
  }else {
    return <UnAuthRoutes />
  }
}

export default StackNavigation