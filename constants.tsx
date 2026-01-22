
import { Product, ForumTopic, GameModule } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '人体解剖指南',
    price: 298.00,
    description: '以精致的清线画法详尽展示人体解剖结构。',
    category: '科普书籍',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcK9p0kMiduh2kbuT9l1oRepU8J5T2JTF0GyKYyQXhK_iwxX7VSSq32vwn-1ypzjylEsHHOcDlMdXdpklXiWCc2Cm_QjJIF9l-vmm-NJNK8vy4Uexhs--SxWMsUYKBTmxUdwdu0ZlqdK0T28BVEmmxwinb9pbXwePTe08vmgxYFpG459xiqj8i6qPasjWAfPO4pWAzi3VRrAbNY0HEy0Lgg7u6B3hZA6G_3rjNhNFhQ0HDMPcKwdi0DkC7UF84t-rp3wtLSxbCECs',
    tag: '珍藏版'
  },
  {
    id: '2',
    name: '钢制急救箱',
    price: 210.00,
    description: '耐用的1940年代风格容器，内含现代医疗必需品。',
    category: '医疗器械',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhVd2tSYVSkNpF-q62b4MbWK9dm0ZkxQcCW5Gfqs3Zi7PHPm_eYzz1tSXfelOjQ8AmEzropFE0R7LazW66iIwssVr3iHGoc2uZG34thHOs2yeZNwPArz0nBIQZmS9k9qDI3VGpsSLLB0pZgbqdqpT8ixkMV4a2Mf653jjB8i6-M-ni-ov9dnHOwVpo7926n6bcJ2EsAKNjhJOHbT7ixeH4BZTOCIeqmEw4Q8ZpYi9-hFdq0UiXddnf0kOo1W3oqev9M0UXZVEgG0g'
  },
  {
    id: '3',
    name: '野外显微镜 MK.II',
    price: 1250.00,
    description: '厚实的黄铜结构，配有高精度玻璃光学镜片，专为野外工作设计。',
    category: '医疗器械',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDddJJo5IA9ULod8YgDbUG3CYA9HouqW8XZyXfbYyuK9C3YbGc7OQOxzG6nfNdz4Iafmr6p86E2W05c9MWTVOEhBpOAYYEHo71LTWIqUD6wip6Wdm9ATWHWvvdTw6fEgeuU2qMXUTxX6bIOzbzoRiLFseJee9TS-ck77VkbkjutL9yPFJf3PRSUsyAaWLkUchTLBxYpFgujICouLKBabfpOcur4h0ShRUkcdoqrQPr_kCRgzS3bKp3kdrFuoLG47RZYTNgIXORgqE',
    tag: '稀有发现'
  },
  {
    id: '4',
    name: '活力复合维生素B',
    price: 128.00,
    description: '专为长期科研工作设计的科学配方，保持思维清晰与专注。',
    category: '补充剂',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsxVW-JmdbGXsk1naxCKBSANtaaVPZHafu0mPGPB8f1uxlX8jx3iJohAv9g2QRDZaXoxw9VqSZkpIxVM9T7h1YCxWQ1geltl9iU-BHllgWrYMVFxYy97ajHgvQnvpw7OZzpNkp9E-g4Guug1JUXr71ETpWisQzCYHuD_RZk5fw-LEG87vi3mqax-inqI6yOVixmJ30ZIHW9MN07Kw_s4rP1tXLhLNRry_cjTp_WH6YRzcS1sdy9t0Q-1MhM1arbHgjxCWRUBdR8yc'
  }
];

export const TOPICS: ForumTopic[] = [
  {
    id: '1',
    title: '深入了解高血压：无声的健康杀手',
    author: '阿道克医生',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPe-w52d1d89-3NNc5FcvFxZfz3TD9cddOR2U94xDm5Pc5Xsfs6PEPW5Pgd08WKulIxnTB1ZzH1jrP1YOpOLS0dpiul_OnbiIMyQjuYByWcuWN1HNwYB2Ti547EeVymuowVa6RixFmtMdeSSoGRwJ-XfgZY5cwcLp4fa_l0BiWSCks_eqNTL4S7ZJXzM_CO9zSAh2NPNp3nT9SNRsJjQALbPnxgP4rldxbQcr3GhMtAIf4QgCHreHyymGRUBnqeTDHHFvkzb7_jU',
    replies: 124,
    lastPosted: '2 小时前',
    lastPostedBy: '白雪医学',
    category: '全科健康',
    pinned: true
  },
  {
    id: '2',
    title: '睡眠科学：为何保证 8 小时睡眠是关键',
    author: '卡尔库鲁斯教授',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyd8j0eAWKTMGiXxZ7ld-Ej3QsKvSNtGMBQ7u5iq-GfCqTtqyZpHN0_zkziiGp0gf3kNECGx_SISDTNutSIm0Rk6xFnXBocViyjvFjrH-bOaSCNEq4lIaAv47bgN0bFldRclxX-t6NcfYcPolTE_ZqgjGGbcqCT1TuHeKjWjGCQetGD5UmeDzX4pAVNEstWl5hwVPfUrbG651ijiiOrtTSR32qmOEvkxNcB_QkFmXpXjG95f81PA8zvRjCMKylqQ52iSvgs5JfgGA',
    replies: 89,
    lastPosted: '5 小时前',
    lastPostedBy: '追梦人99',
    category: '睡眠科学'
  },
  {
    id: '3',
    title: '疫苗接种后注意事项与副作用解答',
    author: '丁丁医学',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzqwdXROoBtJbpfhy_G8yqlb7QNQ5LY8wVp8ybJ7D_0xBiwGpI0lXuPEYngyJEUN0z_kCvM2LZns_9OZU98D3V53WbXw9irMz5TEx26IHCsQjD5xhbHyRUefyq9OURW7kGdXnjGtdueStusANsiQQcrDwp7YkKgPz2x3LZV3YsFBxR4tukN_ibTfYRhUm3QzfgqlGgDunWUPTh_yFeqJGcgBkTx7d40JBD14LUs0Z4gMJi_YU36rZfB3-KMsMxmVluJdZYisy7lMo',
    replies: 256,
    lastPosted: '10 分钟前',
    lastPostedBy: '汤姆森医生',
    category: '儿科'
  }
];

export const GAMES: GameModule[] = [
  {
    id: '1',
    title: '解剖对对碰',
    description: '在时间耗尽前识别出骨骼结构！这是一场对解剖学术语储备的真正考验。',
    level: '等级 1',
    icon: 'skeleton',
    bg: '#ffecb3'
  },
  {
    id: '2',
    title: '症状大侦探',
    description: '倾听患者的主诉并对照临床体征。解开病例背后的真相！',
    level: '疑案',
    icon: 'search_check',
    bg: '#c8e6c9'
  },
  {
    id: '3',
    title: '复古手术模拟器',
    description: '经典的1950年代手术室行动。在这个模拟器中需要一双极其稳健的手。',
    level: '复古',
    icon: 'vital_signs',
    bg: '#bbdefb'
  }
];
