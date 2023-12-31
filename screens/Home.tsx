import React, { useEffect, useState } from 'react'
import { View, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native'
import { Header, TodayApod } from '../src/components'
import { getApod } from '../services/fetchAPOD'
import { apiApodError, apiApodResponse } from '../types/types';
import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'
import ListTodayApod from '../src/components/ListTodayApod';

function Home() {
  const [newsApod, setNewsApod] = useState<apiApodResponse>()
  const [error, setError] = useState<apiApodError>()

  const requestNewsApod = async() => {
    try {
      const dataResponse = await getApod()
      if(!Array.isArray(dataResponse)){
        setError({
          message: "undefined"
        })
        return setNewsApod(dataResponse)
      }
    } catch (error) {
      if(error instanceof Response) {
        const errorData : apiApodError = await error.json()
        return setError(errorData)
      } else {
        return setError({message: 'Error desconocido'})
      }
    }
  }

  useEffect(() => {
    requestNewsApod()
  },[])

  const styles = StyleSheet.create({
    text: {
      color: COLORS.red
    },
    container: {
      backgroundColor: COLORS.black
    }
  })

  return (
    <ScrollView style={ styles.container }>
      <Header/>
      <View>
        { newsApod?.title &&
          <TodayApod 
            { ...newsApod }
          />     
        }
        { error?.message != undefined || 'undefined' &&
          <>
            <Text style={ styles.text }>En estos momentos tenemos algunas dificultades. Volveremos pronto</Text>
          </>
        }
        <ListTodayApod />
      </View>
    </ScrollView>
  )
}

export default Home