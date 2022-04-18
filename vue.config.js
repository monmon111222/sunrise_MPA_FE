const path = require('path');
const glob = require('glob');
const getPagesEntry = () => {
    const entry = {};

    // 搜尋專案內 /src/pages/ 所有的 HTML 檔案 
    const fileNameArr = glob.sync(path.join(__dirname, './src/pages/*/*.js')).map(p => p.split('/src/pages/')[1]).map(p => p.replace(p.substring(0,p.indexOf('/')+1), '')).map(p => p.replace('.js', ''));
    
    // 建立 pages 物件內容，存放到 entry 物件內 
    fileNameArr.forEach(e => {
        entry[e] = {
            entry: `./src/pages/${e}/${e}.js`,
            filename: `${e}.html`,
            title: `${e}`,
        };
    });
    return entry;
};

module.exports = {
  pages: getPagesEntry(),
  publicPath: "./"
}
