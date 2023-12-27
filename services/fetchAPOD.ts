import { apiApodResponse, apiApodResponseOriginal } from '../types/types'
import dataApiPod  from '../mocks/dataApiApod.json'

// Get Astronomy Photo of the Day

export const getApod : (urlReqApod : string) => Promise<apiApodResponse> = async(urlReqApod : string) => {
  try {
    // fetch api
    //const dataRequest = await fetch(`${ urlReqApod }`)
    //const dataResponse = await dataRequest.json() as apiApodResponse
    const dataResponseOriginal = dataApiPod as apiApodResponseOriginal
    console.log({ dataResponseOriginal })
    console.log('ejecutandose en Home')
    const dataResponse : apiApodResponse = {
      copyright: dataResponseOriginal.copyright,     
      date: dataResponseOriginal.date,
      description: dataResponseOriginal.explanation,
      image: dataResponseOriginal.hdurl,
      title: dataResponseOriginal.title,
      url: dataResponseOriginal.url
    } 

    return dataResponse
    
  } catch (error) {
    throw new Error("Failed api request");  
  }
}