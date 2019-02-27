const server = 'http://localhost:3000/definition'

SurveyEditor
    .StylesManager
    .applyTheme("default");


var editorOptions = {}; //Use default options
var editor = new SurveyEditor.SurveyEditor(null, editorOptions);
//set events here
editor.saveSurveyFunc = function(saveNo, callback) {
    //Save the survey definition into a local storage window.localStorage.setItem("YourStorageName", editor.text);
    console.log(editor.text)
    axios.post(server, {
        json: JSON.parse(editor.text)
    })
    !!callback && callback(saveNo, true);
};



editor.render("editorElement");