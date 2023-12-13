$httpClient.get(
  "https://api.lolicon.app/setu?apikey=&r18=2&keyword=&num=1",
  (error, response, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      let obj = JSON.parse(data);
      if (obj.code == 0 && obj.data.length) {
        let picture = encodeURI(obj.data[0].url);

        $notification.post(
          "💢靓图推送·" + obj.data[0].title || "💢每日靓图",
          obj.data[0].author ||
            "" + obj.data[0].tags[0] ||
            "" + obj.data[0].tags[1] ||
            "",
          {url:picture}
        );
      }
    }
  }
);

setTimeout(() => {
  $done({});
}, 10000);

