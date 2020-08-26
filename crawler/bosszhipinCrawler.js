const https = require('https');

let url= 'https://www.zhipin.com/job_detail/?query=%E5%89%8D%E7%AB%AF&city=101220100&industry=&position=';

let options = {
    headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        'cookie':'_uab_collina=156542212342652104128965; lastCity=101220100; sid=sem_pz_bdpc_dasou_title; __zp_seo_uuid__=ab589936-2f3f-4889-b091-708ce9cd3c25; __g=sem_pz_bdpc_dasou_title; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1598447137; JSESSIONID=""; __c=1598447137; __l=l=%2Fm.zhipin.com%2Fc101220100%2F%3Fquery%3D%25E5%2589%258D%25E7%25AB%25AF&r=https%3A%2F%2Fwww.baidu.com%2Fother.php%3Fsc.a00000aMbIdXLEVjrQnN6NJAP28k29uLnBpFZXTdPOxyVGEfmDUV6jzkrHrwbCLEmcN6abuahgmVFRylZ3luiOy7yxeRWVQfLYbqQeVyYe_LyPohmwsb0S2jCnTD9AhTLg8oz0pdGnLh3YI3ekS2n9bgUhjt_MNvl8bXkadyVKZWSJBShv8L8N0gpywHV0kASyZ0a8xB37cxR6a7ZGfevPyN35p0.7D_NR2Ar5Od663rj6t8AGSPticrtXFBPrM-kt5QxIW94UhmLmry6S9wiGyAp7BEIu80.TLFWgv-b5HDkrfK1ThPGujYknHb0THY0IAYqmhq1TqpkkoB4vTL30ZN1ugFxIZ-suHYs0A7bgLw4TARqnsKLULFb5yFETL5y_Tp38IMPS0KzmLmqnfKdThkxpyfqnHRkrHfsn1fknsKVINqGujYknWTvP1Tsn0KVgv-b5HDsPW6Lnjmd0AdYTAkxpyfqnHDdn1f0TZuxpyfqn0KGuAnqiD4a0APzm1YvPj0zr0%26ck%3D6565.1.109.334.153.419.166.537%26dt%3D1598447133%26wd%3Dboss%25E7%259B%25B4%25E8%2581%2598%25E5%25AE%2598%25E7%25BD%2591%26tpl%3Dtpl_11534_22836_18980%26l%3D1519403413%26us%3DlinkName%253D%2525E6%2525A0%252587%2525E5%252587%252586%2525E5%2525A4%2525B4%2525E9%252583%2525A8-%2525E4%2525B8%2525BB%2525E6%2525A0%252587%2525E9%2525A2%252598%2526linkText%253DBOSS%2525E7%25259B%2525B4%2525E8%252581%252598%2525E2%252580%252594%2525E2%252580%252594%2525E6%252589%2525BE%2525E5%2525B7%2525A5%2525E4%2525BD%25259C%2525EF%2525BC%25258C%2525E6%252588%252591%2525E8%2525A6%252581%2525E8%2525B7%25259F%2525E8%252580%252581%2525E6%25259D%2525BF%2525E8%2525B0%252588%2525EF%2525BC%252581%2526linkType%253D&g=%2Fwww.zhipin.com%2Fhefei%2F%3Fsid%3Dsem_pz_bdpc_dasou_title&friend_source=0&friend_source=0; __a=87902974.1565422123.1565517032.1598447137.67.3.17.17; __zp_stoken__=ad34bWFcGNEg9f2MMI09HQW01Uh9BH2pubm4jTDhGVyx2XktOZQk0fDFxX0tBf3l5LXsSQD8JZWZ%2FZyU1Qk8UTzdbN2dgCn09KgZ%2BWWtUC1kNI194CW5QBhFtWmx9Al8PKypvJn99YGxUBXJWOQ%3D%3D; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1598450178'
    }
};

let req = https.request(url, options, (res) => {
    console.log(res.statusCode);
    
    res.on('data', chunk => {
        console.log(`获取数据：${chunk}`);     
    });

    res.on('end', () => {
        console.log('结束');       
    });
});

req.on('error', (err) => {
    console.error(err.message);
});

req.end();