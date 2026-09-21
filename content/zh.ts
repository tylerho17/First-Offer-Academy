// =====================================================================
// Machine-drafted — must be reviewed by a native speaker before publishing.
// 机器草拟 —— 发布前必须由母语人士审阅。
//
// After review, set `zhReviewed: true` in content/site.ts. Until then /zh is
// noindex, not in the sitemap, and not linked from the site.
// Every fact here mirrors the English site (content/site.ts, program.ts).
// =====================================================================

import { site } from "./site";

const c = site.cohort;

export const zh = {
  meta: {
    title: "给家长的介绍（中文）",
    description: "First Offer Academy 是一个为期12周的实习求职项目，帮助大一、大二学生申请金融、咨询、市场营销和科技领域的实习。",
  },
  draftNotice: "草稿：本页为机器翻译初稿，尚未经母语人士审阅。如有疑问，请以英文网站为准。 (Draft: machine-translated, not yet reviewed.)",
  eyebrow: "给家长的介绍",
  title: "您孩子的第一份实习，不应取决于能否进入某个社团。",
  lede: "First Offer Academy 是一个为期12周的项目，面向大一、大二学生（包括社区大学学生），从零开始教他们如何申请金融、咨询、市场营销和科技领域的实习。",

  program: {
    title: "项目内容",
    items: [
      "每周一次90分钟的小组课程：公布每周进度、讲授一项技能、现场练习，并确定本周目标。",
      "每周一次60分钟的一对一辅导（共12次）：导师逐条检查学生的求职记录，解决当前最大的障碍，现场修改简历、邮件和面试回答，并写下未来7天的具体目标。",
      "三人互助小组：两位同学每周日查看彼此的进度，互相督促。",
      "简历、联络邮件和面试的全面反馈，以及第11–12周的模拟面试评分。",
      "第9–10周按方向分组：金融、咨询、市场营销或科技。",
    ],
  },

  parents: {
    title: "家长能看到什么",
    items: [
      "每两周一份一页的进度报告：学生所处的阶段和各项数据（邮件、电话、面试）。报告只发给学生指定的家长或监护人。",
      "第12周的家庭成果会：学生向您展示全部求职记录，并对比第1周和第12周录制的自我介绍视频。",
      "如果学生连续两周未完成每周最低目标，我们会安排与学生和家长的通话，一起调整计划。",
    ],
  },

  format: {
    title: "时间与形式",
    items: [
      `创始班将于${c.start === "January 2027" ? "2027年1月" : c.start}开课，共${c.seats}个名额，分为三个8人小班。`,
      site.format ? `上课形式：${site.format}` : "上课形式（线上或线下）及具体时间将在报名截止前公布。",
    ],
  },

  price: {
    title: "费用",
    items: [
      `学费：${c.price}，或分三期付款，每期$1,700。`,
      `${c.deposit}可退还订金即可保留名额，并计入学费。`,
      "所有付款均通过 Stripe 安全处理，我们不会看到或保存您的银行卡号。",
      "具体退款条款请参阅英文版《退款与付款政策》。",
    ],
  },

  promise: {
    title: "我们不承诺什么",
    body: "我们不承诺实习录用、特定公司或任何特定结果。录用决定权在雇主手中。我们承诺的是一次完整执行的求职过程：每周课程、一对一辅导、对每项作业的反馈，以及一份按明确标准评估的完整记录。",
  },

  cta: {
    title: "预约免费通话",
    body: "与创始人 Tyler Ho 通话20分钟，了解您孩子的情况以及本项目是否适合。通话以英文进行。",
    button: "预约家长通话",
    email: "或发送邮件至",
    english: "查看英文网站",
  },
};
