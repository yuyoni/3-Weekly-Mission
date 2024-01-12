export default function shareKakao(route, title) {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "폴더 이름",
        description: "폴더 설명",
        imageUrl: "폴더 이미지 url",
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "바로가기",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
}
