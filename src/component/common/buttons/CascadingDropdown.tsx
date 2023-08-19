import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';


interface CascadingDropdownProps {}

const CascadingDropdown: React.FC<CascadingDropdownProps> = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Sample data for the dropdowns (Replace it with your own data)
  const countries = ['USA', 'Canada'];
  const states: { [country: string]: string[] } = {
    USA: ['New York', 'California', 'Texas'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
  };
  const cities: { [state: string]: string[] } = {
    'New York': ['New York City', 'Buffalo'],
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Dallas'],
    Ontario: ['Toronto', 'Ottawa'],
    Quebec: ['Montreal', 'Quebec City'],
    'British Columbia': ['Vancouver', 'Victoria'],
  };

  const handleCountryChange = (value: string | null) => {
    setSelectedCountry(value);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (value: string | null) => {
    setSelectedState(value);
    setSelectedCity(null);
  };

  return (
    <View>
      <Text>Country:</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => handleCountryChange(itemValue)}
      >
        <Picker.Item label="Select Country" value={null} />
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country} value={country} />
        ))}
      </Picker>

      {selectedCountry && (
        <>
          <Text>State:</Text>
          <Picker
            selectedValue={selectedState}
            onValueChange={(itemValue) => handleStateChange(itemValue)}
          >
            <Picker.Item label="Select State" value={null} />
            {states[selectedCountry].map((state, index) => (
              <Picker.Item key={index} label={state} value={state} />
            ))}
          </Picker>
        </>
      )}

      {selectedState && (
        <>
          <Text>City:</Text>
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue) => setSelectedCity(itemValue)}
          >
            <Picker.Item label="Select City" value={null} />
            {cities[selectedState].map((city, index) => (
              <Picker.Item key={index} label={city} value={city} />
            ))}
          </Picker>
        </>
      )}
    </View>
  );
};

export default CascadingDropdown;
