const CracoAntDesignPlugin = require('craco-antd');


module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [

    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#9B27B0',
          '@error-color': '#B00020',
          '@border-radius-base': '5px',
          '@table-border-radius-base': '10px',
          '@font-size-base': '14px',
          '@text-color': 'rgba(0, 0, 0, 0.6)',
          '@table-header-sort-bg': '#fafafa',
          '@table-body-sort-bg': '#fff',
          '@table-body-selected-sort-bg': '#fff',
        },
      },
    },
  ],
};