//URLから取得したいオブジェクト
let para = {

  target : "q", //取得したいクエリ
  lat : "lat",
  lng : "lng",

};

//apiから取得したいオブジェクト
let urlParameter = {
  apikey: "d97e536368b43ab4",
  req : "Access-Control-Allow-Origin",
  format: "json",
  range : 4,
  type : "lite",
  //プログラムでlatとlngを追加する

};

//getの内容を変数に格納------------------------------------------------

window.onload = function onLoad() { //webページが表示されると実行

    var params = new URLSearchParams(window.location.search); //パラメータを引数に入れる

    //ｑのクエリがパラメータが含まれていたら値を取得する
    if (params.has(para.lat) == true && params.has(para.lng) == true) { 

      urlParameter.lat = params.get(para.lat); //緯度の中身をオブジェクトに追加
      urlParameter.lng = params.get(para.lng); //経度の中身をオブジェクトに追加

    } else {
      number.innerHTML = "パラメーターはありません。";
    }

    if (params.has(para.target) == true) { 

      urlParameter.radius = params.get(para.target); //targetの中身をオブジェクトに追加
      number.innerHTML = urlParameter.radius + "　の検索結果"; 

    } else {
      number.innerHTML = "パラメーターはありません。";
    }

    requ();
}

//APIを使って店舗情報を取得する-------------------------------------
async function requ (){
  console.log("info");
    //APIURLを動的に作成
    let url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${urlParameter["apikey"]}&lat=${urlParameter["lat"]}&lng=${urlParameter["lng"]}&format=${urlParameter["format"]}`; 
   
    console.log(url);
    const res = await fetch(url ,{
      mode: 'cors'
    })
    .then(response => {
      
    });
    
    //apiの返り値jsonデータを格納する
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    const jdata = await res.text(); //レスポンスをテキスト形式で格納
    console.log(jdata);

}

/*
変数(指定半径)の処理
三平方の定理をつかって距離を求めさらに検索結果をしぼっていく。
var distance  = function(radius){

    


}

*/

