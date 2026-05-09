// Cassette Player — Material UI theme
// GPL v3 fork of Navidrome — cassette: Patch 001
//
// Design tokens: apps/cassette-player/theme/cassette-theme.css
// The global CSS overrides live there; this file handles the MUI theme
// layer (palette, typography, component defaults) so MUI-generated elements
// (dialogs, inputs, chips, etc.) inherit Cassette's warm-dark palette.

import stylesheet from './CassetteTheme.css.js'

export default {
  themeName: 'Cassette',
  palette: {
    primary: {
      main: '#E87830',       // Cassette orange
      light: '#F09550',
      dark: '#C86020',
      contrastText: '#EDE4D0',
    },
    secondary: {
      main: '#A89878',       // cs-ink2
      contrastText: '#EDE4D0',
    },
    type: 'dark',
    background: {
      default: '#1C1914',    // cs-bg
      paper: '#221F19',      // cs-bg2
    },
    text: {
      primary: '#EDE4D0',    // cs-ink
      secondary: '#A89878',  // cs-ink2
      disabled: '#6E6050',   // cs-ink3
    },
    divider: '#342E24',      // cs-bg4
    error: {
      main: '#D42E2E',
    },
    warning: {
      main: '#D4A020',       // cs-amber
    },
    success: {
      main: '#38A038',       // cs-green
    },
    info: {
      main: '#2878D0',       // cs-blue
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: "'Barlow Condensed', sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        code: {
          fontFamily: "'DM Mono', monospace",
        },
      },
    },
    MuiPaper: {
      root: {
        color: '#EDE4D0',
        backgroundColor: '#221F19',
        backgroundImage: 'none',
      },
      elevation1: { boxShadow: '0 1px 3px rgba(28, 20, 10, 0.5)' },
      elevation2: { boxShadow: '0 2px 8px rgba(28, 20, 10, 0.6)' },
    },
    MuiButton: {
      textPrimary: {
        color: '#E87830',
      },
      textSecondary: {
        color: '#A89878',
      },
      containedPrimary: {
        background: 'linear-gradient(160deg, #F09550 0%, #E87830 50%, #C86020 100%)',
        color: '#EDE4D0',
        '&:hover': {
          background: 'linear-gradient(160deg, #F8A060 0%, #F09040 50%, #D07028 100%)',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: '#A89878',
        '&:hover': {
          color: '#E87830',
          backgroundColor: 'rgba(232, 120, 48, 0.1)',
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: '#2A261E',
        color: '#A89878',
        border: '1px solid #342E24',
      },
      clickable: {
        '&:hover': {
          backgroundColor: '#342E24',
          color: '#E87830',
        },
      },
    },
    MuiFormGroup: {
      root: {
        color: '#EDE4D0',
      },
    },
    MuiInputBase: {
      root: {
        color: '#EDE4D0',
        backgroundColor: '#2A261E',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#342E24',
      },
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#6E6050',
        },
        '&$focused $notchedOutline': {
          borderColor: '#E87830',
          borderWidth: 1,
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: '#6E6050',
        '&$focused': {
          color: '#E87830',
        },
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#221F19',
      },
    },
    MuiTableCell: {
      root: {
        color: '#EDE4D0',
        borderBottomColor: '#342E24',
      },
      head: {
        color: '#6E6050',
        backgroundColor: '#221F19',
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
    },
    MuiTableRow: {
      root: {
        '&:hover': {
          backgroundColor: '#2A261E !important',
        },
      },
    },
    MuiMenuItem: {
      root: {
        color: '#EDE4D0',
        '&:hover': {
          backgroundColor: '#342E24',
          color: '#E87830',
        },
        '&$selected': {
          backgroundColor: 'rgba(232, 120, 48, 0.12)',
          color: '#E87830',
        },
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: '#2A261E',
        border: '1px solid #342E24',
      },
    },
    MuiListItemButton: {
      root: {
        '&:hover': {
          backgroundColor: '#2A261E',
          color: '#EDE4D0',
        },
        '&$selected': {
          backgroundColor: 'rgba(232, 120, 48, 0.12)',
          color: '#E87830',
          borderLeft: '2px solid #E87830',
        },
      },
    },
    MuiSwitch: {
      colorSecondary: {
        '&$checked': {
          color: '#E87830',
        },
        '&$checked + $track': {
          backgroundColor: '#E87830',
        },
      },
    },
    MuiSlider: {
      thumb: {
        color: '#E87830',
        boxShadow: '0 0 6px rgba(232, 120, 48, 0.8), 0 0 12px rgba(232, 120, 48, 0.4)',
      },
      track: {
        color: '#E87830',
      },
      rail: {
        color: '#342E24',
      },
    },
    MuiRating: {
      iconFilled: { color: '#D4A020' },
      iconHover: { color: '#E87830' },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#E87830',
        height: 2,
      },
    },
    MuiTab: {
      root: {
        color: '#6E6050',
        '&$selected': {
          color: '#E87830',
        },
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#221F19',
        border: '1px solid #342E24',
      },
    },
    MuiDialogTitle: {
      root: {
        color: '#EDE4D0',
        borderBottom: '1px solid #342E24',
      },
    },
    NDLogin: {
      systemNameLink: {
        color: '#E87830',
      },
      icon: {},
      welcome: {
        color: '#EDE4D0',
      },
      card: {
        minWidth: 300,
        backgroundColor: '#221F19ed',
        border: '1px solid #342E24',
        boxShadow: '0 8px 40px rgba(28, 20, 10, 0.7)',
      },
      avatar: {},
      button: {
        background: 'linear-gradient(160deg, #F09550 0%, #E87830 50%, #C86020 100%)',
        boxShadow: '0 0 12px rgba(232, 120, 48, 0.4), 0 2px 8px rgba(28, 20, 10, 0.5)',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background:
          'linear-gradient(to bottom, rgba(28, 25, 20, 0.72), rgb(28, 25, 20)) !important',
      },
    },
  },
  typography: {
    fontFamily: "'Barlow Condensed', sans-serif",
    h1: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    h2: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    h3: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    h4: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    h5: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    h6: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' },
    subtitle1: { fontFamily: "'Barlow Condensed', sans-serif" },
    subtitle2: { fontFamily: "'Barlow Condensed', sans-serif", color: '#A89878' },
    body1: { fontFamily: "'Barlow Condensed', sans-serif" },
    body2: { fontFamily: "'Barlow Condensed', sans-serif", color: '#A89878' },
    button: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' },
    caption: { fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.05em', color: '#6E6050' },
    overline: { fontFamily: "'DM Mono', monospace", letterSpacing: '0.1em' },
  },
  player: {
    theme: 'dark',
    stylesheet,
  },
}
