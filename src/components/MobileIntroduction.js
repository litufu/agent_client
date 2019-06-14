import React from 'react'
import { Collapse,Card ,List,Divider,Button,Row, Col} from 'antd';
import MobileProduct from './MobileProduct'
const Panel = Collapse.Panel;
const { Meta } = Card;



const job = [
    '1、推广奖励：按照每有效用户10元人民币计算推广提成。。',
    '2、工作内容：推广格物水滴APP，让参加高考的同学下载并使用APP进行高考志愿模拟填报。',
    '3、工作时间和地点：自由',
    '4、岗位要求：高三学生(推广者最好为高三学生,可以直接在同学群、朋友圈或贴吧进行推广)。不是高三学生者,身边有高三同学资源者亦可。',
    '5、有效用户确认规则：首先你应注册推广账号，选择自己负责推广的学校；所有在app内注册并填写高中学历为你负责推广学校的，均为你的推广用户；你的推广用户在指定验收时间内登陆APP并使用高考模拟报名进行模拟报考的，便为你的有效用户。',
    '6、工作流程：业务推广者注册推广账号->推广下载格物水滴APP->向高考学生推广注册->向高考学生推广高考模拟报名功能。各流程详情见各部分描述。',
    '7、推广建议：建议联合不同班级的同学共同推广，做大蛋糕，共同分配奖金。',
    '8、格物水滴APP简介：格物水滴app有高考模拟报名、同城交友等多种功能。其中高考模拟报名功能主要为：使用APP进行高考志愿模拟填报的同学，可以看到自己在平台上所有报考相同学校和专业学生中的成绩排名，并可以与其他报考者沟通交流。',
];


class Instruction extends React.Component{

    render(){
        return(
            <div>
                <img alt="haibao" src={require('../../src/assets/haibao.png')} />
                
                <div style={{marginTop:15}}>
                <Button
                onClick={()=>this.props.history.push('/promote/register')} 
                type="primary" style={{marginRight:1,marginBottom:1}}>注册推广账号</Button>
                 <Button 
                 onClick={()=>this.props.history.push('/promote/login')} 
                 type="primary" style={{marginLeft:1,marginBottom:1}}>登陆推广账号</Button>
                 <Button style={{marginLeft:5,marginBottom:1,backgroundColor:"black"}} >
                 <a  style={{fontWeight:"bold",color:"white"}}  href="https://gewushuidi.oss-cn-hangzhou.aliyuncs.com/sdapp.apk" >安卓版本下载</a>
                 </Button>
                
                {/* <span style={{float:"right",marginRight:100,marginBottom:10}}>安卓版本：<a style={{fontWeight:"bold"}} href="https://gewushuidi.oss-cn-hangzhou.aliyuncs.com/sdapp.apk">点击下载</a></span> */}
                </div>
                <MobileProduct />
            <Collapse accordion>
                 <Panel header="推广有礼" key="1">
                    <List
                    bordered
                    dataSource={job}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Panel>
                <Panel header="注册推广账号" key="3">
                <Card
                    hoverable
                    title="1.点击现在注册"
                    style={{ width: 300 }}
                    cover={<img alt="example" src={require('../../src/assets/1-1.PNG')} />}
                >
                    <Meta description="" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="2.输入用户名、密码和姓名"
                    cover={<img alt="example" src={require('../../src/assets/1-2.PNG')} />}
                >
                    <Meta  description="姓名将在后面签署协议时使用" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="3.选择你要推广的地区和学校"
                    cover={<img alt="example" src={require('../../src/assets/1-3.PNG')} />}
                >
                    <Meta description="仅可选择一所学校" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="4.选择收款账户"
                    cover={<img alt="example" src={require('../../src/assets/1-4.PNG')} />}
                >
                    <Meta description="业务推广提成发放账户，可以选择微信或支付宝账户收款,推广提成由系统根据推广业绩自动发放。" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="5.推广合作协议"
                    cover={<img alt="example" src={require('../../src/assets/1-5.PNG')} />}
                >
                    <Meta description="仔细阅读业务推广合作协议条款" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="6.同意协议并注册"
                    cover={<img alt="example" src={require('../../src/assets/1-6.PNG')} />}
                >
                    <Meta description="注册成功、可以登录查看你负责推广学校的推广业绩" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    title="7.登录并查看推广成果"
                    cover={<img alt="example" src={require('../../src/assets/1-7.PNG')} />}
                >
                    <Meta  description="推广成果每日凌晨1点更新。" />
                </Card>
                </Panel>
                <Panel header="推广下载格物水滴APP" key="4">
                <Row type="flex" justify="space-around">
                    <Col span={1}/>
                    <Col span={22}>
                        <Card
                            hoverable
                            title="1.百度搜索'格物水滴'官网下载"
                            cover={<img alt="example" src={require('../../src/assets/2-1.PNG')} />}
                        >
                            <Meta description="通过百度搜索“格物水滴”找到公司网站进行下载" />
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card
                            hoverable
                            title="2.扫码下载"
                            cover={<img alt="example" src={require('../../src/assets/sdapp.png')} />}
                        >
                            <Meta  description="" />
                        </Card>
                    </Col>
                </Row>
                    <Col span={22}>
                        <Card
                            hoverable
                            title="3.应用商店搜索'格物水滴'下载安装"
                            cover={<img alt="example" src={require('../../src/assets/2-1.jpg')} />}
                        >
                            <Meta  description="目前app可以在百度、360、91助手、华为、vivo、oppo等应用商店下载" />
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card
                            hoverable
                            title="4.通过app内的分享链接下载"
                            cover={<img alt="example" src={require('../../src/assets/2-3.jpg')} />}
                        >
                            <Meta  description="通过点击app内的“分享水滴”复制下载链接，并发送给下载用户" />
                        </Card>
                    </Col>
                    <Col span={1} />
                </Panel>
                <Panel header="推广用户注册,并填写学习经历" key="5">
                    <Col span={1} />
                    <Col span={22}>
                        <Card
                            hoverable
                            title="1.用户注册"
                            cover={<img alt="example" src={require('../../src/assets/3-1.jpg')} />}
                        >
                            <Meta  description="用户填写用户名、密码进行注册" />
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card
                            hoverable
                            title="2.填写基本信息和学习经历"
                            cover={<img alt="example" src={require('../../src/assets/2-3.jpg')} />}
                        >
                            <Meta  description="学习经历填写前需完成基本信息的填写" />
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card
                            title="3.在学习经历中填写地点和选择学校名称"
                            hoverable
                            cover={<img alt="example" src={require('../../src/assets/3-3.jpg')} />}
                        >
                            <Meta description="凡是学习经历中高中学校名称填写为你所推广学校的，便归为你的推广用户。" />
                        </Card>
                    </Col>
                    <Col span={1} />
                </Panel>
                <Panel header="推广高考模拟报名功能" key="6">
                <Col span={1} />
                <Col span={22}>
                    <Card
                        title="1.高考模拟报名功能"
                        hoverable
                        cover={<img alt="example" src={require('../../src/assets/4-1.jpg')} />}
                    >
                        <Meta  description="你推广的用户在规定的验收时间内使用高考模拟报名功能进行模拟报名，便认定为有效用户，据以计算推广业绩。" />
                    </Card>
                </Col>
                <Col span={22}>
                    <Card
                        title="2.模拟高考志愿填报"
                        hoverable
                        cover={<img alt="example" src={require('../../src/assets/4-2.jpg')} />}
                    >
                        <Meta  description="高考用户填写高考基本信息、选择学校和专业便可进行高考模拟报名" />
                    </Card>
                </Col>
                <Col span={1} />
                </Panel>
            </Collapse>
            </div>
        )
    }
}


export default Instruction


