import { SiteContent } from './types';

export const CONTENT: Record<'jp' | 'vn', SiteContent> = {
  jp: {
    nav: {
      about: "プロジェクトについて",
      overview: "内容紹介",
      gallery: "ギャラリー",
      flipbook: "フリップブック",
      team: "制作チーム",
    },
    hero: {
      title: "ベトナムの竈神",
      subtitle: "Thần Bếp Việt Nam - Ông Táo",
      group: "第3グループ",
      description: "ベトナムの伝統的なオンタオ（竈神）信仰を、視覚的かつエレガントに紹介するフリップブック・プロジェクト。",
      readButton: "フリップブックを読む",
      exploreButton: "内容を探索する",
    },
    about: {
      title: "プロジェクトについて",
      description: "このプロジェクトは、ベトナムの文化において非常に重要で意味深い「オンタオ（竈神）」という存在について、世代を超えて語り継がれてきた物語や儀礼を体系的にまとめたデジタルブックです。伝統的な信仰の温もりを、現代的なデザインとイラストを通じてお届けします。",
    },
    overview: {
      title: "本の構成",
      sections: {
        origin: {
          title: "第１章 起源・伝来",
          summary: "人類の最も原始的な「火への信仰」から、中国の竈君信仰との融合、そしてベトナム独自の発展を遂げた歴史を紐解きます。",
          image: "/origin.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/4",
        },
        legends: {
          title: "伝説と文化的価値",
          summary: "「二柱の男神と一柱の女神」の切なくも温かい伝説。夫婦の強い絆と、ベトナム人が大切にする『情』の精神を解説します。",
          image: "/legends.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/12",
        },
        rituals: {
          title: "第２章 北部・中部・南部の儀礼",
          summary: "地域ごとに異なるオンタオの見送り方. 北部の鯉、中部の紙の馬、南部の甘い供物など、多様な文化の形を比較します。",
          image: "/rituals.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/22",
        },
        contemporary: {
          title: "第３章 現代社会におけるオンタオ",
          summary: "都市化やデジタル化が進む現代において、オンタオ信仰がどのように形を変え、今もなお家族の絆として息づいているかを探ります。",
          image: "/modern.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/42",
        },
      },
    },
    flipbook: {
      title: "フル・フリップブックを読む",
      description: "細部までこだわったイラストと詳細な解説が含まれる全編を、Heyzineフリップブックでお楽しみいただけます。",
      button: "Heyzineで開く",
    },
    value: {
      title: "プロジェクトの価値",
      description: "文化の保存とストーリーテリングを通じて、ベトナムの豊かな精神世界をより身近なものにすることを目指しています。教育的かつ芸術的なアプローチで、伝統を次世代へ繋ぎます。",
    },
    team: {
      title: "制作クレジット",
      group: "第3グループ (Group 3)",
      members: [
        "Nguyễn Nam Vinh",
        "Vi Nguyễn Ngọc Hân",
        "Nguyễn Thành Trung",
        "Dương Thị Ngọc Bích",
        "Ngô Thị Mỹ Hạnh"
      ],
    },
    footer: {
      rights: "© 2026 第3グループ - ハノイFPT大学 日本語学科 卒業プロジェクト",
    },
  },
  vn: {
    nav: {
      about: "Về dự án",
      overview: "Tổng quan nội dung",
      gallery: "Bộ sưu tập",
      flipbook: "Flipbook",
      team: "Đội ngũ sản xuất",
    },
    hero: {
      title: "Thần Bếp Việt Nam",
      subtitle: "ベトナムの竈神 - Ông Táo",
      group: "Nhóm 3",
      description: "Dự án sách flipbook giới thiệu văn hóa tín ngưỡng Táo Quân của Việt Nam một cách trực quan và tinh tế.",
      readButton: "Đọc Flipbook",
      exploreButton: "Khám phá nội dung",
    },
    about: {
      title: "Về dự án",
      description: "Dự án này là một cuốn sách kỹ thuật số hệ thống hóa các câu chuyện và nghi lễ về 'Ông Táo' - một sự hiện diện vô cùng quan trọng và ý nghĩa trong văn hóa Việt Nam. Chúng tôi mang đến hơi ấm của tín ngưỡng truyền thống thông qua thiết kế và minh họa hiện đại.",
    },
    overview: {
      title: "Cấu trúc cuốn sách",
      sections: {
        origin: {
          title: "Chương 1: Nguồn gốc & Giao thoa",
          summary: "Tìm hiểu lịch sử từ 'tín ngưỡng thờ lửa' nguyên thủy nhất của nhân loại, sự giao thoa với tín ngưỡng Táo Quân Trung Hoa và sự phát triển độc lập của Việt Nam.",
          image: "/origin.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/4",
        },
        legends: {
          title: "Truyền thuyết & Giá trị văn hóa",
          summary: "Truyền thuyết cảm động về 'Hai ông một bà'. Giải thích về sợi dây liên kết bền chặt giữa vợ chồng và tinh thần 'Tình' mà người Việt trân trọng.",
          image: "/legends.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/12",
        },
        rituals: {
          title: "Chương 2: Nghi lễ Bắc, Trung, Nam",
          summary: "Cách tiễn Ông Táo khác nhau theo từng vùng miền. So sánh sự đa dạng văn hóa qua cá chép miền Bắc, ngựa giấy miền Trung và lễ vật ngọt miền Nam.",
          image: "/rituals.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/22",
        },
        contemporary: {
          title: "Chương 3: Ông Táo trong xã hội hiện đại",
          summary: "Khám phá cách tín ngưỡng Ông Táo thay đổi hình thức trong thời đại đô thị hóa và số hóa, nhưng vẫn tồn tại như một sợi dây gắn kết gia đình.",
          image: "/modern.png",
          link: "https://heyzine.com/flip-book/cadce47698.html#page/42",
        },
      },
    },
    flipbook: {
      title: "Đọc toàn bộ Flipbook",
      description: "Thưởng thức toàn bộ cuốn sách với các hình minh họa tỉ mỉ và giải thích chi tiết trên nền tảng Heyzine.",
      button: "Mở trên Heyzine",
    },
    value: {
      title: "Giá trị dự án",
      description: "Nhằm mục đích làm cho thế giới tinh thần phong phú của Việt Nam trở nên gần gũi hơn thông qua việc bảo tồn văn hóa và kể chuyện. Kết nối truyền thống với thế hệ mai sau bằng cách tiếp cận giáo dục và nghệ thuật.",
    },
    team: {
      title: "Đội ngũ thực hiện",
      group: "Nhóm 3 (Group 3)",
      members: [
        "Nguyễn Nam Vinh",
        "Vi Nguyễn Ngọc Hân",
        "Nguyễn Thành Trung",
        "Dương Thị Ngọc Bích",
        "Ngô Thị Mỹ Hạnh"
      ],
    },
    footer: {
      rights: "© 2026 Nhóm 3 - Đồ án tốt nghiệp Khoa tiếng Nhật, Đại học FPT Hà Nội",
    },
  },
};

export const HEYZINE_LINK = "https://heyzine.com/flip-book/cadce47698.html";
