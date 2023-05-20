import { Layout as AntLayout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import Content from "./Content";
  
const Layout = ( {children}:{children: ReactNode}) => {
    return (
        <AntLayout>

            <Header />
            <Content > {children} </Content> 
            <Footer />
        
        </AntLayout>
         );
}
 
export default Layout;