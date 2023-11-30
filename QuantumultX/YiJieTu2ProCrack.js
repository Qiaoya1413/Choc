/***********************************

[rewrite_local]  
^https?:\/\/.*jietu.*com/apiv\d/user url script-response-body https://raw.githubusercontent.com/Qiaoya1413/Choc/main/QuantumultX/YiJieTu2ProCrack.js
[mitm] 
hostname=*jietu*

***********************************/

var body = $response.body.replace(/group_id":"\d/g, 'group_id":"3')
$done({ body })
