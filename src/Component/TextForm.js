import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,updateText] = useState('');


  const style1 ={
    border :'2px solid gray',
    borderRadius : '5px',
    padding : '10px'
  }

  const style2 ={
    textAlign : 'center',
    margin:'5px 0',
    padding :'5px 0'
  }


  const DownLoadFile = ()=> {

    const textareaContent = document.getElementById('TextBox').value;

    const blob = new Blob([textareaContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'myFile.txt';
    a.click();
  
    URL.revokeObjectURL(url);

  };

  const ReplaceAll  = ()=>{
    const oldWord = prompt("Replace this : ");
    const NewWord = prompt("with this : ");
    const wordRegex = new RegExp('\\b' + oldWord + '\\b', 'g');

    if (!wordRegex.test(text)) {
      // alert( "The word to replace was not found in the input string.");
    props.showAlert("The word to replace was not found in the input string","primary")
    }

    const replacedString = text.replace(wordRegex, NewWord);
    updateText(replacedString);
  }

  const camelCase = () =>{
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(' ').map(capitalize).join(' ');
    updateText(upper)
  }

  const extraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    updateText(newText.join(" "))
    props.showAlert("Extra space is removed!","primary")

  }

  const handleCopy = ()=>{
    // not work in android
    // var text = document.getElementById('TextBox')
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // props.showAlert("Text is copy!","primary")

    //work in android
    var text = document.getElementById('TextBox').value;
  
    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = text;
    
    // Append the input element to the document
    document.body.appendChild(tempInput);
    
    // Select the text inside the input element
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);
    
    props.showAlert("Text is copied!", "primary");
  }

  const speak = () =>
  {
   //  Create a new SpeechSynthesisUtterance instance (Web Speech API)
    var msg = new SpeechSynthesisUtterance();
    var msg2 = new SpeechSynthesisUtterance();

   //  Set the text to be spoken
    msg.text = text;
    msg2.text = "Thank you for visiting Parvezzz website"
    var voices = speechSynthesis.getVoices();

   // Iterate over the voices and find the "Google US English" voice
    var desiredVoice = null;
    for (var i = 0; i < voices.length; i++)
     {
       if (voices[i].name === 'Google US English')
        {
          desiredVoice = voices[i];
          break;
        }
     }
  
     // If the desired voice is found, set it for speech synthesis
    if (desiredVoice)
    {
      msg.voice = desiredVoice;
    }
    else {
      console.log('Desired voice not found');
      window.speechSynthesis.speak(msg);
    }

   props.showAlert("AI-Robot read the text","primary")
  }

  const uppercase_click =  () =>{
    let newText = text.toUpperCase();
    updateText(newText);
    props.showAlert("Converted to Uppercase!","primary")
  }

  const lowercase_click = () => {
    let newText = text.toLowerCase();
    updateText(newText);
    props.showAlert("Converted to Lowercase!","primary")
  }

  const onchange = (event) =>{
   updateText(event.target.value);
  }

  const clear_click = () =>{

    let newText = "";
    updateText(newText);
    props.showAlert("Text is clear!","primary")
   
  }

  return (
    <>
    <div className="container"  style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="TextBox" rows="11" value={text} onChange={onchange} 
         style={{backgroundColor :props.mode === 'dark'?'black':'white' ,color : props.mode === 'dark'?'white':'black' , border :'3px solid gray' ,resize:'none'}}></textarea>
        </div>

        <div className='container'>
          <div className="row">
            <button className="btn btn-dark me-3 mb-3 col" onClick={uppercase_click}>To Uppercase</button>
            <button className="btn btn-dark me-3 mb-3 col" onClick={lowercase_click}>To Lowercase</button>
            <div className="w-100"></div>
            <button className="btn btn-dark me-3 mb-3 col" onClick={camelCase}>Capitalize</button>
            <button className="btn btn-dark me-3 mb-3 col " onClick={speak}>Speak</button>
            <div className="w-100"></div>
            <button className="btn btn-dark me-3 mb-3 col" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-dark me-3 mb-3 col" onClick={extraSpace}>Remove Extra Space</button>
            <div className="w-100"></div>
            <button className="btn btn-dark me-3 mb-3 col" onClick={clear_click}>Clear Text</button>
            <button className="btn btn-dark me-3 mb-3 col" onClick={ReplaceAll}>Replace Word</button>
            <div className="w-100"></div>
            <button className="btn btn-dark me-3 mb-3 col" onClick={DownLoadFile}>Download File (.txt)</button>
          </div>
        </div>
   
      <p>Total Words : {text.trim().length === 0 ? 0 : text.trim().split(" ").length} and Total Character : {text.length}</p>
      <p> {text.split(/\r|\r\n|\n|\./).filter((element) => {return element.length!==0}).length} sentences</p>
      <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minuites for read</p>
  
      <h2 style={style2}>Preview Document</h2>
      <p style={style1}>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  );
}