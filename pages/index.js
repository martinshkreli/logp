import Head from 'next/head'
import Header from '@components/Header'
import {useState} from 'react'
export default function Home() {

function Inputsmiles(props) {

  const [value, setValue] = useState("");
  const [logpresult, setLogPResult] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    let logprequest = e.target.value

   fetch(`https://logpcalculator.herokuapp.com/api/${logprequest}`, {
      'Access-Control-Allow-Origin': 'https://heroku.com'
    })
    .then((response) => response.json())
    .then((response) => {
      let logpstring = (response[0]);
      logpstring = parseFloat(logpstring.substring(5),10)
      console.log(logpstring);
      setLogPResult(logpstring);
      setValue(logpstring);
    })
  }

  return (
    <div>
      <input placeholder="Enter SMILES" onChange={handleInputChange}></input>
        <p>Predicted logP: {logpresult}</p>
    </div>
    )
}

  return (
    <div className="container">
      <Head>
        <title>logP calculator</title>
      </Head>

      <main>
        <Header title="logP calculator" />
        <Inputsmiles type="text"></Inputsmiles>
      </main>      
    </div>
  )
}