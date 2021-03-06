const DEFAULT_ICON = "https://reactjs.org/favicon.ico"
const apps = {
  news: {
    title: "News & Readings",
    icon: "",
    apps: [
      {
        name: "Any Knew",
        url: "https://www.anyknew.com/",
        icon: "https://f0cdn.anyknew.com/web/img/icons/apple-touch-icon-152x152.png"
      },
      {
        name: "The Top",
        url: "https://the.top/",
        icon: "https://the.top/favicon.ico"
      },
      {
        name: "果汁排行榜",
        url: "http://guozhivip.com/rank/",
        icon: "http://guozhivip.com/images/ic.ico"
      },
      {
        name: "知妖",
        url: "https://www.cbaigui.com/",
        icon: "https://static.cbaigui.com/images/2020/10/cropped-logo.jpg!full",
      },
      {
        name: "科塔学术",
        url: "https://site.sciping.com/",
        icon: "https://site.sciping.com/images/fav.ico"
      },
      {
        name: "Slant",
        url: "https://www.slant.co/",
        icon: "https://www.slant.co/images/favicon.png"
      },
      {
        name: "Product Hunt",
        url: "https://www.producthunt.com/",
        icon: "https://ph-static.imgix.net//favicon.ico"
      },
      {
        name: "大数据导航",
        url: "http://hao.199it.com/",
        icon: "http://hao.199it.com/favicon.ico"
      },
      {
        name: "softonic",
        url: "https://en.softonic.com/",
        icon: "https://sc.sftcdn.net/images/34fb4-e13e1.ico"
      },
      {
        name: "网易数读",
        url: "https://data.163.com/special/datablog/?_pc=1",
        icon: "https://data.163.com/favicon.ico"
      },
      {
        name: "世界网址大全",
        url: "http://www.world68.com/",
        icon: "http://www.world68.com/favicon.ico"
      },
      {
        name: "FOSSHUB",
        url: "https://www.fosshub.com/",
        icon: "https://www.fosshub.com/media/favicon/favicon-16x16.png"
      },
    ]
  },
  stock: {
    title: "Stock Market",
    icon: "",
    apps: [
      {
        name: "Ark追踪神器",
        url: "https://ark.alien-tomato.com/",
        icon: "https://ark.alien-tomato.com/logo.png"
      },
      {
        name: "Ark Track",
        url: "https://www.arktrack.com/",
        icon: "https://www.arktrack.com/assets/favicon-32x32.png",
      },
      {
        name: "TradingView",
        url: "https://www.tradingview.com/",
        icon: "https://www.tradingview.com/favicon.ico",
      },
      {
        name: "Option Profit Calc",
        url: "https://www.optionsprofitcalculator.com/",
        icon: "https://cdn.jsdelivr.net/gh/opcalc/v2-assets@2.4.59/favicon.ico",
      },
      {
        name: "TipRanks",
        url: "https://www.tipranks.com/",
        icon: "https://tr-frontend-cdn.azureedge.net/static/v1/static/images/logo/tipranks/favicon.ico",
      },
      {
        name: "Penny Stocks",
        url: "https://pennystocks.com/",
        icon: "https://pennystocks.com/wp-content/uploads/2019/03/cropped-pennystocks-favicon-32x32.jpg",
      },
      {
        name: "ivolatility",
        url: "https://www.ivolatility.com/",
        icon: "https://www.ivolatility.com/favicon.ico",
      },
    ]
  },
  video: {
    title: "Videos",
    icon: "",
    apps: [
      {
        name: "IFVod",
        url: "https://www.ifvod.tv/",
        icon: "https://www.ifvod.tv/assets/images/logos/logo.png"
      },
      {
        name: "gimy剧迷",
        url: "https://gimy.tv",
        icon: "https://gimy.tv/favicon.ico"
      },
      {
        name: "欧乐影院",
        url: "https://www.olevod.com/",
        icon: "https://www.olevod.com/upload/site/20201117-1/08aee3974ca3d001ceab066233599789.png"
      },
      {
        name: "机器猫 TV",
        url: "https://zhjgh.github.io/jiqimao-pc/",
        icon: "https://zhjgh.github.io/jiqimao-pc/dist/images/logo.png"
      },
      {
        name: "胖子视频",
        url: "https://www.pangzitv.com/",
        icon: DEFAULT_ICON
      },
    ]
  },
  games_platform: {
    title: "Web Game Platforms",
    icon: "",
    apps: [
      {
        name: "街机大全！",
        url: "https://www.yikm.net/",
        icon: DEFAULT_ICON
      },
      {
        name: "在线dos游戏",
        url: "https://dos.zczc.cz/",
        icon: "https://dos.zczc.cz/static/icon/apple-touch-icon.png"
      },
      {
        name: "Crazy Games",
        url: "https://www.crazygames.com/",
        icon: "https://images.crazygames.com/favicons/favicon-32x32.png"
      },
      {
        name: "KBH Games",
        url: "https://kbhgames.com/",
        icon: DEFAULT_ICON
      },
      {
        name: "paco Games",
        url: "https://www.pacogames.com/",
        icon: "https://www.pacogames.com/favicon.ico"
      },
      {
        name: "畅玩街机联机",
        url: "https://play.wo1wan.com/",
        icon: "https://static.wo1wan.com/www/favicon.ico"
      },
      {
        name: "灵动游戏",
        url: "http://www.mhhf.com/",
        icon: "http://www.mhhf.com/favicon.ico"
      },
      {
        name: "GIT游戏",
        url: "http://www.gityx.com/",
        icon: "http://www.gityx.com/favicon.ico"
      },
      {
        name: "魔塔H5列表",
        url: "http://h5mota.com/index.php",
        icon: "http://h5mota.com/favicon.ico"
      },
    ],
  },
  web_games: {
    title: "Web Games",
    icon: "",
    apps: [
      {
        name: "红警联机版",
        url: "https://game.chronodivide.com/",
        icon: "https://game.chronodivide.com/favicon.ico"
      },
      {
        name: "Sudoku",
        url: "https://sudoku.jull.dev/",
        icon: "https://sudoku.jull.dev/favicon.ico",
      },
      {
        name: "Mahjong",
        url: "https://mahjong.jull.dev/",
        icon: "https://mahjong.jull.dev/favicon.ico",
      },
      {
        name: "Pacman",
        url: "https://bobrov.dev/pacman-pwa/index.html",
        icon: "https://bobrov.dev/pacman-pwa/apple-touch-icon.png"
      },
      {
        name: "The Cube",
        url: "https://bsehovac.github.io/the-cube/",
        icon: "https://bsehovac.github.io/the-cube/assets/icons/favicon-16x16.png"
      },
      {
        name: "2048",
        url: "https://2048-opera-pwa.surge.sh/",
        icon: "https://2048-opera-pwa.surge.sh/favicon.ico",
      },
      {
        name: "ThreesJS",
        url: "http://threesjs.com/",
        icon: "http://threesjs.com/favicon.ico",
      },
      {
        name: "Flappy Bird",
        url: "https://flappybird.io/",
        icon: "https://flappybird.io/favicon.ico",
      },
      {
        name: "纸飞机",
        url: "https://paperplanes.world/",
        icon: "https://paperplanes.world/assets/meta/icon-192.png",
      },
    ]
  },
  comic: {
    title: "Comic",
    icon: "",
    apps: [
      {
        name: "风车动漫",
        url: "https://www.dm530p.org/",
        icon: "https://cdn.jsdelivr.net/gh/kmioss/xmoss6/yxsf/fc_pic/favicon.ico"
      },
      {
        name: "快看漫画",
        url: "https://m.kuaikanmanhua.com/",
        icon: "https://static3w.kuaikanmanhua.com/static/img/favicon.ico"
      },
      {
        name: "动漫之家",
        url: "https://m.dmzj.com/",
        icon: "https://m.dmzj.com/images/head_logo.gif"
      },
      {
        name: "看漫画",
        url: "https://www.manhuagui.com/",
        icon: "https://m.manhuagui.com/favicon.ico"
      },
      {
        name: "一直看动漫",
        url: "https://m.yizhikan.com/manhua",
        icon: "https://m.yizhikan.com/favicon.ico"
      },
    ]
  },
  tools: {
    title: "Tools",
    icon: "",
    apps: [
      {
        name: "KeeWeb",
        url: "https://app.keeweb.info/",
        icon: "https://app.keeweb.info/icons/favicon-16x16.png"
      },
      {
        name: "点心工具",
        url: "https://www.shulijp.com/index.html",
        icon: "https://www.shulijp.com/resources/www/img/favicon.ico"
      },
      {
        name: "在线工具箱",
        url: "http://www.toolzl.com/",
        icon: "http://www.toolzl.com/favicon.ico",
      },
      {
        name: "PDF 24 Tools",
        url: "https://tools.pdf24.org/zh/",
        icon: "https://tools.pdf24.org/static/img/pdf24.png?v=5cf19973",
      },
      {
        name: "度盘下载器",
        url: "https://bdd.fzxx.xyz/",
        icon: "https://bdd.fzxx.xyz/favicon.ico",
      },
      {
        name: "云短信接码平台",
        url: "http://z-sms.com/",
        icon: DEFAULT_ICON,
      },
      {
        name: "Photo Kit",
        url: "https://photokit.com/",
        icon: "https://photokit.com/favicon.ico",
      },
      {
        name: "图片压缩处理",
        url: "http://www.diqibu.com/",
        icon: "http://www.diqibu.com/favicon.ico",
      },
      {
        name: "视频剪辑平台",
        url: "https://zh.pickfrom.net/",
        icon: "https://zh.pickfrom.net/img/fav/favicon.ico",
      },
    ]
  },
}


export {apps};
