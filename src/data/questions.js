export const questions = [
  {
    id: 'q1', dim: 'S1',
    text: '朋友说「你这人吧，啥都好，就是太自信了」，你的第一反应是？',
    options: [
      { label: '我有吗……（低头沉思）', value: 1 },
      { label: '确实有点，但也不至于吧', value: 2 },
      { label: '这叫自信？这叫实事求是', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'S1',
    text: '别人当众夸你「你真的很优秀」，你内心更接近哪个？',
    options: [
      { label: '那当然了，不过我一般比较低调', value: 3 },
      { label: '还行吧，也没那么夸张', value: 2 },
      { label: '别别别，我真的没有……', value: 1 }
    ]
  },
  {
    id: 'q3', dim: 'S2',
    text: '半夜三点突然醒来，你脑子里闪过的第一个念头是？',
    options: [
      { label: '我是谁？我在哪？我为什么活着？', value: 1 },
      { label: '明天还要上班……', value: 2 },
      { label: '继续睡，老子的人生不需要在凌晨三点反思', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'S2',
    text: '你觉得自己最大的特点是什么？',
    options: [
      { label: '我能说出三个以上，而且很确定', value: 3 },
      { label: '大概知道，但要想一会儿', value: 2 },
      { label: '每次回答这种问题我都得现编', value: 1 }
    ]
  },
  {
    id: 'q5', dim: 'S3',
    text: '如果给你一个按钮，按下去就能成为世界首富，但代价是一辈子不能躺平。你按吗？',
    options: [
      { label: '躺平是我的信仰，不按', value: 1 },
      { label: '纠结中……能不能半躺？', value: 2 },
      { label: '按烂它！躺平是弱者的借口', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'S3',
    text: '周末可以躺一天什么都不干，你能接受吗？',
    options: [
      { label: '这不就是理想生活吗', value: 1 },
      { label: '偶尔可以，但连续两天会愧疚', value: 2 },
      { label: '完全无法忍受，浪费时间等于犯罪', value: 3 }
    ]
  },
  {
    id: 'q7', dim: 'E1',
    text: '你最好的朋友突然三天没回你消息，你的第一反应是？',
    options: [
      { label: 'ta有ta的生活，没啥大不了的', value: 3 },
      { label: '可能在忙吧，但还是有点在意', value: 2 },
      { label: '完了，ta是不是不想跟我玩了', value: 1 }
    ]
  },
  {
    id: 'q8', dim: 'E1',
    text: '恋爱中，对方说「我需要一点空间」，你心里怎么翻译？',
    options: [
      { label: '「我要分手了」的委婉说法', value: 1 },
      { label: '可能真的只是需要空间吧……吧？', value: 2 },
      { label: '正好我也想打游戏', value: 3 }
    ]
  },
  {
    id: 'q9', dim: 'E2',
    text: '你对待感情的态度更像哪种？',
    options: [
      { label: '要么不爱，爱了就掏心掏肺', value: 3 },
      { label: '看感觉，对的人会多投入', value: 2 },
      { label: '浅尝辄止，保持安全距离', value: 1 }
    ]
  },
  {
    id: 'q10', dim: 'E2',
    text: '遇到一个各方面都很完美的人，你更可能？',
    options: [
      { label: '越完美越危险，保持警惕', value: 1 },
      { label: '会心动，但不至于失去理智', value: 2 },
      { label: '直接All in，这种人错过了就是犯罪', value: 3 }
    ]
  },
  {
    id: 'q11', dim: 'E3',
    text: '理想的关系状态是？',
    options: [
      { label: '各过各的，定期汇合就行', value: 3 },
      { label: '有各自的空间，但关键时刻在一起', value: 2 },
      { label: '24小时黏在一起，上厕所也要报备', value: 1 }
    ]
  },
  {
    id: 'q12', dim: 'E3',
    text: '朋友突然跑到你家说要住一周，你的真实内心活动是？',
    options: [
      { label: '太好了！终于有人陪我了！', value: 1 },
      { label: '可以，但超过三天我可能会开始烦', value: 2 },
      { label: '你是不是对「边界感」这三个字有什么误解', value: 3 }
    ]
  },
  {
    id: 'q13', dim: 'A1',
    text: '你觉得这个世界上好人多还是坏人多？',
    options: [
      { label: '好人多，坏人只是比较吵而已', value: 3 },
      { label: '差不多一半一半吧', value: 2 },
      { label: '坏人多，好人都被坏人变成了坏人', value: 1 }
    ]
  },
  {
    id: 'q14', dim: 'A1',
    text: '在路上被陌生人微笑着打招呼，你的第一反应是？',
    options: [
      { label: '新型诈骗？我先走为妙', value: 1 },
      { label: '礼貌回应一下，但内心保持警惕', value: 2 },
      { label: '开心地回一个！这个世界还是有温暖的', value: 3 }
    ]
  },
  {
    id: 'q15', dim: 'A2',
    text: '公司明确规定不准上班摸鱼，但你的工作已经做完了。你会？',
    options: [
      { label: '当然是摸鱼，规定是死的人是活的', value: 1 },
      { label: '假装在忙，但实际在摸鱼', value: 2 },
      { label: '找领导要新任务，闲着比摸鱼更难受', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'A2',
    text: '排队买奶茶，有人插队到你前面。你会？',
    options: [
      { label: '当场指出来，规则就是规则', value: 3 },
      { label: '不爽但不想起冲突，算了', value: 2 },
      { label: '也想插队，但忍住了', value: 1 }
    ]
  },
  {
    id: 'q17', dim: 'A3',
    text: '你觉得自己活着是为了什么？',
    options: [
      { label: '我有明确的目标和方向，每天都在靠近它', value: 3 },
      { label: '偶尔会想，但想不太明白', value: 2 },
      { label: '活着就行了，想那么多干嘛', value: 1 }
    ]
  },
  {
    id: 'q18', dim: 'A3',
    text: '如果人生是一款游戏，你现在是什么状态？',
    options: [
      { label: '挂机中，等系统自动发奖励', value: 1 },
      { label: '在做支线任务，主线还没想好', value: 2 },
      { label: '正在肝主线，目标是全成就通关', value: 3 }
    ]
  },
  {
    id: 'q19', dim: 'Ac1',
    text: '面对一个有风险但回报巨大的机会，你更像？',
    options: [
      { label: '干就完了，富贵险中求', value: 3 },
      { label: '评估一下再说', value: 2 },
      { label: '风险太大，我还是稳一手', value: 1 }
    ]
  },
  {
    id: 'q20', dim: 'Ac1',
    text: '考试还剩5分钟，有一道大题没做。你会？',
    options: [
      { label: '检查已做的题，确保不丢分', value: 1 },
      { label: '尝试写几步，能拿多少拿多少', value: 2 },
      { label: '直接冲，管他对不对先写满', value: 3 }
    ]
  },
  {
    id: 'q21', dim: 'Ac2',
    text: '菜单上两道菜都想吃但只能选一个，你通常？',
    options: [
      { label: '0.5秒选完，选错了大不了下次再来', value: 3 },
      { label: '稍微想一下就选了', value: 2 },
      { label: '纠结到服务员来催第三次', value: 1 }
    ]
  },
  {
    id: 'q22', dim: 'Ac2',
    text: '朋友问你「今晚吃什么」，你最可能的回答是？',
    options: [
      { label: '你定吧我都行（但其实都不太行）', value: 1 },
      { label: '要不……火锅？你觉得呢？', value: 2 },
      { label: '走，吃烤肉，不接受反驳', value: 3 }
    ]
  },
  {
    id: 'q23', dim: 'Ac3',
    text: '你买了一本很想看的书，最可能的结局是？',
    options: [
      { label: '当天就看完了，不看完睡不着', value: 3 },
      { label: '看了一半，等有空再看（大概率不会有空）', value: 2 },
      { label: '放在书架上吃灰，等哪天心血来潮', value: 1 }
    ]
  },
  {
    id: 'q24', dim: 'Ac3',
    text: '领导说「这个方案下周一交」，你通常？',
    options: [
      { label: '周日晚上11点开始做', value: 1 },
      { label: '周中想想，周五开始动手', value: 2 },
      { label: '当天就开始了，周五之前搞定', value: 3 }
    ]
  },
  {
    id: 'q25', dim: 'So1',
    text: '参加一个只认识主办人的派对，你最可能？',
    options: [
      { label: '主动出击，争取今晚认识在场所有人', value: 3 },
      { label: '有人来搭话就聊，没人来也不勉强', value: 2 },
      { label: '找个角落坐着玩手机等结束', value: 1 }
    ]
  },
  {
    id: 'q26', dim: 'So1',
    text: '电梯里只有你和一个陌生人，你会？',
    options: [
      { label: '盯着楼层数字装忙', value: 1 },
      { label: '如果对方先说话我就接', value: 2 },
      { label: '主动打个招呼或评论天气', value: 3 }
    ]
  },
  {
    id: 'q27', dim: 'So2',
    text: '新认识的朋友第二天就叫你「兄弟/姐妹」，你感觉？',
    options: [
      { label: '我们才认识24小时你搁这亲戚认呢', value: 3 },
      { label: '有点快但也不是不行', value: 2 },
      { label: '挺好的，说明关系进展快', value: 1 }
    ]
  },
  {
    id: 'q28', dim: 'So2',
    text: '你借给朋友的充电器，ta用了一周也没还。你会？',
    options: [
      { label: '无所谓啦朋友之间不用计较', value: 1 },
      { label: '有点在意但不好意思说', value: 2 },
      { label: '直接要回来，借是情分还是本分', value: 3 }
    ]
  },
  {
    id: 'q29', dim: 'So3',
    text: '在领导面前和在好朋友面前，你是同一个人吗？',
    options: [
      { label: '完全不是同一个物种', value: 3 },
      { label: '多少会调整一下说话方式', value: 2 },
      { label: '是的，我就是这么耿直', value: 1 }
    ]
  },
  {
    id: 'q30', dim: 'So3',
    text: '有人说你「太会装了」，你会？',
    options: [
      { label: '我不会装啊，我说的都是真话', value: 1 },
      { label: '适当的社交礼仪而已', value: 2 },
      { label: '这不叫装，这叫社交艺术', value: 3 }
    ]
  }
];

export const specialQuestions = [
  {
    id: 'drink_gate_q1',
    special: true,
    kind: 'drink_gate',
    text: '深夜独处时，你最常干什么？',
    options: [
      { label: '刷手机到天亮', value: 1 },
      { label: '冥想/看书/健身', value: 2 },
      { label: '来两杯，微醺最舒服', value: 3 },
      { label: '打游戏到上头', value: 4 }
    ]
  },
  {
    id: 'drink_gate_q2',
    special: true,
    kind: 'drink_trigger',
    text: '你和酒精的关系是？',
    options: [
      { label: '偶尔喝喝，点到为止', value: 1 },
      { label: '酒是我的灵魂燃料，喝到飞起才是人生巅峰', value: 2 }
    ]
  }
];

export const DRUNK_TRIGGER_QUESTION_ID = 'drink_gate_q2';
