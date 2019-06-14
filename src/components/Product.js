import React from 'react'
import { Card, Row, Col,Divider ,Typography  } from 'antd';
const { Meta } = Card;
const { Title } = Typography;

export default class Product extends React.Component {

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Title style={{textAlign:'center'}}>高考报名功能示意图</Title>
                <Divider />
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="选择高考报名" src={require('../../src/assets/5-1.jpg')} />}
                        >
                            <Meta title="选择高考报名" description="注册账号进入app，填写个人基本信息和高中学习经历后，便可以选择进入高考报名功能" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="高考志愿填报指引" src={require('../../src/assets/5-2.jpg')}/>}
                        >
                            <Meta title="高考志愿填报指引" description="该部分主要帮助你选择学校和专业；通过专业的心理测试，查看你适合的专业；通过专业薪酬排行查看什么专业会获得更好的报酬。" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="高考基本信息" src={require('../../src/assets/5-3.jpg')} />}
                        >
                            <Meta title="高考基本信息" description="这里你需要填写报考省份、准考证号、文理科及高考分数等内容，以便于后面按照你报考的学校和专业进行排名。" />
                        </Card>,
                    </Col>
                </Row>
                <Divider />
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="选择学校和专业" src={require('../../src/assets/5-3-0.jpg')} />}
                        >
                            <Meta title="选择学校和专业" description="选择本科或专科后，然后分别选择学校和专业" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="选择学校" src={require('../../src/assets/5-5.jpg')}/>}
                        >
                            <Meta title="选择学校" description="搜索你要报考的学校，查找到后选择并确认。" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="选择专业" src={require('../../src/assets/5-4.jpg')} />}
                        >
                            <Meta title="选择专业" description="搜索你要报考该学校的专业，查找到后选择并确认。" />
                        </Card>,
                    </Col>
                </Row>
                <Divider />
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="搜索并报名" src={require('../../src/assets/5-6.jpg')} />}
                        >
                            <Meta title="搜索并报名" description="选择好学校和专业后，点击搜索便可以看到你的要报考的学校和专业本省已经有几人报考，最低分是多少。然后点击报名" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="进入报名结果页" src={require('../../src/assets/5-7.jpg')}/>}
                        >
                            <Meta title="进入报名结果页" description="在报名结果页面，你可以查看本省报考者、与报考该学校和专业的同学聊天沟通、或者取消报名" />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="本省报名结果" src={require('../../src/assets/5-9.jpg')} />}
                        >
                            <Meta title="本省报考者名单" description="这里你可以看到已经报考该学校和专业的同学，并查看其详细信息，也可与之单独交流。" />
                        </Card>,
                    </Col>
                </Row>
            </div>
        )
    }
}
