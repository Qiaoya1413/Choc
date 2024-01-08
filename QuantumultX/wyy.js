/*
搬搬党自用

[rewrite_local]
# 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

# 播放器会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/wyy.js

[mitm] 
hostname = interface*.music.163.com

*/

let header = $request.headers;
const isQuanX = typeof $task !== "undefined";

if (isQuanX) {
  header["MConfig-Info"] = '{"zr4bw6pKFDIZScpo":{"version":1009664,"appver":"8.10.60"},"tPJJnts2H31BZXmp":{"version":2205696,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":22710272,"appver":"8.10.60"}}';
  header["User-Agent"] = 'neteasemusic/8.10.60 (iPhone; iOS 14.4; Scale/3.00)';
  header["Cookie"] = 'MUSIC_U=0081104B53B952EDD473E4B712DB240505FD1582983ED95A44648185EE760832AC58C3AB97FFD2CE8802A010F5AA63F4CE97F8DB5529FD539E78787A8A486AD5EF1185BF0FC6CD9CAAEDC922CBEF3EF66BE8FD57DDE4C0C991F0285F64D5807472E791CAD8A232EE14EB4BE36F5285E72DAFBDE180FE759AC02D160B3CC09F29A689E8DBAFEBD51ABB2BA8E671E59F5DBA4E0AAA4423C7199735C8517FFAC1284C70EDE79AC8D67E13A5DB7688EBE32A24474462637DA9F44D05F4D49AC446E900661C05E7529AC2B7F322B16202BAEE3A2FD4C1E7CF5F2108C3959F4F47E021A0C5DFF0576413104C26EEA90EA6C91781E52E8BC25013615FF9FE7B6E885A73A029BEB62E99BECC5C5B807D2A549B49E297DE57F10209E33AC9B4D11E5E667FB4; EVNSM=1.0.0; NMCID=ktbhpx.1693723822000.01.3; NMDI=Q1NKTQcBDACBTwM%2FNTDrvBZS6btqAAAAouvl0A%2FFIqhy1Sw4JLy8DRdNvMG1VLwKKh5zz%2FMaxV21lHJ7YTuqv3uuClnsYw6cDhpW8Er1RS19wc%2B6YBcuV9qKgwhNNz2zTjQdzpyIcaCxki0yzGYYd%2F3EcLzqb5doAybXa6VvCSoBKg%3D%3D; appver=8.10.60; channel=distribution; deviceId=940d70a2c52aecfcdfd64b6c0816cee8; os=iPhone OS; osver=14.4; NMTID=00OJLW7svceUWtHOE7si9utEuPAkIAAAAGKWc7d7w; MUSIC_A=f3c305cf974477aca750986f8965c7774435c5d29ca1758b4ef35e44a4623e33a0417cadf3fcd57d191e5d8989e0b29df97458ccb070adb3993166e004087dd33607f2bb6b6472fb7479b373706e50da4c4ab125fc2e4915ac15692e13edef92807e650dd04abd3fb8130b7ae43fcc5b';
} else {
  headers["mconfig-info"] = '{"zr4bw6pKFDIZScpo":{"version":1009664,"appver":"8.10.60"},"tPJJnts2H31BZXmp":{"version":2205696,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":22710272,"appver":"8.10.60"}}';
  headers["user-agent"] = 'neteasemusic/8.10.60 (iPhone; iOS 14.4; Scale/3.00)';
  headers["cookie"] = 'MUSIC_U=0081104B53B952EDD473E4B712DB240505FD1582983ED95A44648185EE760832AC58C3AB97FFD2CE8802A010F5AA63F4CE97F8DB5529FD539E78787A8A486AD5EF1185BF0FC6CD9CAAEDC922CBEF3EF66BE8FD57DDE4C0C991F0285F64D5807472E791CAD8A232EE14EB4BE36F5285E72DAFBDE180FE759AC02D160B3CC09F29A689E8DBAFEBD51ABB2BA8E671E59F5DBA4E0AAA4423C7199735C8517FFAC1284C70EDE79AC8D67E13A5DB7688EBE32A24474462637DA9F44D05F4D49AC446E900661C05E7529AC2B7F322B16202BAEE3A2FD4C1E7CF5F2108C3959F4F47E021A0C5DFF0576413104C26EEA90EA6C91781E52E8BC25013615FF9FE7B6E885A73A029BEB62E99BECC5C5B807D2A549B49E297DE57F10209E33AC9B4D11E5E667FB4; EVNSM=1.0.0; NMCID=ktbhpx.1693723822000.01.3; NMDI=Q1NKTQcBDACBTwM%2FNTDrvBZS6btqAAAAouvl0A%2FFIqhy1Sw4JLy8DRdNvMG1VLwKKh5zz%2FMaxV21lHJ7YTuqv3uuClnsYw6cDhpW8Er1RS19wc%2B6YBcuV9qKgwhNNz2zTjQdzpyIcaCxki0yzGYYd%2F3EcLzqb5doAybXa6VvCSoBKg%3D%3D; appver=8.10.60; channel=distribution; deviceId=940d70a2c52aecfcdfd64b6c0816cee8; os=iPhone OS; osver=14.4; NMTID=00OJLW7svceUWtHOE7si9utEuPAkIAAAAGKWc7d7w; MUSIC_A=f3c305cf974477aca750986f8965c7774435c5d29ca1758b4ef35e44a4623e33a0417cadf3fcd57d191e5d8989e0b29df97458ccb070adb3993166e004087dd33607f2bb6b6472fb7479b373706e50da4c4ab125fc2e4915ac15692e13edef92807e650dd04abd3fb8130b7ae43fcc5b';
}

$done({ 
  headers: header
});
