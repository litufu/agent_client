import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Table, Tabs, Descriptions, Spin, Alert } from 'antd';
import moment from 'moment'
import 'moment/locale/zh-cn'
import { ACCOUNTTYPES } from '../constants'

const { TabPane } = Tabs;
moment.locale('zh-cn');


const ME_QUERY = gql`
query MeQuery {
    me{
        id
        name
        username
        account
        accountType
        createTime
        school{
            name
        }
        statistics{
            id
            validNum
            date
            school{
                name
            }
            studentsNum
            user{
                name
            }
            settlement
            }
    }
}
`

const columns = [
    {
        title: '报告日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '学校名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '已注册人数',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '验收时间',
        key: 'check',
        dataIndex: 'check',
    },
    {
        title: '验收人数',
        key: 'validNum',
        dataIndex: 'validNum',
    },
    {
        title: '推广单价(元)',
        key: 'price',
        dataIndex: 'price',
    },
    {
        title: '推广费用',
        key: 'value',
        dataIndex: 'value',
    },

];


class Statistic extends React.Component {

    renderTable = (statistics) => {
        const newData = statistics.map((statistic, index) => ({
            key: index,
            date: moment(statistic.date).format("YYYY年MM月DD日"),
            name: statistic.school.name,
            number: statistic.studentsNum,
            check: "2019年6月25日至2019年7月1日",
            validNum: "0",
            price: "10",
            value: "0"
        }))
        return (<Table columns={columns} dataSource={newData} />)
    }


    renderProfile = (username, name, accountType, account, regTime, schoolName) => (
        <Descriptions title="用户信息" bordered>
            <Descriptions.Item label="用户名">{username}</Descriptions.Item>
            <Descriptions.Item label="姓名">{name}</Descriptions.Item>
            <Descriptions.Item label="注册时间" span={3}>
                {regTime}
            </Descriptions.Item>
            <Descriptions.Item label="收款账号类别">{accountType}</Descriptions.Item>
            <Descriptions.Item label="收款账号">{account}</Descriptions.Item>
            <Descriptions.Item label="负责推广学校" span={3}>
                {schoolName}
            </Descriptions.Item>
        </Descriptions>
    )

    render() {


        return (
            <Query query={ME_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <Spin />
                        if (error) return <Alert message="加载出错！" type="error" />
                        if(!data.me) return <Alert message="你还没有登录" type="error" />
                        const user = data.me
                        return (
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="个人基本信息" key="1">
                                    {this.renderProfile(user.username, user.name, ACCOUNTTYPES[user.accountType], user.account,
                                        moment(user.createTime).format('YYYY年MM月DD日'), user.school.name)}
                                </TabPane>
                                <TabPane tab="推广成果" key="2">
                                    {this.renderTable(data.me.statistics)}
                                </TabPane>
                            </Tabs>
                        )
                    }
                }

            </Query>

        )
    }
}

export default Statistic