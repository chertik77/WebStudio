export default {
  content: ['./src/**/*.html'],
  theme: {
    screens: {
      sm: { max: '428px' },
      md: '768px',
      lg: '1440px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
    fontSize: {
      sm: [
        '12px',
        {
          lineHeight: '14px',
          letterSpacing: '0.48px',
          fontWeight: '400',
        },
      ],
      '2sm': [
        '12px',
        {
          lineHeight: '24px',
          letterSpacing: '0.48px',
          fontWeight: '400',
        },
      ],
      md: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.32px',
          fontWeight: '400',
        },
      ],
      '2md': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.32px',
          fontWeight: '500',
        },
      ],
      '3md': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.64px',
          fontWeight: '500',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '21px',
          letterSpacing: '0.54px',
          fontWeight: '800',
        },
      ],
      '2lg': [
        '20px',
        {
          lineHeight: '24px',
          letterSpacing: '0.4px',
          fontWeight: '500',
        },
      ],
      xl: [
        '36px',
        {
          lineHeight: '40px',
          letterSpacing: '0.72px',
          fontWeight: '700',
        },
      ],
      '2xl': [
        '56px',
        {
          lineHeight: '60px',
          letterSpacing: '1.12px',
          fontWeight: '700',
        },
      ],
    },
    transitionTimingFunction: {
      linear: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      250: '250ms',
    },
    colors: {
      primaryText: '#434455',
      secondaryText: '#2e2f42',
      thirdText: '#8e8f99',
      lightText: ' #e7e9fc',
      primary: '#4d5ae5',
      secondary: '#404bbf',
      success: '#31d0aa',
      modalBg: '#fcfcfc',
      modalMain: '#f4f4fd',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        lg: '156px',
      },
      screens: {
        sm: '428px',
        md: '768px',
        lg: '1440px',
      },
    },
  },
};
