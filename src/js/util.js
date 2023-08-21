// フォント設定
function setLanguage(lang) {
  console.log("function setLanguage: " + lang);
  if(lang === 'ja') {
    document.getElementById('app').style.fontFamily="Noto Sans JP, sans-serif";
  } else if(lang === 'zh') {
    document.getElementById('app').style.fontFamily="Avenir, Helvetica, Arial, sans-serif";
  } else {
    document.getElementById('app').style.fontFamily="Noto Sans Medium, sans-serif";
  }
}

export default {
  setLanguage,
}

