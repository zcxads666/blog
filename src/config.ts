/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "助农电商",
    sites: [
      {
        /** 网站标题 */
        title: "电商首页",
        /** 网站 url */
        url: "http://172.26.161.120:81",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
      {
        /** 网站标题 */
        title: "电商后台",
        /** 网站 url */
        url: "http://172.26.161.120:8082",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
    ],
    
  },
  {
    title: "智慧溯源码",
    sites: [
      {
        /** 网站标题 */
        title: "溯源码查询",
        /** 网站 url */
        url: "http://172.26.161.120:82",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
      {
        /** 网站标题 */
        title: "溯源码后台",
        /** 网站 url */
        url: "http://172.26.161.120/",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
      {
        /** 网站标题 */
        title: "溯源码测试",
        /** 网站 url */
        url: "https://img2.imgtp.com/2024/04/21/q9h7jAQp.png",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "智慧助农平台",
  /**
   * 个人博客链接
   */
  BLOG_URL: "",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/zcxads666",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://img2.imgtp.com/2024/04/14/PD4txPbB.png",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎访问",
    
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Index",
    keywords: "Index Page",
    description: "This is index",
  },
};


export default GLOBAL_CONFIG;
