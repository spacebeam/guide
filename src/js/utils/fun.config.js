var fun = {
  utils: {},
  views: {},
  models: {},
  cache: {templates: {}},
  conf: {},
  containers: {},
  strings: {},
  instances: {}
};

fun.utils.format = function (file, path) {
  return file.replace('%s', path)
};

fun.conf = {
  html: '/src/html',
  uuidTask: 'task_uuid',
  url: {
    tasks: 'https://api.nonsense.ws/tasks/'
  }
};

fun.conf = {
  templates: {
    about: fun.utils.format('%s/about.html', fun.conf.html),
    landing: fun.utils.format('%s/landing.html', fun.conf.html),
    technology: fun.utils.format('%s/technology.html', fun.conf.html),
    research: fun.utils.format('%s/research.html', fun.conf.html),
    terms: fun.utils.format('%s/terms.html', fun.conf.html),
    privacy: fun.utils.format('%s/privacy.html', fun.conf.html),
    subscribe: fun.utils.format('%s/components/subscribe.html', fun.conf.html),
    components: {
      extra: fun.utils.format('%s/components/extra.html', fun.conf.html),
      navbar: fun.utils.format('%s/components/navbar.html', fun.conf.html),
      footer: fun.utils.format('%s/components/footer.html', fun.conf.html),
      subscribe: fun.utils.format('%s/components/subscribe.html', fun.conf.html)
    }
  }
};

fun.strings = {
  nonsenseWorlds: "nonsense.ws",
  openSourceTechnology: "Open Source Technology",
  openResearchLaboratory: "Open Research Laboratory",
  privacyPolicy: "Privacy Policy",
  cloudForestMonkeys: "The Home of Blueberry",
  problemDescribeHere: "Problem: (describe the problem here)",
  solutionDescribeHere: "Solution: (describe your solution here)",
  anIdealDescription: "An ideal description for an issue goes:",
  theGoalFunction: "The goal function",
  spaceLaboratory: "Space laboratory",
  pressStart: "press start",
  nonsenseRuns: "We are all about open-source research in artificial intelligence, distributed systems and high-performance computing.",
  ourMission:"<b>Our Mission</b>: driven by multi-dimensional research provide tools inside a simple environment for play, work and science.",
  ourGoal: "<b>Our Goal</b>: provide a distributed AI toolkit and workspace environment for machines of all ages.",
  challengesArePlayed: "The watcher observes, the fog collapse an event resolve. Time ticks without intervention.",
  theSystemsModelRequire: "The systems model consider the organization as receiving inputs from the environment and delivering outputs to it.",
  thisApproachDoesNot: "This approach does not give prime attention to organizational objectives but to those attributes relevant to any goal.",
  GoalsFunction: "Goals function as starting point analysis leading to a hierarchy of objectives and to a definition of schemas, units, and nodes.",
  ifItWinsAt: "If it wins at <a href='https://starcraft.com' target='_blank'>StarCraft: Brood War</a>, with a system that extract value from information models design for online competition, it's a <b><a href='https://twitter.com/hashtag/KICASS?src=hash' target='_blank'>#kicass</a></b> success; if not, it is to that degree unsuccessful.",
  theOthersSystemModels: "The others are system models that focus on organization general properties and <a href='https://github.com/nonsensews/guide/wiki'>processes</a>.",
  informationModelsAreUsed: "Information models are used in two ways; the first are <a href='https://github.com/nonsensews/research/wiki'>schemas</a> with central focus goals, deterministic objectives.",
  yourPrivacy: "Your Privacy",
  spacewar: "NOT WarCraft in Space!",
  starCraftServe: "<a href='https://starcraft.com' target='_blank'>StarCraft</a> serve as an interesting domain for research, since represent a well defined complex adversarial system which pose a number of interesting AI challenges in areas of planning, manage of uncertainty, domain knowledge exploitation, task decomposition, spacial reasoning and machine learning.",
  ourWorkProcess: "Our work process",
  undecidableDecisions: "Undecidable Decisions",
  theSystemsApproach: "The system approach",
  determineTheRelative: "Determine the relative success or failure of the organization.",
  openSourceCommunity: "open-source community",
  pleaseDoNot: "Please do not create issues for ideas or feature requests.<br><br>Come with clear problems and plausible solutions.",
  weUseTheZmqProcess: "We use the <a href='https://rfc.zeromq.org/spec:42/C4/' target='_blank'>ZeroMQ C4</a> process working on <a href='https://nonsense.ws'>nonsense.ws</a>, which means that every change is tracked as an issue.<br><br>You can either define an issue for a problem and then propose your own patch, or wait for someone else to fix it... you can also come immediately with a patch, and submit that as a pull request, without a separate issue.",
  joinTheCommunity: "Join the community",
  thirdPartyCookies: "Third Party Cookies",
  growByGroups: "Grown like weed by monkeys, artists and research scientists <a href='https://github.com/nonsensews/guide' target='_blank'>focus</a> on system <a href='https://github.com/nonsensews' target='_blank'>resources</a> where human and machine processes discover new information models.",
  spawnAndTrain: "Play, work, and train with chaos and conflict.",
  teamWithArtAndScience: "Team up with artists and scientists that spawn network <a href='https://github.com/nonsensews' target='_blank'>resources</a> where you discover new information models.",
  theOpenSourceLab: "The <a href='/research'>laboratory</a> conducts multidisciplinary <a href='https://github.com/nonsensews/guide' target='_blank'>research</a> in distributed systems, artificial intelligence and high-performance computing.",
  toAchieveOurGoal: "To achieve our goal we focus on general-purpose strategies that networks learn from experience on different environments.",
  weCombineMachine:"We combine machine learning research in a virtual space for public open-source resources, private services and business.",
  whenIsDone: "When is done & future directions",
  curiousSendMessage: "Curious? tweet your message <a href='https://twitter.com/nonsensews' target='_blank'>@nonsensews</a>!",
  behindTheScenes: "Lightweight processes measure and adjust the resources, models, and energy you'll need.",
  weRespectYourPrivacy: "We respect your privacy and we are committed to protect it. We don't sell, share, and show your personal information without your prior permission or written consent or unless required by law. We never collect any information about you except those specifically provided by you or limited information that the browser made available when you visited our site, for example, the IP address while you are on the site, visiting time, the link clicked, the browser type, and cookies.",
  weHaveNoRoad: "We have no roadmaps, no feature requests, no regular meetings, no central planning committees.<br><br>We make a promise: don't break your working space.<br><br>You'll find all types of network services talking to each other inside multiple regions of the cloud multiverse.",
  thirdPartyWebsites: "Third Party Websites",
  dontGetThis: "Read more <a href='/about'>about</a> our <a href='/research'>research</a> and open-source <a href='/technology'>technology</a>",
  weCooperateWith: "We don't cooperate with third-party companies even when you visit our site. We don't need these companies to provide us with some site audience and visits details, we dont share information about your visits. We have no relation not share to anyone your personal data, such as your name, email address or telephone number.",
  about: "About",
  research: "Research",
  technology: "Technology",
  aIlab: "Artificial Intelligence Laboratory",
  ourGitHubOrgIs: "All things live on GitHub at <a href='https://github.com/nonsensews' target='_blank'>@nonsensews</a>.<br>We are an open-source community with a clear <a href='https://github.com/nonsensews/guide' target='_blank'>focus</a>.<br>Every project owner runs their ship as they see fit, our members jump from ship to ship over time.",
  privacyPolicyChanges: "Privacy Policy Changes",
  weHaveAllRights: "We have all rights to change, alter or modify our privacy policy at any time without prior notice. We will immediately post changes on this page and let you get acquainted with them.",
  yoPaper: "M. Čertický, D. Churchill. <a href='http://agents.fel.cvut.cz/~certicky/files/publications/aiide17-certicky-churchill.pdf'>The Current State of StarCraft AI Competitions and Bots</a>. In Proceedings of the AIIDE 2017 Workshop on Artificial Intelligence for Strategy Games.",
  sendMsgAtnon: "Tweet @nonsensews",
  research: "Research",
  technology: "Technology",
  privacy: "Privacy",
  terms: "Terms",
  navigation: "nonsense.ws",
  subscribe: "Open Source AI Research",
  nonsense: "Nonsense Worlds",
  theMultiverse: "The Multiverse"
};
