


/* data for individual projects is defined here. This is a simple placeholder for a database.
 * our 'projects' in getProjectDescriptions should hold all of the information
 * for a specific projects big display. The getProjectLinks should hold the information for the navbar
 * and match up with their relative getProjectDescriptions index.
*/

var cSharp =     { _id: 10, img: "images/language_images/png/csharp-sq.png", tooltip: "C#!"};
var python =     { _id: 11, img: "images/language_images/png/python-sq.png", tooltip: "Python"};
var javaScript = { _id: 12, img: "images/language_images/png/js-sq.png",     tooltip: "Javascript"};
var java =       { _id: 13, img: "images/language_images/png/java-sq.png",   tooltip: "Java"};
var lua =        { _id: 14, img: "images/language_images/png/lua.png",       tooltip: "Lua, meaning 'Moon' in Portuguese. Named so as it is the successor to SOL ('Simple Object Language'). Lua is not an acronym, but is so often written as 'LUA' that it has obtained the backronym: 'Lua Uppercase Accident'." };
var ruby =       { _id: 15, img: "images/language_images/png/ruby-sq.png",   tooltip: "Ruby"};
var html =       { _id: 16, img: "images/language_images/png/html-sq.png",   tooltip: "HTML"};
var html5 =      { _id: 17, img: "images/language_images/png/html5-sq.png",  tooltip: "HTML5"};
var node =       { _id: 18, img: "images/language_images/png/node-sq.png",   tooltip: "Node.js"};
var cpp =        { _id: 19, img: "images/language_images/png/cpp-sq.png",    tooltip: "C++!"};


//the following will need all of their data and links replaced!!! left in as examples
export function getProjectLinks() {
    return [
      { _id: 1, projId: 'unityProj', text: 'Unity2D Game', img: "images/unity_icon_small_bw.png", activeImg: "images/unity_icon_small.png" },
      { _id: 2, projId: 'networkProj', text: 'Network Analysis', img: "images/gephi_graph_small_bw.png", activeImg: "images/gephi_graph_small.png" },
      { _id: 3, projId: 'webProj', text: 'Web Server/Site', img: "images/web_icons_small_bw.png", activeImg: "images/web_icons_small.png" },
    ];
  }

//the following will need all of their data and links replaced! One full project was left in as an example
export function getProjectDescriptions() {
    return [
      //unity project ----------------------------------------------------------
      { 
          _id: 1, projId: 'unityProj', title: 'Unity2D Game', backgroundImg: "images/unity_icon_large.png",
          icons: [cSharp],
          description: "Proj description",
          github: "githublink",
          hasLinks: true,
          linksText: "Download Here",
          //infoType should either be 'block' or 'list', and projInfo should correspond
          infoType: 'block',
          projInfo: "Instead of just text here, a list can also be passed as an argument, with each element being inserted into a <li>"
                    
          links: [{
                    _id: 1,
                    img: "images/bmachine_dl.png",
                    linktooltip: "Download Game for Windows",
                    file: "downloads/ChouxsMeanBeanMachine.zip",
                 },
                 {
                    _id: 2,
                    img: "images/bmachine_dl_invert.png",
                    linktooltip: "Download Game for Mac",
                    file: "downloads/ChouxsMeanBeanMachineForMac.zip",
                 },
          ]
      },
    ];
  }

