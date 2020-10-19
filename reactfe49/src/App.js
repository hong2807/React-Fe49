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
import BaiTapRenderPhim from './RenderWithMap/BaiTapRenderPhim';
import DemoProps from './Props/DemoProps';
import BaiTapQLSP from './Props/BaiTapQLSP';
import BaiTapQLSPProps from './Props/BaiTapQLSPProps';
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameTaiXiu from './BaiTapRedux/BaiTapGameTaiXiu/BaiTapGameTaiXiu';

function App() {

  let mangSanPham = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },

    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]

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
        {/* <RenderWithMap/> */}
      
      {/* Buổi 3 */}
        {/* <BaiTapRenderPhim/> */}
        {/* <DemoProps/> */}
        {/* <BaiTapQLSP/> */}
        {/* <BaiTapQLSPProps mangSP={mangSanPham}/> */}

      {/* Buổi 4 */}
      {/* <BaiTapGioHang/> */}
      
      {/* Buổi 5 */}
      {/* <BaiTapGioHangRedux/> */}

      {/* Buổi 6 */}
      <BaiTapGameTaiXiu/>
    </div>
  );
}

export default App;
