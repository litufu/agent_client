import React from 'react'
import { Collapse,Card ,List,Divider,Button } from 'antd';

const Panel = Collapse.Panel;
const { Meta } = Card;

const job = [
    '1、工作岗位：格物水滴APP业务推广人员。',
    '2、工作内容：推广格物水滴APP，让参加高考的学生下载APP并使用APP内的高考报名功能。',
    '3、工作时间和地点：自由',
    '4、岗位要求：推广者最好为高三学生(推广比较简单,可以直接在同学群、朋友圈或贴吧进行推广)。不是高三学生者,身边应有便于推广的高三学生资源。',
    '5、工作报酬：按照每有效用户10元人民币计算推广提成。',
    '6、有效用户确认规则：首先你应注册推广账号，选择自己负责推广的学校；所有在app内注册并填写高中学历为你负责推广学校的，均为你的推广用户；你的推广用户在指定验收时间内登陆APP并使用高考报名进行模拟报考的，便为你的有效用户。',
    '7、工作流程：业务推广者注册推广账号->推广下载格物水滴APP->向高考学生推广注册->向高考学生推广高考报名功能。各流程详情见各部分描述。',
    '8、格物水滴APP简介：格物水滴app有高考报名、同城交友等多种功能。其中高考报名功能主要为：使用APP进行高考志愿模拟填报的同学，可以看到自己在报考学校和专业的成绩排名，并可以与其他报考者沟通交流。',
];


class Instruction extends React.Component{

    render(){
        return(
            <div>
                <div>
                <Button
                onClick={()=>this.props.history.push('/promote/register')} 
                type="primary" style={{marginRight:10,marginBottom:10}}>注册推广账号</Button>
                 <Button 
                 onClick={()=>this.props.history.push('/promote/login')} 
                 type="primary" style={{marginLeft:10,marginBottom:10}}>登陆推广账号</Button>
                </div>
                
            <Collapse accordion>
                 <Panel header="招聘公告" key="1">
                    <List
                    bordered
                    dataSource={job}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Panel>
                <Panel header="注册推广账号" key="3">
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-1.PNG')} />}
                >
                    <Meta title="1.点击现在注册" description="" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-2.PNG')} />}
                >
                    <Meta title="2.输入用户名、密码和姓名" description="姓名将在后面签署协议时使用" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-3.PNG')} />}
                >
                    <Meta title="3.选择你要推广的地区和学校" description="仅可选择一所学校" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-4.PNG')} />}
                >
                    <Meta title="4.选择收款账户" description="业务推广提成发放账户，可以选择微信或支付宝账户收款,推广提成由系统根据推广业绩自动发放。" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-5.PNG')} />}
                >
                    <Meta title="5.推广合作协议" description="仔细阅读业务推广合作协议条款" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-6.PNG')} />}
                >
                    <Meta title="6.同意协议并注册" description="注册成功、可以登录查看你负责推广学校的推广业绩" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 800 }}
                    cover={<img alt="example" src={require('../../src/assets/1-7.PNG')} />}
                >
                    <Meta title="7.登录并查看推广成果" description="推广成果每日凌晨1点更新。" />
                </Card>
                </Panel>
                <Panel header="推广下载格物水滴APP" key="4">
                <Card
                    hoverable
                    style={{ width: 400,}}
                    cover={<img alt="example" src={require('../../src/assets/2-1.jpg')} />}
                >
                    <Meta title="1.应用商店搜索'格物水滴'下载安装" description="目前app可以在百度、360、91助手、华为、vivo、oppo等应用商店下载" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 400}}
                    cover={<img alt="example" src={require('../../src/assets/2-2.png')} />}
                >
                    <Meta title="2.扫码下载" description="" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 400}}
                    cover={<img alt="example" src={require('../../src/assets/2-3.jpg')} />}
                >
                    <Meta title="3.通过app内的分享链接下载" description="通过点击app内的“分享水滴”复制下载链接，并发送给下载用户" />
                </Card>
                </Panel>
                <Panel header="推广用户注册,并填写学习经历" key="5">
                <Card
                    hoverable
                    style={{ width: 400,}}
                    cover={<img alt="example" src={require('../../src/assets/3-1.jpg')} />}
                >
                    <Meta title="1.用户注册" description="" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 400}}
                    cover={<img alt="example" src={require('../../src/assets/2-3.jpg')} />}
                >
                    <Meta title="2.填写基本信息和学习经历" description="学习经历填写前需完成基本信息的填写" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 400}}
                    cover={<img alt="example" src={require('../../src/assets/3-3.jpg')} />}
                >
                    <Meta title="3.在学习经历中填写地点和选择学校名称" description="凡是学习经历中高中学校名称填写为你所推广学校的，便归为你的推广用户。" />
                </Card>
                </Panel>
                <Panel header="推广高考报名功能" key="6">
                <Card
                    hoverable
                    style={{ width: 400,}}
                    cover={<img alt="example" src={require('../../src/assets/4-1.jpg')} />}
                >
                    <Meta title="1.高考报名功能" description="你推广的用户在规定的验收时间内使用高考报名功能进行模拟报名，便认定为有效用户，据以计算推广业绩。" />
                </Card>
                <Divider />
                <Card
                    hoverable
                    style={{ width: 400}}
                    cover={<img alt="example" src={require('../../src/assets/4-2.jpg')} />}
                >
                    <Meta title="2.模拟高考志愿填报" description="填写高考基本信息、选择学校和专业进行高考模拟报名" />
                </Card>
                <Divider />
       
                </Panel>
            </Collapse>
            </div>
        )
    }
}


export default Instruction


