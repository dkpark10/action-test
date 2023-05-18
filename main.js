/* eslint-disable @typescript-eslint/no-var-requires */
const { WebClient } = require("@slack/web-api");
const axios = require("axios");

/**
 * @description 허가되지 않은 인증서 통과하기 위한 코드
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(async function () {
  let token;
  const isLocalSave = process.argv[2] && process.argv[2] === "local";
  if (isLocalSave) {
    token = require("../../resources/static/keys").slackBotToken;
  } else {
    token = process.env.SLACK_BOT_TOKEN;
  }
  const web = new WebClient(token);

  const lessThan10 = (value) => (value < 10 ? `0${value}` : String(value));

  const cjShoppingUrl = "https://shopping.zum.com/cjone";
  const date = new Date();
  const year = date.getFullYear();
  const month = lessThan10(date.getMonth() + 1);
  const day = lessThan10(date.getDate());
  const hour = lessThan10(date.getHours());
  const minutes = lessThan10(date.getMinutes());
  const today = date.getDay();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const updatedTime = `${year}:${month}:${day} ${hour}:${minutes} ${week[today]}요일`;

  try {
    const { data } = await axios.get(cjShoppingUrl);
    const regEx = /window.shoppingZum=[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\s{}[\]/?.,;:|)*~`!^-_+-<>@#$%&↓\\=('"]*\s/g;
 
    const flattendHtml = data
      .split(" ")
      .filter((item) => item !== "")
      .map((item) => {
        if (item.match(/\\n$/g)) {
          return item.slice(0, -2);
        }
        return item;
      })
      .join("");

    const beginIndex = "window.shoppingZum=".length;
    const { cjoneMainData } = JSON.parse(flattendHtml.match(regEx)[0].slice(beginIndex));

    let cjDataMalls = {};
    /**
     * @description mall 속성만 추출한다.
     */
    Object.keys(cjoneMainData).forEach((key) => {
      cjDataMalls = {
        ...cjDataMalls,
        [key]: cjoneMainData[key].map(({ mall }) => ({
          ...mall,
        })),
      };
    });

    const channel = "C04TDGG3FNJ";
    const text = `*${updatedTime}*\n` + "```\n" + JSON.stringify(cjDataMalls, null, 2) + "\n```";
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
