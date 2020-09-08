import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './Stylingcomponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* Buổi 1 */}
        {/* <Demo/> */}
        {/* <DemoHeader/> */}
        {/* <BaiTapLayout1/> */}
        {/* <BaiTapLayout2/> */}
        {/* <DataBinding/> */}
        {/* <HandleEvent/> */}

      {/* Buổi 2 */}
        {/* <Styling/> */}
        {/* <RenderWithState/> */}
        {/* <BaiTapChonXe/> */}
        <RenderWithMap/>
    </div>
  );
}

export default App;
