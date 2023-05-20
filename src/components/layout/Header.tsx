import { Input, Layout } from "antd";
import { ReactComponent as ClockIcon } from '../../assets/icons/ClockIcon.svg'
import { Typography } from 'antd';

const { Search } = Input;
const { Title } = Typography;
const{ Header : AntHeader } = Layout;

const Header = () => {
    return ( 
    <AntHeader className="header" >
         <div className="header-top">
            <ClockIcon className="icon"  />
            <Title level={3}>نتایج زنده</Title>
        </div>
         <div className="header-search">
         <Search placeholder="جستجو..." onSearch={()=>{}} />

         </div> 
    </AntHeader> 
    );
}
 
export default Header;