import {useState} from 'react'

function App1() {
return (
<h1 style={{position:'absolute', left:"42%",top:'50%'}}>React with "ANUBHAV"</h1>
);
}
function App(){
  const [color, setColor] = useState("color")



return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}

  >
    <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className= "fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("red")} 
              style= {{backgroundColor: "red"}} >red</button>
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("blue")} 
              style= {{backgroundColor: "blue"}} >Blue</button>
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("green")} 
              style= {{backgroundColor: "green"}} >Green</button>
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("pink")} 
              style= {{backgroundColor: "pink"  }} >pink</button>
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("purple")} 
              style= {{backgroundColor: "purple"}} >purple</button>
        <button className="outline-none bg-white px-4 py-2 rounded-3xl text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all active:scale-95" onClick= {() => setColor("goldenrod")} 
              style= {{backgroundColor: "goldenrod"  }} >Goldenrod</button>
      </div>
    </div>
  </div>
)
}

export { App1, App }
