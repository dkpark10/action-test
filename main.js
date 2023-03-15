const { WebClient } = require("@slack/web-api");

/**
 * @description 허가되지 않은 인증서 통과하기 위한 코드
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(async function () {

  const isLocalSave = process.argv[2] && process.argv[2] === "local";

  const token = isLocalSave ? require("./secret") : process.env.SLACK_BOT_TOKEN;
  const web = new WebClient(token);

  const baseURL = "http://api.shopping.zum.com:8080/data/front?slot=cjShoppingTabV1";
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const today = date.getDay();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const updatedTime = `${year}:${month}:${day} ${hour}:${minutes} ${week[today]}요일`;

  try {
    const channel = "#쇼핑로그";
    const text = `${updatedTime} 테스트 텍스트`;

    const result = await web.chat.postMessage({
      channel,
      text,
    });

    if (result?.ok && result.ok) {
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
})();
