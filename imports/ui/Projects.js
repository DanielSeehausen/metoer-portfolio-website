


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

//the following will need all of their data and links replaced! left in as examples
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
          infoType: 'block',
          projInfo: 
          "This was the first significant programming project that I worked on. I headed into it with only a rudimentary grasp on C++, I was able to become comfortable in C# (which it is written in) and Java (as the majority of discussion online regarding Unity projects is in Java).\n\nAs far as a first project goes the larger architecture came together well with a MVC framework that separated the game state and view/control. The majority of faults in the program were results of combining individual solutions to the various hurdles I faced. This convoluted the flow of the program and the code itself. An example of this is when I was creating the algorithm to check for paths of similar blocks. What I ended up creating was a crude yet functioning recursive depth-first-search algorithm, which I wouldn't learn about until a month after completing the project.\n\nAll things considered, this was an excellent first project that drove home two important lessons. Firstly, regardless of your knowledge going into a project, there is little that can't be done if you know where to look for a solution and how to adapt it to your needs. Secondly, being able to critically consider the structure of a project before beginning is the majority of the battle.",
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


      //network project --------------------------------------------------------
      { 
          _id: 2, projId: 'networkProj', title: 'Subreddit Network Analysis', backgroundImg: "images/gephi_graph_large.png", 
          icons: [java, python, javaScript, node],
          description: "",
          github: "",
          hasLinks: true,          
          linksText: "See Graph Visualization Here",
          infoType: 'block',
          projInfo: 
          "At the end of a series of courses on data structures I was given a broad assignment to analyze social network data using a built-from-scratch graph data structure. I piggy-backed several learning opportunities onto this assignment. The project consisted of the following:\n\n\t- A python script to scrape Subreddit data\n\t- A Java graph module to act as the model\n\t- A Gephi graph for users to interact with\n\t- A website (the forerunner of this site) to host the project\n\nOnce data was collected with the python script the graph parsed, stored, and analyzed the information. This data was then intepreted by Gephi's stand alone software for visualization and exported for use online using sigma.js (a js library for graph drawing). The most time consuming part of the project was setting up the virtual private server to host the application. This resulted in 10% of my time spent on the project itself, and 90% of my time configuring a server from the ground up. Ultimately this was an excellent learning opportunity that brought together many different moving parts.",
          links: [{
                    _id: 1,
                    img: "images/gephi_graph_link.png",
                    linktooltip: "Go to graph",
                    file: "network/index.html",
                  }
          ]
      },
      

      //this web site project --------------------------------------------------
      { 
          _id: 3, projId: 'webProj', title: 'Web Server/Site', backgroundImg: "images/web_icons_large.png",
          icons: [javaScript, node],
          description: "",
          github: "",
          hasLinks: true,
          linksText: "Github Link Here",
          infoType: 'block',
          projInfo:
          "By summer 2016, the majority of my development as a programmer had come from Coursera programming specializations (series of courses) and working through text-books. As a result, I found myself lacking in projects that could be displayed in a meaningful and interactive format. In devoping this website I was able to create a platform to host sample work while familarizing myself with Meteor, a javascript framework written on top of node. It is important to note that this website only uses a fraction of what Meteor is capable of, and just scratches the surface of what Meteor really excels in: real-time web applications. The largest impression you get from this website is from the use of React.js, which does a fantastic job of enabling reusable components.\n\nI enjoyed, (and continue to enjoy), working on this web site. As I headed into web development with experience only working in lower level languages directly, Meteor and React provided a way to compenentize the HTML.",
          links: [{
                    _id: 1,
                    img: "images/GitHub_logo_icon.png",
                    linktooltip: "Go to GitHub repository",
                    file: "https://github.com/DanielSeehausen/metoer-portfolio-website",
                  }
          ]
      },
    ];
  }

