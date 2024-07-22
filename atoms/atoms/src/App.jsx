import React from "react";
import { jobAtom, massageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms/atoms";
import { RecoilRoot, useRecoilValue } from "recoil";


function App() {

  return(
    <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  )
 
}

function MainApp() {
  const myNetworkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobAtom)
  const massagesCount = useRecoilValue(massageAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotificationValue = useRecoilValue(totalNotificationSelector)

  return(
     <div>
      
        <button>Home</button>

        <button>My network ({myNetworkCount >= 100 ? "99+" : myNetworkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Massages ({massagesCount})</button>
        <button>Notifications ({notificationCount})</button>

        <button>Me ({totalNotificationValue})</button>
       </div>
    
  )
}

export default App;