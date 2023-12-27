import { apiApodResponse, apiApodResponseOriginal } from '../types/types'
import dataApiPod  from '../mocks/dataApiApod.json'
import { URL_REQ_APOD } from '../utils/config'

// Get Astronomy Photo of the Day

export const getApod : (urlParams? : string ) => Promise<apiApodResponse | apiApodResponse[]> = async(urlParams? : string) => {
  try {
    // fetch api
    const dataRequest = await fetch(`${ URL_REQ_APOD }${ typeof urlParams != 'undefined' && urlParams?.length > 0 ? urlParams : '' }`)
    const dataResponseOriginal = await dataRequest.json() as apiApodResponseOriginal
    //const dataResponseOriginal = dataApiPod as apiApodResponseOriginal
    let dataResponse : apiApodResponse | apiApodResponse[]

    if(Array.isArray(dataResponseOriginal)){
      dataResponse = dataResponseOriginal.map(item => {
        return {
          copyright: item.copyright,     
          date: item.date,
          description: item.explanation,
          image: item.hdurl,
          title: item.title,
          url: item.url
        }
      })
    } else {
      dataResponse = {
        copyright: dataResponseOriginal.copyright,     
        date: dataResponseOriginal.date,
        description: dataResponseOriginal.explanation,
        image: dataResponseOriginal.hdurl,
        title: dataResponseOriginal.title,
        url: dataResponseOriginal.url
      } 
    }

    return dataResponse
    
  } catch (error) {
    throw new Error("Failed api request");  
  }
}