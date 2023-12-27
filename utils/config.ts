import MOCKAPI from '../mocks/dataApi.json'
const API_KEY= 'O9y1hGntMCUhQpXsQpMawrcXsgxQvW6FMtTaDRYQ'
const URL_BASE_APOD= 'https://api.nasa.gov/planetary/apod?api_key='
const URL_REQ_APOD= `${URL_BASE_APOD}${API_KEY}`

export {
  API_KEY,
  URL_BASE_APOD,
  URL_REQ_APOD,
  MOCKAPI
}