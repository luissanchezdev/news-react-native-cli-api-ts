const COLORS = {
  primary: '#2B2A4C',
  black: '#000',
  maroonLight: '#950101',
  maroonDark: '#3D0000',
  red: '#e2251c',
  orange: '#EA906C',
  blue: '#1D5D9B',
  blueLight: '#75C2F6',
  yellow: '#F4D160',
  yellowLight: '#FBEEAC',
  gray: '#EEE2DE',
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
}

const FONTS = {
  regular: 'NotoSans-Regular',
  medium: 'NotoSans-Medium',
  semibold: 'NotoSans-SemiBold',
  bold: 'NotoSans-Bold'
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32
}

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  }
}

export { COLORS, FONTS, SIZES, SHADOWS }