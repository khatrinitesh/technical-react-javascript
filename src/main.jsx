
import { createRoot } from 'react-dom/client'

import './index.css'
// import FindLastComp from './components/Array/Findindex'
// import FindIndexComp from './components/Array/Findindex'
// import Find from './components/Array/Find'
// import MainLayout from './layout/MainLayout'
// import FilterComp from "../src/components/Array/FilterComp";
import FlatComp from "../src/components/Array/FlatComp";

createRoot(document.getElementById('root')).render(
  <>
    <FlatComp/>
  </>,
)
