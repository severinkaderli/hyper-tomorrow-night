exports.decorateConfig = config => {
  config.cursorColor = "rgba(255, 255, 255, 0.7)";
  config.foregroundColor = "#C5C8C6";
  config.backgroundColor = "#1D1F21";
  config.borderColor = "#373B41";
  config.colors = [
    "#1D1F21",
    "#CC6666",
    "#B5BD68",
    "#F0C674",
    "#81A2BE",
    "#B57880",
    "#8ABEB7",
    "#282A2E",
    "#969896",
    "#CC6666",
    "#B5BD68",
    "#F0C674",
    "#81A2BE",
    "#B57880",
    "#8ABEB7",
    "#FFFFFF",
    "#C5C8C6"
  ];
   config.css = `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: ${config.foregroundColor};
      }
      .tabs_nav .tabs_title {
        color: ${config.foregroundColor};
      }
  `;  return config;
}
