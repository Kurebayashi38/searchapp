//グローバル関数
var lat;
var lng;

// ユーザーの端末がGeoLocation APIに対応しているかの判定

// 対応している場合
if( navigator.geolocation ){
	// 現在地を取得
	navigator.geolocation.getCurrentPosition( //一秒だけ現在位置情報を取得する　

		// [第1引数] 取得に成功した場合の関数
		function( position ){
			// 取得したデータの整理
			var data = position.coords ;

			// データの整理
			lat = data.latitude ;
			lng = data.longitude ;

			// HTMLへの確認のための書き出し
			document.getElementById( 'result' ).innerHTML = '<dl><dt>緯度</dt><dd>' + lat + '</dd><dt>経度</dt><dd>' + lng ;

		},

		// [第2引数] 取得に失敗した場合の関数
		function( error ){
			// エラーコード(error.code)の番号
			// 0:UNKNOWN_ERROR				原因不明のエラー
			// 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
			// 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
			// 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

			// エラー番号に対応したメッセージ
			var errorInfo = [
				"原因不明のエラーが発生しました…。" ,
				"位置情報の取得が許可されませんでした…。" ,
				"電波状況などで位置情報が取得できませんでした…。" ,
				"位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
			] ;

			// エラー番号
			var errorNo = error.code ;

			// エラーメッセージ
			var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;

			// アラート表示
			alert( errorMessage ) ;

			// HTMLに書き出し
			document.getElementById("result").innerHTML = errorMessage;
		} ,

		// [第3引数] オプション
		{
			"enableHighAccuracy": false,
			"timeout": 8000,
			"maximumAge": 2000,
		}

	) ;
}

// 対応していない場合
else{
	// エラーメッセージ
	var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;

	// アラート表示
	alert( errorMessage ) ;

	// HTMLに書き出し
	document.getElementById( 'result' ).innerHTML = errorMessage ;
}



// Enterキー押下時、送信処理が実行する
window.document.onkeydown = function(event){


	//動的にURLを作成する--------------------------------------------------
	form.addEventListener('formdata', (e) => {
		var fd = e.formData;
		
		// 緯度と経度のデータをセット
		fd.set('lat', lat);
		fd.set('lng', lng);
	  });
    //--------------------------------------------------------------------
    if (event.key === 'Enter') { //エンターキーが押されたら送信される

        document.form.submit();
		document.form.action = "result.html";
    }

	document.form.action = "result.html";
}




