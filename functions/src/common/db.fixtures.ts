import { Character, Characters, Global, Quotas, Team, Teams } from './types';

const team1: Team = {
  uid: 'team1',
  email: 'team1@finding-dollar.com',
  name: 'team1',
};
const team2: Team = {
  uid: 'team2',
  email: 'team2@finding-dollar.com',
  name: 'team2',
};
const team3: Team = {
  uid: 'team3',
  email: 'team3@finding-dollar.com',
  name: 'team3',
};
const team4: Team = {
  uid: 'team4',
  email: 'team4@finding-dollar.com',
  name: 'team4',
};
const team5: Team = {
  uid: 'team5',
  email: 'team5@finding-dollar.com',
  name: 'team5',
};
const team6: Team = {
  uid: 'team6',
  email: 'team6@finding-dollar.com',
  name: 'team6',
};
const team7: Team = {
  uid: 'team7',
  email: 'team7@finding-dollar.com',
  name: 'team7',
};
const team8: Team = {
  uid: 'team8',
  email: 'team8@finding-dollar.com',
  name: 'team8',
};
const team9: Team = {
  uid: 'team9',
  email: 'team9@finding-dollar.com',
  name: 'team9',
};
const team10: Team = {
  uid: 'team10',
  email: 'team10@finding-dollar.com',
  name: 'team10',
};

export const teams: Teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];

export const adminUser = {
  uid: 'admin',
  email: 'admin@finding-dollar.com',
  name: 'Admin',
};

const designer: Character = {
  id: 'designer',
  name: 'Nemo the Designer',
  biography: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated
    from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong struggled
    to hunt for a job that is relevant to his Mechanical Engineering degree. He then decided to
    join the gig economy, as a freelance designer. He did some research that being a freelancer
    actually earns him a pretty decent salary as a fresh graduate, albeit the wage could be
    inconsistent. Nemo Ong always gets the same question from his relatives: why did he choose
    to be a freelance designer when he actually studied mechanical engineering. This perhaps
    correlates to the social stereotype of medical doctors, engineers and lawyers as prestigious
    occupations. But Nemo Ong -- a man with vision knows there is no one job that is superior
    over others, and a job that he is truly passionate about is the best job for him. The only
    reason why he took up a degree in Mechanical Engineering is because of his parent’s strong
    preference -- for the perceived income stability. While the filial son did follow his
    parents’ advice, Nemo Ong did not let go of his passion and took up a Minor in
    Communications and New Media. Undoubtedly, he thrived in his minor studies, for the genuine
    interest that motivated him to dive deeper into the vertical, even during his free time,
    which he self-learnt user experience and user interface. Nemo Ong is genuinely grateful for
    his current job and appreciates the opportunity to do what he actually loves. <br /><br />
    As an industry professional who graduated with MBA, Dory definitely has a certain extent of
    financial literacy. She’s taking home a total of SGD 5,000 excluding bonuses from the
    company. While she believes that savings are important, she feels like her current
    investment portfolio is sufficient to cover what she needs in the future, thus spending
    almost all her income on things that she wants. She has a habit of using mobile everywhere
    and having the latest phone possible. That leads to her having a fixed 24 months phone
    contract. She loves shopping for handbags and usually spends most of her income on the
    latest editions when her pay comes in every month. While she’s working overseas, she’ll have
    to pay for her own accommodation and that will reduce her total income to spend on her daily
    life. She likes to take private taxis to work in the morning because she prefers to wake up
    later. Her household expenses came from utility bills and maintenance equipment only as she
    doesn’t cook at home. As mentioned, she’s also currently on a student loan for both her
    degree and masters that she’s yet to pay back.
    <br /><br />
    Beyond work, Nemo enjoys spending time with his fiancee. The couple met in university when
    they joined a design competition. Having been with each other for five years, they are now
    in a stable relationship and both of them think it is the right time to settle down. They
    agreed that it is not the best time to tie the knot right now, with the uncertainties of the
    pandemic and their financial position. Their plan is to hold a wedding in three years time.
    The couple loved the idea of having a beach honeymoon, either at Bali or at one of Maldives’
    private resorts. They are planning to save up for that. A good estimation of the wedding in
    2027, excluding the honeymoon plans, goes up to $60,000. Nemo thinks it is an achievable
    goal for him to fork out $900 every month for the next three years. He had his tertiary
    education funded through the ASEAN scholarship and managed to save a pool of $10,000 with
    the prize money and side hustles he did all these years. As a freelance designer now,
    although his income varies across the months, gauging on his personal capabilities and using
    the past year as a reference, he can comfortably bag home $4,000 every month. He has been
    spending a great portion of his income to purchase the latest design software and hardware
    and plans to continue doing so to gain more new clients.`,
  breakdown: [
    {
      name: 'Salary',
      value: 4000,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 100,
      category: 'Expense',
    },
    {
      name: 'Food and Beverages',
      value: 900,
      category: 'Expense',
    },
    {
      name: 'House Rental',
      value: 700,
      category: 'Expense',
    },
    {
      name: 'Savings',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 900,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Design Software and Tools ',
      value: 400,
      category: 'Expense',
    },
  ],
  scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
    Nemo’s future in-laws are respectable businessmen in the timepiece field, and they request
    for the couple to hold a grand wedding, inviting 600 guests, including their clients and
    business partners. Nemo is required to calm his future in-laws. He wants to make sure the
    parents of his girlfriend, Bubbles understand the rationale behind their decision of holding
    an intimate/grand wedding. The expected outcome is to find the consensus without ruining the
    relationship between the couple and their parents. But before this, He wants to seek the
    opinion of Bubbles. After all, they are the ones getting married. If they were to hold a
    grand wedding, he wants to make sure both he and his girlfriend are comfortable with their
    finances since the grand wedding can cost up to S$200,000. They would be more confident
    financially in having an intimate wedding, as the couple just started their career. If they
    had an extra budget, they were thinking of doing a honeymoon in Bali. However, Nemo does
    understand where his future in-laws are coming from.
    <br /><br />
    Action required: The aim of this conversation is to clear the air, convey their decision and
    explain why they decided that this is best for them and their family. He wants to make sure
    that his in-laws understand that the couple respects them and that they are trying to make a
    decision that they are confident with. `,
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/designer.png?alt=media&token=cf9bf8f4-3ffe-437e-9b34-740d5edc286b',
};

const founder: Character = {
  id: 'founder',
  name: 'Nigel the Founder',
  biography: `You have stumbled across a fine young man at the age of 24: Nigel Chang, a
    formal law graduate and now the Chief Technology Officer (CTO) of his startup focusing on
    regulatory technology. Despite his young age, he graduated from the National Tiktok
    University (NTU) two years ago and jumped straight into the startup scene right after he
    graduated with his best friends. He was fortunate to receive a scholarship award from
    OSeeBeeSeeBank and did not have to pay a single cent for his tuition fees. <br /><br />
    With his dedication and passion in the Software Engineering field, he managed to land his
    first full-time job at Turtle Van as a Junior Software Engineer. This allows him to have an
    annual income of SGD 60,000 to survive in the city with the highest cost of living. He is
    currently staying in a private housing flat with 3 other friends paying a monthly rent of
    SGD 1,200 and sharing the utility cost with his friends. Even though his accommodation
    slightly exceeded his budget, its location is 10 minutes walk away from his office.
    <br /><br />
    While he does share a passion for law, he has always wanted to do something different from
    being a compliance attorney. Via an introduction from his peers, he started exploring the
    possibilities to enhance the procedures consisting of endless paperwork in the law industry.
    His company was able to launch a new initiative in the FinTech industry consisting of tools
    to provide anti-fraud and risk management services for digital transactions by tracking
    payment entities. The company’s creativity sparked the interests of clients and investors
    with a client base of more than 100 and is currently in a Series A funding round.
    <br /><br />
    In spite of the high possibility of becoming a millionaire in the near future, Nigel prefers
    to invest his money back into his company rather than drawing more income for his personal
    use because he aspires for the company to reach new heights in light of the company’s young
    age of two. Thus, he only draws an annual income of SGD 60,000. Most of his expenses go to
    his new car loan. On top of that, he often spends on expensive meals with clients to impress
    them even with the clients prioritising the company’s potential deliverables and returns.
    Upon two years of graduation, he has managed to save SGD 30,000 in total without strict
    control over his monthly expenses.
    <br /><br />
    Taking into account his capabilities, his current personal goal is to own a house valued at
    SGD 1,5000,000 in five years’ time when he reaches 30 years old. He would also love to have
    some form of an emergency fund to tackle the uncertainties of startups. While he is
    convinced that he should not purchase the house in cash, he would still need to save up for
    the 10% downpayment, which is SGD 150,000 in five years. In order to achieve his goal, the
    biggest obstacle he is facing is his inability to save effectively. He would need to ramp up
    his savings to at least SGD 1000 per month to afford this downpayment of the housing loan
    that he would be applying for to purchase his house.`,
  breakdown: [
    {
      name: 'Salary (Profit-sharing)',
      value: 5000,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 150,
      category: 'Expense',
    },
    {
      name: 'Food and Beverages',
      value: 1000,
      category: 'Expense',
    },
    {
      name: 'Car Loan Interest (5%)',
      value: 1200,
      category: 'Expense',
    },
    {
      name: 'House Rental',
      value: 700,
      category: 'Expense',
    },
    {
      name: 'Savings',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 800,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 450,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 300,
      category: 'Expense',
    },
  ],
  scenario: `<strong>Open conversation with parents</strong> <br /><br />Nigel wants to have
    a heart to heart talk with his parents. He wants to make sure that he understands his
    parents' preference on when to retire. He wishes to understand his parents’ retirement plan,
    and their savings to finance that. Taking into account his financial capabilities, he wants
    to review to what extent he would be able to support his parents’ retirement. At the end of
    the day, he wants to make sure that his parents are happy and that he would be able to
    finance both his parents’ retirement life and the expansion of his venture without any
    apprehension. <br /><br />
    Action required: Your team will need to act as Nigel to understand your parents’ financial
    position in order to make a decision whether to increase your allowance for his parents.`,
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Startup%20Founder.png?alt=media&token=15137ed8-d6e6-4a73-8cc3-46ea6a671908',
};

const software: Character = {
  id: 'software',
  name: 'Max the Software Engineer',
  biography: `Over here we have the smart looking guy, Max Tee who graduated from the
    National University of Spain in the year 2020 with a Computer Science (CS) degree. However,
    he was not on any scholarship and he took a tuition loan valued at SGD 47,000 with The BS
    Bank during Year 2. On the same note, he has to repay this loan with an interest rate of
    5.25% p.a. <br /><br />
    With his dedication and passion in the Software Engineering field, he managed to land his
    first full-time job at Turtle Van as a Junior Software Engineer. This allows him to have an
    annual income of SGD 60,000 to survive in the city with the highest cost of living. He is
    currently staying in a private housing flat with 3 other friends paying a monthly rent of
    SGD 1,200 and sharing the utility cost with his friends. Even though his accommodation
    slightly exceeded his budget, its location is 10 minutes walk away from his office.
    <br /><br />
    It is time to talk about Max Tee’s spending habits. As a tech enthusiast himself, he spent
    most of his money in buying “new toys” such as drones, the latest PC hardware and smart home
    products. It was not surprising to hear that he recently purchased a new VR headset valued
    at $ 400. As you can see Max Tee is also a big supporter of cryptocurrency as he strongly
    believes it is the future of banking and finance. He actually invested SGD 5,000 in
    NemoCoin, but it was down to SGD 3,000 and he decided to hold it. Max Tee prefers eating out
    instead of cooking his own meal as he lacks cooking skills and does not want to spend time
    cooking. He would rather eat out at the nearby restaurant which costs him about SGD 6 - 8
    per meal. (Note: he does not like the nearby hawker stall simply because it does not taste
    good)
    <br /><br />
    Being the eldest son in the family, Max Tee has to send money back to his home country to
    support his younger brother’s education cost to lift some financial burdens off his parents’
    shoulders. He also deposits SGD 300 as savings per month for his bucket list -- a one (1)
    week trip to Europe in late 2023. At the end of the month, he sometimes forgets to save
    enough money for this. With SGD 6,000 in his bank savings account he is now SGD 9,000 away
    from his target and he has no other savings plan. `,
  breakdown: [
    {
      name: 'Salary',
      value: 5000,
      category: 'Income',
    },
    {
      name: 'Tuition Loan ($6,000 left)',
      value: 400,
      category: 'Expense',
    },
    {
      name: 'Phone Bill',
      value: 80,
      category: 'Expense',
    },
    {
      name: 'Food & Beverages',
      value: 1000,
      category: 'Expense',
    },
    {
      name: 'House Rental',
      value: 1200,
      category: 'Expense',
    },
    {
      name: 'Parents Allowance',
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Savings',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Entertainment (Including Tech Gadget)',
      value: 900,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Housing Utility and Miscellaneous',
      value: 320,
      category: 'Expense',
    },
  ],
  scenario: `<strong>Negotiation with HR</strong> <br /><br />Max approaches his supervisor
    asking for a promotion. His recent performance coupled with his consistent performance over
    the years, has solved complicated issues in the company, such as rectifying bugs in Turtle
    Van’s backend environment that saved the company from losing millions of dollars.
    <br /><br />
    Action required: You will need to act as Max and persuade your supervisor regarding your
    capabilities in order to ask for your pay raise by highlighting your achievements.Action
    required: You will need to act as Max and persuade your HR regarding your
    capabilities in order to ask for your pay raise by highlighting your achievements. `,
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/software.png?alt=media&token=03a8a110-0a60-42e8-8776-2321cc5bd03d',
};

const management: Character = {
  id: 'management',
  name: 'Dory the Management Associate',
  biography: `In the bustling city, you’ve come across a fine office woman, Dory Yew, a 23
    years old lady, when she’s busy meeting some clients. She has pursued her Master of Business
    Administration after her degree in Salty Management University. After her graduation, she
    stood a chance to join a management associate program and eventually got converted into a
    full-time employee after 6 months. She upholds the value of education well and was willing
    to take up student loans to complete her MBA. She’s currently working in Singapore and
    unable to return back to Malaysia due to the pandemic and the importance of working to
    survive. <br /><br />
    Dory has always been passionate about the Banking industry. The reason for this circumstance
    is that she’s always wanted to do something related to numbers and at the same time having
    networking opportunities with professionals. With her outstanding co-curriculum activities
    and her leadership capabilities, she was able to pass through numerous rounds of interviews
    for banks and eventually landed her first job in the banking industry.
    <br /><br />
    As an industry professional who graduated with MBA, Dory definitely has a certain extent of
    financial literacy. She’s taking home a total of SGD 5,000 excluding bonuses from the
    company. While she believes that savings are important, she feels like her current
    investment portfolio is sufficient to cover what she needs in the future, thus spending
    almost all her income on things that she wants. She has a habit of using mobile everywhere
    and having the latest phone possible. That leads to her having a fixed 24 months phone
    contract. She loves shopping for handbags and usually spends most of her income on the
    latest editions when her pay comes in every month. While she’s working overseas, she’ll have
    to pay for her own accommodation and that will reduce her total income to spend on her daily
    life. She likes to take private taxis to work in the morning because she prefers to wake up
    later. Her household expenses came from utility bills and maintenance equipment only as she
    doesn’t cook at home. As mentioned, she’s also currently on a student loan for both her
    degree and masters that she’s yet to pay back.
    <br /><br />
    That being said, Dory still has a dream to possess a small condo for herself in 5 years
    time. The condominium that she’s surveyed has projected to cost SGD 1,000,000 when she’s 28
    years old. This means that she’ll have to save up at least SGD 100,000 for the downpayment
    of 10% before she’s ready to buy the condominium. Before that, she prefers to spend her
    income on a more luxurious apartment to ‘prepare’ for her future lifestyle. After some
    calculations based on time value of money, she will have to save at least SGD 600 every
    month, but she’s afraid that in case of emergency she’ll have to spend all of her savings to
    fill up.`,
  breakdown: [
    {
      name: 'Salary',
      value: 5000,
      category: 'Income',
    },
    {
      name: 'Phone Bill (Contract)',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Food and Beverages',
      value: 600,
      category: 'Expense',
    },
    {
      name: 'House Rental',
      value: 1000,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 1200,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Student Loan (5 years)',
      value: 1000,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 200,
      category: 'Expense',
    },
  ],
  scenario: `<strong>Conversation with Supervisor</strong> <br /><br />
    Dory approaches her supervisor to discuss the possibilities for a pay raise. Over the past
    year, she has been clocking in extra work hours. She now has a better understanding of her
    firm, and how different business units work together. Because of this, she managed to come
    up with strategies to streamline client pipelines and profit and loss reporting. In one of
    her recent rotations, her exceptional performance was highlighted by her departmental head,
    winning her numerous internal awards. She knows that her firm has a structured internal
    progression framework, but she wonders if this will win her the raise. Even if she is not
    successful this time, she wants to plant the seed and one day be in a better position to
    discuss this, having shown what she is capable of delivering. <br /><br />
    Action required: You will need to act as Dory and persuade your supervisor regarding your
    capabilities in order to ask for your pay raise by highlighting your achievements.`,
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/management.png?alt=media&token=2a517b88-ccb0-4175-aa41-5710c34c9729',
};

export const characters: Characters = [designer, founder, software, management];

export const initialLeaderboard = [
  {
    name: 'team1',
    score: 0,
  },
  {
    name: 'team2',
    score: 0,
  },
  {
    name: 'team3',
    score: 0,
  },
  {
    name: 'team4',
    score: 0,
  },
  {
    name: 'team5',
    score: 0,
  },
  {
    name: 'team6',
    score: 0,
  },
  {
    name: 'team7',
    score: 0,
  },
  {
    name: 'team8',
    score: 0,
  },
  {
    name: 'team9',
    score: 0,
  },
  {
    name: 'team10',
    score: 0,
  },
];

export const quota: Quotas = [
  {
    id: 'designer',
    remaining: 2,
    timeslot: [true, true],
  },
  {
    id: 'founder',
    remaining: 3,
    timeslot: [true, true, true],
  },
  {
    id: 'software',
    remaining: 3,
    timeslot: [true, true, true],
  },
  {
    id: 'management',
    remaining: 2,
    timeslot: [true, true],
  },
];

export const globalVariables: Global = {
  viewCharacter: false,
  viewTemplate: false,
  submissionTime: '1628920200',
};
