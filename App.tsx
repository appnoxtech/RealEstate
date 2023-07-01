

// import Login from './src/component/auth/Login';
// import React from 'react'
// import SplashScreen from './src/component/common/screens/OnBoarding/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthRoutes from './src/routes/unAuthRoutes';
// import OnBoarding from './src/component/common/screens/OnBoarding/Onboarding';



const App = () => {
  return (
    // <SplashScreen />
    <NavigationContainer>
     <UnAuthRoutes />
     
    </NavigationContainer>
  )
}

export default App

