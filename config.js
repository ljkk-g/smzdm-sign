/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = 'xxxx@qq.com';
// email 登陆密码
const emailPassword = 'aaaaabbbb';
// 接收者 邮箱
const toEmail = 'xxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '1360481603@qq.com',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '__jsluid_s=5e7da72577e97c15c904830f8e75a6cf; __ckguid=wv76jN3iJ4b9ewgKrLiLVr2; smzdm_user_source=79E3C4C0BE4A9862A764204A07E7579C; _ga_271744817=GS1.1.1620804259.3.0.1620804259.0; r_sort_type=score; footer_floating_layer=0; ad_date=20; ad_json_feed={}; _zdmA.vid=*; sensorsdata2015jssdkcross={"distinct_id":"1790159041290a-06f549c50a8b0a-d7e163f-1395396-17901590413df1","first_id":"","props":{"$latest_traffic_source_type":"自然搜索流量","$latest_search_keyword":"未取到值","$latest_referrer":"https://www.baidu.com/link","$latest_landing_page":"https://www.smzdm.com/"},"$device_id":"1790159041290a-06f549c50a8b0a-d7e163f-1395396-17901590413df1"}; zdm_qd={"referrer":"https://www.baidu.com/link?url=41Z4uAq9zazLDSiS-psXlE5ZrQaSJRONtbyLtuFRZU_&wd=&eqid=c551476d0010f74b0000000660a5cb0d"}; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1619532969,1621478183; _gid=GA1.2.1732208685.1621478183; device_id=149575569816214782108094402115c1b165e4440adcd65fa916731f91; sess=M2RhOTF8MTYyNjY2MjIxMHw5NTg4ODUwMjg2fGYzN2ZlZDUwZTQ0Y2Y0YzRkZmE5MDQyNWJhMWUyY2UxfDE0OTU3NTU2OTgxNjIxNDc4MjEwODA5NDQwMjExNWMxYjE2NWU0NDQwYWRjZDY1ZmE5MTY3MzFmOTF8d2Vi; user=user:9588850286|9588850286; smzdm_id=9588850286; homepage_sug=b; userId=user:9588850286|9588850286; _ga_09SRZM2FDD=GS1.1.1621478182.1.1.1621478356.0; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1621478357; _zdmA.uid=ZDMA.HQ1fTC5u5.1621478357.2419200; _ga=GA1.1.68079289.1619225288; bannerCounter=[{"number":0,"surplus":1},{"number":0,"surplus":1},{"number":2,"surplus":1},{"number":2,"surplus":1},{"number":0,"surplus":1},{"number":0,"surplus":1}]; _zdmA.time=1621478553442.0.https://www.smzdm.com/'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
