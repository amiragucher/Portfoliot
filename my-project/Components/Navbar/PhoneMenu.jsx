import Navbar from './Navbar';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { MenuOutlined } from "@ant-design/icons";


const PhoneMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(()=>true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={()=>{console.log("Clicked!") ; showDrawer()}}>
        <MenuOutlined className="h-10" />
      </Button>
      <Drawer getContainer={false} title="Basic Drawer" placement="left" onClose={onClose} visible={open}>
        
        <p>yooo mumma</p>
        <p>yooo mumma</p>
        <p>yooo mumma</p>
      </Drawer>
    </>
  );
};

export default PhoneMenu;