// const reactFunction() { //this is a functional component
//     return <div>This is first Div in the first Function</div>;
// }
// ReactDOM.render(<reactFunction />, document.querySelector("#root"));

//day 2 homework
const h1 = React.createElement('h2',{style:{
    color: 'white'},
    id:"h1inRoot",
    className: "heading"
}, 
"REACT  : Day 2 homework")

const heading = React.createElement('h2',{}, "Topics covered")
const des = React.createElement('p',{}, "The following is a list of all the topics we cover in the MDN learning area.")
const p1 = React.createElement('p',{}, "Provides a practical introduction to web development for complete beginners.")
const p2 = React.createElement('p',{}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")
const p3 = React.createElement('p',{}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")
const a1 = React.createElement('a',{href:"https://ruchikakadam.github.io/REACT_M5/day2/day2_hw.html"}, "Getting started with the web")
const a2 = React.createElement('a',{href:"https://ruchikakadam.github.io/REACT_M5/day2/day2_hw.html"}, "HTML- Structuring the web")
const a3 = React.createElement('a',{href:"https://ruchikakadam.github.io/REACT_M5/day2/day2_hw.html"}, "CSS-Styling the web")


const hwDiv = React.createElement('div',{}, [h1, heading, des, a1, p1, a2, p2, a3, p3]);
ReactDOM.render(hwDiv, document.getElementById('root'));

