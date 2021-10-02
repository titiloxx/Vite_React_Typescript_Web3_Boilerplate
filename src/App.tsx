import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'web3/dist/web3.min.js'
import { AbiItem } from 'web3-utils'
import Web3 from 'web3'
import contractAbi from '../abi/contract1.json'
import {Contract1} from '../types/web3-v1-contracts/contract1'
const contractAddress='0xA259ccfa43d6f3D3D60193fc728C5B3A65634Cc1'
declare let window: any;
let web3:Web3;

const connectWallet=async ()=>{
  await window.ethereum.enable();
  web3=new window.Web3(window.ethereum);
}

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    (async ()=>{    
      await connectWallet()
      const contract=new web3.eth.Contract(contractAbi as AbiItem[],contractAddress) as unknown as Contract1;
      const resultString=await(contract.methods.getName().call())
      console.log(resultString)
    })()},[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + his!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
