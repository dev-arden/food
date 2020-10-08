import React, {useState}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  //results == businesses, restaurants 

  const searchApi = async() => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
        //세컨드 알규멘트인 params를 넣음으로써 '/search?limit=50'이렇게 됨
      }
    });
    setResults(response.data.businesses);
  };

  return(
    <View>
      <SearchBar 
        term={term} 
        onTermChange = {setTerm}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;