import React, {FC, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  GetCityDataService,
  GetCountryDataService,
} from '../../../services/properties';
import ExploreButton from '../../common/buttons/ExploreButton';
import { UpdateNewListing } from '../../../redux/reducers/postReducer';
import { useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const DropdownComponent: FC = () => {
  const [countryValue, setCountryValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [stateData, setStatesData] = useState<
    Array<{label: string; value: string}>
  >([]);
  const [cityData, setCityDataValue] = useState<
    Array<{label: string; value: string}>
  >([]);
  const [cityLabel, setCityLabel] = useState('')
  const [stateLabel, setStateLabel] = useState('');
  const [countryLabel, setCountryLabel] = useState('');
  const location = [countryLabel, stateLabel, cityLabel];

  const navigation = useNavigation();

  const dispatch = useDispatch();

  
  // console.log(countryValue,"<------>",countryLabel, stateValue,"<------>",stateLabel, cityValue, "<----->",cityLabel);
  

  useEffect(() => {
    GetStateData();
  }, [countryValue]);

  const GetStateData = async () => {
    try {
      const res = await GetCountryDataService(countryValue);
      const {result} = res.data;
      if (result?.length) {
        const stateDate = result?.map((data: any) => {
          return {
            label: data?.name,
            value: data?.isoCode,
          };
        });
        setStatesData([...stateDate]);
      }
    } catch (error) {
      Alert.alert('', 'Error');
    }
  };

  useEffect(() => {
    const GetCityData = async () => {
      try {
        const res = await GetCityDataService(countryValue, stateValue);
        const {result} = res.data;
        if (result?.length) {
          const cityDate = result?.map((data: any) => {
            return {
              label: data?.name,
              value: data?.stateCode,
            };
          });
          setCityDataValue([...cityDate]);
        }
      } catch (error) {
        Alert.alert('', 'Error');
      }
    };
    if (stateValue) {
      GetCityData();
    }
  }, [stateValue]);

  const countryData = [
    {label: 'India', value: 'IN'},
    {label: 'United States', value: 'US'},
    {label: 'United Kingdom', value: 'UK'},
    {label: 'Indonesia', value: 'ID'},
    {label: 'Norway', value: 'NO'},
    {label: 'South Africa', value: 'ZA'},
    {label: 'Spain', value: 'ES'},
    {label: 'Switzerland', value: 'CH'},
  ];

  const renderLabel = () => {
    if (countryValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select Country
        </Text>
      );
    }
    return null;
  };
  const renderLabel1 = () => {
    if (stateValue || isFocus1) {
      return (
        <Text style={[styles.label, isFocus1 && {color: 'blue'}]}>
          Select State
        </Text>
      );
    }
    return null;
  };
  const renderLabel2 = () => {
    if (cityValue || isFocus2) {
      return (
        <Text style={[styles.label, isFocus2 && {color: 'blue'}]}>
          Select City
        </Text>
      );
    }
    return null;
  };

  const handelSave = () => {
    dispatch(
      UpdateNewListing({
        key: 'location',
        value: location,
      }),
    );
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Country' : '...'}
          searchPlaceholder="Search..."
          value={countryValue}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCountryValue(item.value);
            setCountryLabel(item.label);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        {renderLabel1()}
        <Dropdown
          style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateData}
          search
          labelField="label"
          valueField="value"
          maxHeight={300}
          placeholder={!isFocus1 ? 'Select State' : '...'}
          searchPlaceholder="Search..."
          value={stateValue}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setStateValue(item.value);
            setStateLabel(item.label)
            setIsFocus1(false);
          }}
        />
      </View>
      <View style={styles.container}>
        {renderLabel2()}
        <Dropdown
          style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityData}
          search
          labelField="label"
          valueField="value"
          maxHeight={300}
          placeholder={!isFocus2 ? 'Select City' : '...'}
          searchPlaceholder="Search..."
          value={cityData}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setCityValue(item.value);
            setCityLabel(item.label);
            setIsFocus1(false);
          }}
        />
      </View>


     <View style={{padding: 16}}>
     <ExploreButton onPress={handelSave} title="Save"/>
     </View>
    </SafeAreaView>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
