import React, {useState} from 'react';
import "./TextForm.css"

const TextForm = (props) => {

  // usestate to text and setText for converting existing text into newText
  const [text, setText] = useState("");


  // handleUpperCase - to convert existing text into UpperCase
  const handleUpClick = (e) => {
    e.preventDefault();
      let newText = text.toUpperCase();
      setText(newText);
      console.log("Click upperCase");
      props.showAlert("Converted to uppercase!", "Success");

  }
  // handleLowerCase - to convert existing text into LowerCase
  const handleLoClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "Success");
  }
  // handleCopytext - to copy existing text with clipboard
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text successfully", "Success");
  }
  // handleRemovespaces - to remove extra spaces existing text with clipboard
  const handleRemoveSpaces = (e) => {
    e.preventDefault();
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces successfully!", "Success");
  }
  // handleOnchange - to change text value acc. to targeted value
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  


  return (
    <main className="textform-main container_padding  container_margin">
      <section className="textform-header">
        <h2>Try textUtils - Word, Counter character, Remove Extra Spaces</h2>
        <form className='textform-form' >
          <textarea name="textbox" id="textbox" rows="10" value={text} onChange={handleOnChange} className='textform-textarea' >
          </textarea> <br />
          <button disabled={text.length === 0} onClick={handleUpClick} className='textformBtn' >Convert to UpperCase</button>
          <button disabled={text.length === 0} onClick={handleLoClick} className='textformBtn' >Convert to LowerCase</button>
          <button disabled={text.length === 0} onClick={handleCopy}  className='textformBtn' >Copy Text</button>
          <button disabled={text.length === 0} onClick={handleRemoveSpaces} className='textformBtn' >Remove Extra Spaces</button>
        </form>
      </section>
      <section className="textform-summary" >
        <h2>Your text Summary</h2>
        {/* length of text for characters and split text with filter for 0 words isuues */}
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters {" "}</p>
            {/* multiply text with 0.008 with filter to count times */}
            <p> {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
      </section>
      <section className="textform-textPreview" >
          <h2>Preview</h2>
          {/* show input text and modified text also message text when nothing entered */}
          <p>{text}</p>
      </section>
    </main>
  )
}

export default TextForm