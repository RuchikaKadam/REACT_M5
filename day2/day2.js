// const reactFunction() { //this is a functional component
//     return <div>This is first Div in the first Function</div>;
// }
// ReactDOM.render(<reactFunction />, document.querySelector("#root"));


const h1 = React.createElement('h2',{style:{
    color: 'grey'},
    id:"h1inRoot"
}, 
"Learn React with MDN!")

const p = React.createElement('p',{}, "HI! I am a paragraph inside a div and I am a sibling element of H1.")
const div = React.createElement('div',{}, [h1, p])
ReactDOM.render(div, document.getElementById('root'))