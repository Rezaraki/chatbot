import { Layout  } from "antd";
import { ReactNode } from "react";

const{ Content : AntContent } = Layout;

const Content  = ({children}:{children: ReactNode}) => {
    return ( <AntContent className="content" >{children}</AntContent> );
}
 
export default Content;