import React, {useState} from 'react'

export default function Text(props) {
    const [text,setText]=useState("");
    const handleupClick=()=>{
        console.log("Enter the text" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const handleloClick=()=>{
        console.log("Enter the text" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleclearClick=()=>{
        setText('');
    }
    const handleCopy=()=>{
        
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
    }
    const handleExtraspace=()=>{
        
        let newText=text.split(/[  ]+/);
        setText(newText.join(" ")) 
        
    }
    const download=(filename,newtext)=>{
        var link = document.createElement("a");
        link.setAttribute("target","_blank");
        if(Blob !== undefined) {
            var blob = new Blob([text], {type: "text/plain"});
            link.setAttribute("href", URL.createObjectURL(blob));
        } else {
            link.setAttribute("href","data:text/plain," + encodeURIComponent(newtext));
        }
        link.setAttribute("download",filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      const handleReverseText = () => {
        let Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");
        setText(reverseText)
    }

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3 " >
        <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'grey':'white'}}  value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraspace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={download}>Download Text</button>
        <button className="btn btn-dark mx-2" onClick={handleclearClick}>Clear</button>
        
        </div>
        <div className="container">
            <h2>Summary</h2>
            <p>{(text.match(/(\w+)/g) || []).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} :Minutes</p>
            <p>{(text.match(/[aeiou]/gi) || []).length} :Number of Vowels</p>
            <p>{text.split(/[".!?"]/).length-1} :No of Sentences</p>
            
        </div>
        <div className="container">
            <h2>Preview</h2>
            <textarea className="form-control" value={text} rows="8" ></textarea>
        </div>
        
        </div>

    )
}
