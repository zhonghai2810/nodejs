import { telephone } from './global'

// 后端接口响应返回异常编号
export default {
  '400': '请求错误',
  '401': '鉴权失败',
  '403': '无权限请求，请联系管理员',
  '404': '资源不存在，请稍后再试',
  // '460': '数据异常',
  '470': '系统异常',
  '500': '服务错误',
  '503': '服务不可用',
  // '600': '你的账号在另一地点登录，已被迫下线',
  '601': '登录状态已过期，请重新登录',
  '602': '账号无权限',
  '603': '账号或密码错误',
  '604': '账号或密码错误',
  '605': '账号被锁定或未启用',
  '606': '退出登录失败，请重试',
  '607': '旧密码错误',
  '608': '该账号无后台管理权限',
  '609': '登录失败',
  '610': '验证码错误',
  '611': '验证码已失效',
  '612': '账号异常，请重新登录',
  '613': '账号未绑定机构',
  '614': '登录状态已过期，请重新登录',
  '620': '手机号格式错误',
  '621': '身份证号格式错误',
  '622': '密码格式错误',
  '623': '姓名格式错误',
  '624': '账号格式错误',
  '650': '数据不存在',
  '651': '机构不存在',
  '652': '用户不存在',
  '653': '用户名已存在',
  '654': '手机号已存在',
  '655': '身份证号已存在',
  '656': '总管理员人数已满',
  '657': '管理员人数已满',
  '658': '筛查员人数已满',
  '659': '该机构目前尚无管理员，请联系机构提交管理员名单至平台，客服热线：' + telephone,
  '660': '手机号尚未注册',
  '661': '该业务组已绑定机构，不可删除',
  '662': '该机构目前尚未绑定业务组，请联系机构进行处理，客服热线：' + telephone,
  '663': '该机构目前尚未绑定数据范围，请联系机构进行处理，客服热线：' + telephone,
  '664': '权限组不存在',
  '665': '业务组不存在',
  '666': '权限组名称已存在',
  '667': '业务组名称已存在',
  '668': '数据范围不存在',
  '669': '机构已过期',
  '670': '机构未设置失效时间',
  '671': '机构暂未审核',
  '672': '获取用户信息失败',
  '673': '当前绑定该业务组的机构管理员数量大于您输入的值',
  '674': '该机构目前尚未绑定权限组，请联系机构进行处理，客服热线：' + telephone,
  '675': '当前所选业务组总管理员数量小于目前该机构总管理员数量',
  '676': '当前所选业务组管理员数量小于目前该机构管理员数量',
  '677': '当前所选业务组筛查员数量小于目前该机构筛查员数量',
  '678': '二维码已失效',
  '700': '操作失败，请重试',
  '701': '发送短信失败，请稍后再试',
  '702': '今日短信发送次数已满',
  '703': '短信验证码已过期',
  '704': '短信验证码错误'
}