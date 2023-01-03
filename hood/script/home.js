/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* home.js | Home page procedures | 22/12/2022     */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  // fnAddLangBtns();
  // fnDoTitles();
  // if (document.getElementsByTagName('BODY')[0].id==='Home') {
    fnFeedHome();
    fnFeedForm();
  // }
  fnListen4mSubmit(); console.log("DATABASE ACCESS\nPRELUDE\nAND NUMBERS ARE TBD...");
});
/* - - - - - - - - */

function fnFeedHome() {
  fnPush2IDs( [ 'tsdbTableHdr', 'tsdbSbTtl', 'tsdbWrkSbTtl', 'tsSbttlVid', 'tsSbttlVstr', 'tsSbttlSbscrbrs', 'tsSbttlCntrbtr','tsPrelHdg', 'tsPrelude', 'tsRegTtl', 'tsRegSbttl' ] );
}
/* - - - - - - - - */

function fnPush2Form(ID, FieldAttr, Val) {
  document.getElementById(ID).setAttribute(FieldAttr,Val);
}
/* - - - - - - - - */

function fnFeedForm() {
  let xFields = [ 'fldFN', 'fldLN', 'fldEm', 'fldPl' ]
  xFields.forEach( xF => {
    fnPush2Form( xF, 'placeholder', fnPickLangTxt( eval( 'ts'+String(xF) ) ))
  })
  fnPush2Form('btnSubmit', 'value', fnPickLangTxt(tsbtnSubmit))
}
/* - - - - - - - - */

function fnListen4mSubmit() {
  const formElem = document.getElementById('frmSignUp');
  // const formElem = document.querySelector('form'); // Use this for all forms

  (formElem) ? // Exists?
    formElem.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent GET
      new FormData(formElem); // Construct FormData object
    }) : null;
  /* - - - - - - - - */
  (formElem) ? // Exists?
    formElem.addEventListener('formdata', (e) => {
      const data = e.formData; // Get the form data from the event object
      // for (const value of data.values()) { console.log(value); }
      for (const pair of data.entries()) { console.log(`${pair[0]}, ${pair[1]}`);}
      const request = new XMLHttpRequest(); // submit the data via XHR
      request.open("POST", "/formHandler");
      request.send(data);
    }) : null;
}
/* - - - - - - - - */