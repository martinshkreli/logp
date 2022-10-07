import Head from 'next/head'
import Header from '@components/Header'
import {useState} from 'react'


export default function Home() {

function Inputsmiles(props) {

  const [value, setValue] = useState("");
  const [logpresult, setLogPResult] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setLogPResult((Math.round(100 * Math.random())/100));
    setValue(logpresult);
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