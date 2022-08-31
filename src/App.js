import { useState } from "react";

function App() {

  const [value, setValue] = useState("");
  const [result,setResult] = useState("")
  const featcImage = () =>{

    fetch(`https://api.unsplash.com/search/photos/?client_id=BGVnQZ4FKiY5a3EsOS54j1jUqW5xEFxV9Awy90Ld3NM&query=${value}`)
    .then(res =>res.json())
    .then(data =>{
      setResult(data.results)
    })
  }
  return (
    <div>
        <div className="header">
          <span>جستجو</span>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={featcImage}>ارسال</button>
        </div> 
        <div className="gallery">
          {
            result && result.map((item)=>
              <img key={item.id} src={item.urls.regular} alt="" />
            )
          }
        </div>
    </div>
  );
}

export default App;
