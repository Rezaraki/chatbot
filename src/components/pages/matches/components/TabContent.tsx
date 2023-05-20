 

import { Avatar, Col, Collapse, List, Row, Space } from 'antd';
import { useGetFixturesQuery } from '../../../../api';
import DateObject from 'react-date-object';

const { Panel } = Collapse;


 

export const TabContent = ( {id}:{id:number}) => {

    function makeDate(id:number){
        const date = new DateObject(new Date());
        
        return date.add(id,'day').format().replaceAll('/','-')
    }
    console.log(makeDate(id))
    const  { data, } = useGetFixturesQuery(makeDate(id));
   

 
 
    return ( 
        <div className="tabContent">

        <Space  direction="vertical" size='large'>
         { data?.map(league=>
         <Collapse  bordered destroyInactivePanel={false}   >
                <Panel  header={<><Avatar src={league.logo} /> <span>{league.name}</span></>} key={league.id}>
                <List
                itemLayout="horizontal"
                dataSource={league.fixtures}
                renderItem={(item) => (
                <List.Item>
                    <Row className='row' justify='center'>
                        <Col className='col left-team-text'  span={8}><span>{item.away.name}</span></Col> 
                        <Col className='col avatar'span={3}><Avatar src={item.away.logo} /></Col> 
                        <Col className='col result'span={3}>{item.away_goals}:{item.home_goals}</Col> 
                        <Col className='col avatar'span={3}><Avatar src={item.home.logo} /></Col>
                        <Col className='col right-team-text'span={7}><span>{item.home.name}</span></Col>
                    </Row>
                </List.Item>
    )}
  />
                </Panel>
            </Collapse>)}

        </Space>

    </div>
    );
};
