const H2 = React.createElement('h2', {className: 'bgc'}, "First day learning React")
const P = React.createElement('p', {}, "Paragraph injected in div as sibling of h2 using react")
const Div = React.createElement('div', {}, [H2,P])
ReactDOM.render(Div, document.getElementById('root'))