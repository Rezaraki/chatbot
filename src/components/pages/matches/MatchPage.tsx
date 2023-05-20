import { Tabs } from "antd";
import { TabLabel } from "./components/TabLabel";
import { useAppSelector } from "../../../state/reduxHooks";
import { TabContent } from "./components/TabContent";
 
const MatchPage = () => {
  const {tabs,numberOfprevDays} = useAppSelector((state) => state.matches);
  
  function makeTabs(){
    return tabs.map((_, i,arr) => {

      let isFirst =( i === 0)
      let isLast =(arr.length - 1 === i )
      const id = i - numberOfprevDays;

      return {
        label: <TabLabel id={id} isFirst ={isFirst} isLast={isLast}/>, 
        key: String(id),
        children: <TabContent id={id} />,
   
      };
    })
}
 
    return (
   
      <Tabs
        
          defaultActiveKey="0"
          tabPosition='top'
          className='tabs'
          direction="rtl"
          items={makeTabs()}
          // onTabClick={onTabclick}
          destroyInactiveTabPane
           
          /> 
      
    );
}
 
export default MatchPage;