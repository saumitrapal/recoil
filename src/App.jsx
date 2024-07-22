import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return(
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>     
    </div>
  )
}



function Count() {
  return(
    <div>
      <CountRenderer />
      <Button />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)

  while(count % 2 == 0) {
    return(
      <div>
        {count}
          <h3>It is even</h3>
      </div>
    )
  }


}

function Button() {
  const [count, setCount] = useRecoilState(countAtom) 

  return(
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  )
}

export default App;