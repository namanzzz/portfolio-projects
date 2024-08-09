import { useEffect, useState } from "react"


export default function RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const handleCreateRandomHexColor = () => {
        // console.log('function is working')

        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"
        // console.log(hexColor);

        for(let i=0;i<6;i+=1){
            let RandomIndex = Math.floor(Math.random()*(hex.length));
            hexColor += String(hex[RandomIndex])
        }
        console.log(hexColor);
        setColor(hexColor);
     }

    const handleCreateRandomRGBColor = () => {
            const r = Math.floor(Math.random()*255);
            const g = Math.floor(Math.random()*255);
            const b = Math.floor(Math.random()*255);
            console.log(`rgb(${r}, ${g}, ${b})`);
            setColor(`rgb(${r}, ${g}, ${b})`);
        }

    useEffect(()=>{
        typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRGBColor();
    }, [typeOfColor])

    return <div className="container"
        style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}
    >
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')} >Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random Color</button>
        
        <div style={{display:"block", justifyContent:"center",
            alignItems: "center", color:"white", fontSize: "60px", marginTop:"10%",
        }}>

            <h5>{typeOfColor==='hex' ? "HEX Color": 'RGB Color'}</h5>
            <h3>{color}</h3>
        </div>

    </div>
}