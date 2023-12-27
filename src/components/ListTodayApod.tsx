import { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import { apiApodResponse } from '../../types/types';
import { getApod } from '../../services/fetchAPOD';
import dataApiJson from '../../mocks/dataApi.json'
import { format, sub } from 'date-fns';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    padding: 4,
    marginTop: 24
  },
  containerList: {
    width: '100%'
  },
  item : {
    width: '100%',
    height: 100,
    borderRadius: SIZES.medium,
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    backgroundColor: COLORS.maroonDark,
    marginVertical: SIZES.xSmall,
    padding: 4,
    flexDirection: 'row'
  },
  containerImage: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: SIZES.medium
  },
  containerContent: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  title: {
    color: COLORS.lightWhite,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.medium
  },
  date: {
    color: COLORS.lightWhite,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small
  }
})


function ListTodayApod() {
  const [filterNews, setFilterNews] = useState<apiApodResponse[]>()

  const dateCurrent = new Date()
  const dateCurrentFormatted = format(dateCurrent, 'yyyy-MM-dd')
  const dateSevenDaysAgo = format(sub(dateCurrent, { days: 5} ), 'yyyy-MM-dd')
  console.log(dateCurrentFormatted)
  console.log(dateSevenDaysAgo)
  const urlParams=`&start_date=${dateSevenDaysAgo}&end_date=${dateCurrentFormatted}`
  console.log(urlParams)

  useEffect(() => {
    const dataFilterNews = async() => {
      console.log('fetching ListTodayApod')
      const dataResponse = await getApod(urlParams)
      console.log(dataResponse)
      if(Array.isArray(dataResponse)) {
        setFilterNews(dataResponse)
      }
    }

    dataFilterNews()
  },[])

  console.log({ filterNews })


  return (
    <ScrollView 
      style={styles.container}
    >
      <FlatList 
        style={ styles.containerList }
        scrollEnabled={ false }
        data={filterNews}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.item}>
              <View style={styles.containerImage}>
                <Image 
                  source={ {uri: item.url }}
                  style={ styles.image} 
                />
              </View>
              <View style={ styles.containerContent}>
                <Text 
                  style={styles.title}
                  numberOfLines={2}  
                >{ item.title }</Text>
                <Text style={styles.date}>{ item.date }</Text>
              </View>
            </TouchableOpacity>  
          )
        }}
        keyExtractor={item => item.url}
      />
    </ScrollView>
  )
}

export default ListTodayApod