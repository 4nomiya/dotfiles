module.exports = {
  config: {
    updateChannel: 'stable',

    fontSize: 16,
    fontFamily: 'Ubuntu Mono derivative Powerline',
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    lineHeight: 1.2,
    letterSpacing: 0,
    cursorShape: 'BEAM',
    cursorBlink: true,
    css: '',
    termCSS: '',
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '12px 0 16px 16px',

    shell: '',
    shellArgs: ['--login'],
    env: {},
    
    bell: 'SOUND',
    copyOnSelect: false,
    defaultSSHApp: true,
    quickEdit: false,
    macOptionSelectionMode: 'vertical',
    webGLRenderer: true,
  },

  plugins: [
    "hyper-tab-icons",
    "hyper-iceberg"
  ],

  keymaps: {
    'editor:break': 'esc',
  },
};

