export type apiApodResponse = {
  copyright:       string;
  date:            string;
  description:     string;
  image:           string;
  title:           string;
  url:             string;
}

export type apiApodResponseOriginal = {
  copyright:       string;
  date:            string;
  explanation:     string;
  hdurl:           string;
  media_type:      string;
  service_version: string;
  title:           string;
  url:             string;
}

export type apiApodError = {
  message: string
}

export type RootStackParamList = {
  Home:          undefined;
  DetailsScreen: undefined
}