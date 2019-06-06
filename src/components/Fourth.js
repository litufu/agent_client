import React from 'react'
import moment from 'moment';
import { Button } from 'antd';
import {ACCOUNTTYPES} from '../constants'
import '../styles/App.css';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');



class Fourth extends React.Component {

    render() {
        const now = moment().format("YYYY年MM月DD日");
        const name = this.props.name
        const schoolName = this.props.schoolName
        const acceptance = "2019年6月25日-2019年7月1日"
        const payAccount = `${ACCOUNTTYPES[this.props.accountType]}:${this.props.account}`
        return (
            <div>
                <div>
                    <p className="p-center">推广合作协议</p>
                    <p>{`甲方：${name}`}</p>
                    <p>乙方：安阳格物网络科技有限公司</p>
                    <p>经甲乙双方平等协商，双方本着互惠互利的原则，特此签署本协议。</p>
                    <p>一、合作期间</p>
                    <p>{`本合同的有效期自${now}起至2019年7月5日止。`}</p>
                    <p>二、合作内容</p>
                    <p>{`1.双方同意，甲方作为${schoolName}唯一推广负责人，负责推广乙方产品格物水滴APP，宣传引导高三参加高考的学生使用格物水滴APP内的高考报名功能。`}</p>
                    <p>2.甲方负责提供格物水滴APP的下载地址。目前格物水滴APP下载渠道:1、各大应用商店（如百度、360、华为、vivo、oppo、91助手等）上架，2、通过格物水滴APP内部的分享链接下载；3、官方下载网站http://sd.anyanggewu.com下载</p>
                    <p>{`3. 乙方负责通过贴吧、朋友圈、同学群、招聘二级代理商等多种形式开展格物水滴APP的业务推广活动，凡是在格物水滴APP内注册高中学习经历学校为${schoolName}的用户均为甲方的推广成果客户。推广成果客户数量每日凌晨1:00更新，可以在格物水滴业务推广系统中查看`}</p>
                    <p>三、甲方的权利和义务</p>
                    <p>1.甲方有权要求乙方按照合同约定支付业务推广费。</p>
                    <p>2.甲方负责对甲方的营销手段进行严格管理，不从事违反国家法律、法规的活动或发布法律、法规禁止的信息和内容。如因此造成乙方或第三方损失的，甲方应当承担赔偿责任。</p>
                    <p>3.甲方应在投放时需保证其使用的图片、文字等未侵犯他人的知识产权，否则，由此给乙方或第三方造成损失的，甲方承担赔偿责任。</p>
                    <p>4.甲方承诺拥有及/或得到以及维持签署并履行本合同所需要的所有权利、许可及/或注册文件，并保证其在合同签订及履行过程中实施的任何行为不违反现行的法律法规。</p>
                    <p>5.甲方应严格履行合同义务，不得弄虚作假，严禁使用水军等虚假注册行为。</p>
                    <p>6.未经乙方事先书面同意，甲方不得将本合同项下全部或部分权利、义务转让给他人。</p>
                    <p>四、乙方的权利和义务</p>
                    <p>1.乙方有权要求甲方按照合同约定提供推广服务，甲方应尽全力为乙方进行推广。</p>
                    <p>2.乙方保证是乙方推广产品和服务的合法经营者。</p>
                    <p>3.乙方保证按照合同约定支付给甲方业务推广费。</p>
                    <p>4.乙方应确保在合同期间,不得在相同学校寻找新的业务推广人。</p>
                    <p>5.如乙方签订合同后3日内推广成果客户未超过50人，乙方有权解除合同。</p>
                    <p>6.根据中华人民共和国个人所得税法，乙方是甲方个人所得税扣缴义务人，乙方应根据中华人民共和国个人所得税法实施个人所得税扣缴义务。</p>
                    <p>五、服务费用核算及支付方式</p>
                    <p>1.付费方式</p>
                    <p>{`验收期间确定为${acceptance}，验收期间内登录格物水滴APP并至少使用一次高考报名功能的用户为最终推广有效用户，乙方根据最终推广有效用户数量，按照每有效用户10元人民币向甲方支付推广费用；验收期间最终推广有效用户数量可以登录格物水滴业务推广系统查看（每日凌晨1:00更新数量）；乙方负责提供验收期间有效用户名单。`}</p>
                    <p>合同结束3个工作日内，如甲方对于推广数量有异议可以向公司申请异议，凡甲方提供证据证明是有效用户而乙方系统未予记录的，乙方对于未记录的人数按照每人1000元支付赔偿款。</p>
                    <p>应付费用=最终推广有效用户数量×10元人民币</p>
                    <p>{`甲方费用指定划拨账户：${payAccount}`}</p>
                    <p>乙方应在甲方无异议（合同结束3个工作日或异议处理完）后5个工作日内将应付费用（扣除个人所得税）打入上述账户。</p>
                    <p>六、协议的变更、解除与终止</p>
                    <p>1.协议有效期届满，协议终止</p>
                    <p>2.本协议生效后，若因乙方因素需要变更本协议条款的，乙方可以以书面形式（包括电子邮件）通知甲方变更或补充合作范围和服务费用，甲方应在10日内给予明确答复。在双方就变更或补充合作范围和服务费用达成一致后，双方应签订补充协议。未达成补充协议的，按照原协议履行。</p>
                    <p>在协议履行过程中，各方若发生争议，应本着实事求是的精神及时协商解决。若各方不能达成协议时，任一方可向乙方所在地人民法院提起诉讼。</p>
                    <p>七、附则</p>
                    <p>1.本协议附件与本协议具同等法律效力。本协议未约定事项，双方可视实际需要，依据相关法律规定，经双方协商达成一致后，签订补充协议。补充协议属于本协议的一部分，与本协议具有同等法律效力；如补充协议、附件与本协议条款有不同规定的，以补充协议、附件规定为准。</p>
                    <p>2.未经对方事先书面同意，双方均不得将本协议所赋予的权利或义务全部或部分转让或以其他方式移转。</p>
                    <p>3.本协议自乙方同意注册格物水滴推广账户时生效。</p>
                    <p>（本行以下无正文）</p>
                    <p className="p-right">{`签约日期：${now}`}</p>
                </div>
                <div className="btn-submit" onClick={()=>this.props.handleFourthSubmit()}>
                    <Button type="primary">同意协议并注册</Button>
                </div>
            </div>
        )
    }
}

export default Fourth