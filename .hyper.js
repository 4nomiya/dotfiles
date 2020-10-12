module.exports = {
  config: {
    updateChannel: 'canary',

    fontSize: 16,
    fontFamily: 'Ubuntu Mono derivative Powerline',
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    lineHeight: 1.2,
    letterSpacing: 0,

    cursorColor: 'rgb(170, 178, 192)',
    cursorAccentColor: 'rgb(170, 178, 192)',
    cursorShape: 'BLOCK',
    cursorBlink: true,

    foregroundColor: 'rgb(170, 178, 192)',
    backgroundColor: 'rgb(39, 44, 53)',
    selectionColor: 'rgb(62, 72, 90)',
    borderColor: 'rgb(69, 76, 86)',

    css: '',
    termCSS: '',

    showHamburgerMenu: '',
    showWindowControls: '',

    padding: '12px 16px',

    colors: {
      black: 'rgb(0, 0, 0)',
      red: 'rgb(240, 99, 114)',
      green: 'rgb(139, 198, 111)',
      yellow: 'rgb(235, 191, 111)',
      blue: 'rgb(68, 176, 245)',
      magenta: 'rgb(211, 112, 227)',
      cyan: 'rgb(30, 184, 196)',
      white: 'rgb(99, 106, 116)',
      lightBlack: 'rgb(69, 76, 86)',
      lightRed: 'rgb(240, 99, 114)',
      lightGreen: 'rgb(139, 198, 111)',
      lightYellow: 'rgb(235, 191, 111)',
      lightBlue: 'rgb(68, 176, 245)',
      lightMagenta: 'rgb(211, 112, 227)',
      lightCyan: 'rgb(30, 184, 196)',
      lightWhite: 'rgb(170, 178, 192)',
    },

    shell: '',
    shellArgs: ['--login'],
    env: {},

    bell: 'SOUND',
    // bellSoundURL: 'http://example.com/bell.mp3',

    copyOnSelect: false,
    defaultSSHApp: true,
    quickEdit: false,

    macOptionSelectionMode: 'vertical',

    webGLRenderer: true,
  },

  plugins: [
    "hyper-tab-icons",
  ],

  localPlugins: [],

  keymaps: {},
};
