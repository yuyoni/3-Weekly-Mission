import banner from "@public/images/banner.png";

export default function shareKakao(route: string, folderName: string) {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_SHARE_KAKAO_LINK_KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: folderName,
        imageUrl: banner,
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
