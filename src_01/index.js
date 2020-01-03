import './app.css'
import logo from './logo.png'

console.log('Hello Webpack!')
document.getElementById('root').innerHTML = '<h1>Hello222</h1>'

function fn (value){
    (value)=>{
        console.log(value);
    }
}

const image = new Image();
image.src = logo;
document.getElementById('root').appendChild(image)