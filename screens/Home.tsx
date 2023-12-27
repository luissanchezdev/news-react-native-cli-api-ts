import React, { useEffect, useState } from 'react'
import { View, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native'
import { Header } from '../src/components'
import { URL_REQ_APOD } from '../utils/config'
import { getApod } from '../services/fetchAPOD'
import { apiApodError, apiApodResponse } from '../types/types';
import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'

function Home() {
  const [news, setNews] = useState<apiApodResponse[]>([])
  const [error, setError] = useState<apiApodError>()

  const dataRequest = async() => {
    const dataResponse = await getApod(URL_REQ_APOD)
    setNews([...news, dataResponse])
  }

  useEffect(() => {
    dataRequest()
  },[])

  const styles = StyleSheet.create({
    text: {
      color: COLORS.red
    }
  })

  return (
    <ScrollView>
      <Header/>
      <View>
        <FlatList
          data={news}
          renderItem={({item}) => <Text style={ styles.text}>{ item.title }</Text>}
        />
        <TouchableOpacity
          onPress={() => dataRequest()}
        >
          <Text style={ styles.text }>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Home