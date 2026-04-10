export const questions = [
  // D1 亲人度
  {
    id: 'q1', dim: 'D1',
    text: '铲屎官下班回家打开门的那一刻，你会？',
    options: [
      { label: '头都不抬，继续舔爪子', value: 1 },
      { label: '瞟一眼，确认是送饭的就行', value: 2 },
      { label: '冲过去蹭腿，喵喵叫到嗓子冒烟', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'D1',
    text: '铲屎官出差三天，你的内心活动是？',
    options: [
      { label: '终于清静了，这房子现在是我的', value: 1 },
      { label: '第二天开始有点想，但不会说', value: 2 },
      { label: '第一晚就对着门口嚎，差点把邻居报警', value: 3 }
    ]
  },
  // D2 领地意识
  {
    id: 'q3', dim: 'D2',
    text: '铲屎官新买了一个沙发，你的第一反应是？',
    options: [
      { label: '无所谓，哪里都能睡', value: 1 },
      { label: '先闻一闻，然后在上面躺一下宣布主权', value: 2 },
      { label: '用脸把每个角都蹭一遍，不蹭完不算我的', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'D2',
    text: '另一只猫坐在了你常睡的位置上，你会？',
    options: [
      { label: '算了，换个地方睡', value: 1 },
      { label: '在旁边坐着用眼神施压', value: 2 },
      { label: '直接一巴掌扇过去，这是我的！', value: 3 }
    ]
  },
  // D3 社牛指数
  {
    id: 'q5', dim: 'D3',
    text: '家里来了客人，你会？',
    options: [
      { label: '钻到床底，客人走了才出来', value: 1 },
      { label: '远远观察，看着不像坏人再说', value: 2 },
      { label: '直接跳到客人腿上，开始表演翻肚子', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'D3',
    text: '在小区里遇到一只陌生猫，你的态度是？',
    options: [
      { label: '绕道走，假装没看见', value: 1 },
      { label: '保持安全距离，互相闻闻屁股', value: 2 },
      { label: '主动凑上去蹭脸，试图交个朋友', value: 3 }
    ]
  },
  // D4 夜行指数
  {
    id: 'q7', dim: 'D4',
    text: '凌晨三点，你最可能在干什么？',
    options: [
      { label: '和铲屎官一起睡觉，正常作息', value: 1 },
      { label: '偶尔醒来喝口水，然后继续睡', value: 2 },
      { label: '在走廊里百米冲刺，顺便把花瓶推下桌', value: 3 }
    ]
  },
  {
    id: 'q8', dim: 'D4',
    text: '铲屎官半夜被你吵醒，你的反应是？',
    options: [
      { label: '不可能，我睡得比铲屎官还早', value: 1 },
      { label: '哦，吵到了？那我安静一会儿', value: 2 },
      { label: '继续嚎，这只是今晚演唱会的前奏', value: 3 }
    ]
  },
  // D5 活力值
  {
    id: 'q9', dim: 'D5',
    text: '铲屎官拿出逗猫棒，你会？',
    options: [
      { label: '看了一眼，翻个身继续睡', value: 1 },
      { label: '玩个三分钟就累了，去喝水', value: 2 },
      { label: '疯扑一小时，直到铲屎官先累倒', value: 3 }
    ]
  },
  {
    id: 'q10', dim: 'D5',
    text: '一天之中你的运动量大概是？',
    options: [
      { label: '从床走到猫碗，就是今天全部运动了', value: 1 },
      { label: '偶尔追追自己尾巴，算锻炼了', value: 2 },
      { label: '上蹿下跳不停歇，跑酷是我的生命', value: 3 }
    ]
  },
  // D6 睡眠深度
  {
    id: 'q11', dim: 'D6',
    text: '铲屎官开了吸尘器，你会？',
    options: [
      { label: '立刻弹射起步逃到柜子顶上', value: 1 },
      { label: '耳朵转了转，翻个身继续睡', value: 2 },
      { label: '完全没反应，铲屎官检查了你的呼吸', value: 3 }
    ]
  },
  {
    id: 'q12', dim: 'D6',
    text: '你一天大概能睡多久？',
    options: [
      { label: '断断续续的，风吹草动就醒', value: 1 },
      { label: '正常十几个小时，标准猫生', value: 2 },
      { label: '二十小时起步，醒着的时间只用来吃', value: 3 }
    ]
  },
  // D7 捕猎欲
  {
    id: 'q13', dim: 'D7',
    text: '窗外飞过一只小鸟，你的反应是？',
    options: [
      { label: '看都不看，和我有什么关系', value: 1 },
      { label: '嘴巴发出"咔咔咔"声，但不会行动', value: 2 },
      { label: '瞳孔放大，屁股左右摇摆，准备发射', value: 3 }
    ]
  },
  {
    id: 'q14', dim: 'D7',
    text: '铲屎官脚趾在被子里动了一下，你会？',
    options: [
      { label: '和我无关，继续舔毛', value: 1 },
      { label: '盯着看了看，按捺住了冲动', value: 2 },
      { label: '猛扑上去一口咬住，猎杀本能启动', value: 3 }
    ]
  },
  // D8 好奇心
  {
    id: 'q15', dim: 'D8',
    text: '铲屎官拿回来一个快递箱，你会？',
    options: [
      { label: '不感兴趣，又不是猫粮', value: 1 },
      { label: '等铲屎官拆完了再去闻闻', value: 2 },
      { label: '铲屎官还没拆我已经钻进去了', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'D8',
    text: '家里出现了一个你从没见过的东西（比如菠萝），你会？',
    options: [
      { label: '不认识就不认识，与我何干', value: 1 },
      { label: '远远地看着，伸爪子碰一下就跑', value: 2 },
      { label: '凑上去闻、舔、拍、推，研究到底', value: 3 }
    ]
  },
  // D9 破坏力
  {
    id: 'q17', dim: 'D9',
    text: '桌上有一个杯子，你路过的时候会？',
    options: [
      { label: '正常路过，杯子和我两不相干', value: 1 },
      { label: '用爪子碰一下，但没推下去', value: 2 },
      { label: '一爪子推下去，看它碎的瞬间灵魂得到升华', value: 3 }
    ]
  },
  {
    id: 'q18', dim: 'D9',
    text: '铲屎官新买的窗帘，你怎么看？',
    options: [
      { label: '一块布而已，没什么想法', value: 1 },
      { label: '蹭蹭就好，不至于毁了它', value: 2 },
      { label: '这不就是室内攀岩墙吗？冲！', value: 3 }
    ]
  },
  // D10 傲娇值
  {
    id: 'q19', dim: 'D10',
    text: '铲屎官伸手想摸你，你的第一反应是？',
    options: [
      { label: '直接把头凑过去，摸！快摸！', value: 1 },
      { label: '看心情，有时让摸有时咬一口', value: 2 },
      { label: '优雅地躲开，但五分钟后自己蹭过来', value: 3 }
    ]
  },
  {
    id: 'q20', dim: 'D10',
    text: '铲屎官叫你的名字，你会？',
    options: [
      { label: '立刻跑过去，尾巴竖得笔直', value: 1 },
      { label: '耳朵动了一下表示听到了', value: 2 },
      { label: '假装没听见，等铲屎官走了偷偷跟过去', value: 3 }
    ]
  },
  // D11 戏精指数
  {
    id: 'q21', dim: 'D11',
    text: '猫碗空了，你会怎么告诉铲屎官？',
    options: [
      { label: '安静地坐在碗旁边等着', value: 1 },
      { label: '叫两声提醒一下', value: 2 },
      { label: '躺在猫碗旁边装死，发出虚弱的喵声', value: 3 }
    ]
  },
  {
    id: 'q22', dim: 'D11',
    text: '铲屎官不小心踩到你尾巴，你会？',
    options: [
      { label: '疼是疼了，但没啥表情', value: 1 },
      { label: '叫一声表示抗议', value: 2 },
      { label: '惨叫三分钟，瘸着腿走开，虽然根本没事', value: 3 }
    ]
  },
  // D12 记仇值
  {
    id: 'q23', dim: 'D12',
    text: '铲屎官强行给你洗了个澡，洗完后你会？',
    options: [
      { label: '吹干就好了，该吃吃该睡睡', value: 1 },
      { label: '生气一会儿，给罐头就和好', value: 2 },
      { label: '连续三天在铲屎官枕头上拉屎', value: 3 }
    ]
  },
  {
    id: 'q24', dim: 'D12',
    text: '去了一趟医院被扎了一针，回来后你会？',
    options: [
      { label: '回来就忘了，该干嘛干嘛', value: 1 },
      { label: '躲了半天，但晚饭还是出来吃了', value: 2 },
      { label: '看到铲屎官拿包就炸毛，创伤记忆永久存档', value: 3 }
    ]
  },
  // D13 挑食度
  {
    id: 'q25', dim: 'D13',
    text: '铲屎官换了一个新牌子的猫粮，你会？',
    options: [
      { label: '管它什么牌子，有得吃就行', value: 1 },
      { label: '闻了闻，勉强吃了，但表情很不情愿', value: 2 },
      { label: '看了一眼就走了，宁死不吃，用绝食表达不满', value: 3 }
    ]
  },
  {
    id: 'q26', dim: 'D13',
    text: '铲屎官在吃东西，你想尝尝，结果发现是蔬菜，你会？',
    options: [
      { label: '蔬菜也吃！什么都吃！', value: 1 },
      { label: '闻了一下，失望地走开', value: 2 },
      { label: '用一种"你居然给我看这个"的眼神审判铲屎官', value: 3 }
    ]
  },
  // D14 适应力
  {
    id: 'q27', dim: 'D14',
    text: '搬到了一个全新的家，你的反应是？',
    options: [
      { label: '躲在角落瑟瑟发抖，三天不吃不喝', value: 1 },
      { label: '小心翼翼地探索，一天后基本适应', value: 2 },
      { label: '到了就开始巡视领地，十分钟后找到最佳睡觉位', value: 3 }
    ]
  },
  {
    id: 'q28', dim: 'D14',
    text: '铲屎官带你去朋友家做客，你会？',
    options: [
      { label: '全程躲在航空箱里不出来', value: 1 },
      { label: '出来但很紧张，紧贴铲屎官', value: 2 },
      { label: '十分钟就开始在别人家跳上跳下了', value: 3 }
    ]
  },
  // D15 颜值管理
  {
    id: 'q29', dim: 'D15',
    text: '你每天花多少时间舔毛打理自己？',
    options: [
      { label: '几乎不舔，毛球结了就结了', value: 1 },
      { label: '饭后舔一舔，基本卫生还是要的', value: 2 },
      { label: '一天至少三小时，每一根毛都要归位', value: 3 }
    ]
  },
  {
    id: 'q30', dim: 'D15',
    text: '铲屎官给你穿了一件衣服，你会？',
    options: [
      { label: '无所谓，穿就穿呗', value: 1 },
      { label: '挣扎一下，但穿上了也凑合', value: 2 },
      { label: '三秒内脱掉并用眼神杀死铲屎官的审美', value: 3 }
    ]
  },
];

export const specialQuestions = [
  {
    id: 'catnip_gate_q1',
    special: true,
    kind: 'catnip_gate',
    text: '你平时有什么特殊爱好？',
    options: [
      { label: '晒太阳发呆', value: 1 },
      { label: '追逐光点', value: 2 },
      { label: '猫薄荷', value: 3 },
      { label: '看窗外的鸟', value: 4 }
    ]
  },
  {
    id: 'catnip_gate_q2',
    special: true,
    kind: 'catnip_trigger',
    text: '你对猫薄荷的态度是？',
    options: [
      { label: '闻一闻就好，保持理智', value: 1 },
      { label: '我已经在地上打滚流口水了，猫薄荷就是我的一切', value: 2 }
    ]
  }
];

export const CATNIP_TRIGGER_QUESTION_ID = 'catnip_gate_q2';
