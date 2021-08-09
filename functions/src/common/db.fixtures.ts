import { Character, Characters, Quotas, Team, Teams } from './types';

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
  from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong
  struggled to hunt for a job that is relevant to his Mechanical Engineering degree. Unlike
  his Singaporean friends, Nemo Ong is not eligible for SG United Traineeship opportunities
  as he holds a Student’s Pass as a foreigner. These led to his decision to join the gig
  economy, as a freelance designer. He did some research that being a freelancer actually
  earns him a pretty decent salary as a fresh graduate, albeit the wage could be
  inconsistent sometimes. Nemo Ong always gets the same question from his relatives: why did
  he choose to be a freelance designer when he actually studied mechanical engineering. This
  perhaps correlates to the society stereotype of medical doctors, engineers and lawyers as
  prestigious occupations. But Nemo Ong -- a man with vision, tenacity and hustle knows
  there is no one job that is superior over others, and a job that he is truly passionate
  about is the best job for him. Although he did a degree in Mechanical Engineering, his
  passion has always been in the design field. The only reason why he took up his degree is
  because of his parents strong preference of him studying Mechanical Engineering -- for the
  perceived income stability. While the filial son did follow his parents advice, Nemo Ong
  did not let go of his passion and took up a Minor in Communications and New Media.
  Undoubtedly, he thrived in his minor studies, for his genuine interest that motivated him
  to dive deeper into the vertical, even during his free time, which he self-learnt user
  experience and user interface. As such, Nemo Ong is genuinely grateful for his current
  job, and appreciates the opportunity to do what he actually loves. <br /><br />Moving on
  to Nemo Ong’s personal life, he truly is a lucky man. Nemo met his fiancée in university,
  when both of them attended the same course. It first started when the couple participated
  in a Design Competition as teammates and they eventually fell in love with each other.
  They are now in a stable relationship where both of them think it is the right time to
  settle down. Both of them do agree that it is not the best time to tie the knot right now,
  with the uncertainties of the pandemic and their financial position. With that, they do
  wish to become man and wife in six years time, when they are 30 years old. To commemorate
  how fair they have come, they want to have a grand wedding, inviting the family and
  friends to be present on their important day, witnessing how far they have come. [start]
  The couple loved the idea of having a beach honeymoon, either at one of Maldives’ private
  resorts or even Bali. They are planning to save up for that. A good estimation of the
  wedding in 2027, excluding the honeymoon plans, goes to $45,000. Nemo think it is an
  achievable goal for him to fork out half of the sum in six years time, as he managed to
  have his tertiary education funded through an ASEAN scholarship for his outstanding
  academic achievements, and thus has a pool of $10,000 savings with 90% of it in fixed
  deposit and the remaining portion as cash in bank, with the prize money and side hustles
  he did all these years. As a freelance designer now, although his income could fluctuate
  across the months, but gauging on his personal capabilities and using the past year as a
  reference, he can comfortably bag home $5,000 per month. He is confident that he will be
  able to achieve the $25,000 mark in six years, even with his current commitments. He has
  been spending a great portion of his income to own the latest design softwares and
  hardwares, and plans to continue doing so to gain more new clients. However, he also
  acknowledges that this is built on the assumption that the resumption of business
  activities barring the country is on track to bring the covid outbreak under control.`,
  scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
    Nemo is required to calm his future in-laws. He wants to make sure the parents of his girlfriend
    understand the rationale behind their decision of holding an intimate/grand wedding. The
    expected outcome is to find the consensus without ruining the relationship between the couple
    and their parents. But before this, He wants to seek the opinion of his girlfriend. After all,
    they are the ones getting married. If they were to hold a grand wedding, he wants to make sure
    both he and his girlfriend are comfortable with their finances since the grand wedding can cost
    up to S$200k. They would be more confident financially in having an intimate wedding, as the
    couple just started their career. If they had an extra budget, they were thinking of doing a
    honeymoon in Bali. However, Nemo does understand where his future in-laws are coming from. The
    aim of this conversation is to clear the air, convey their decision and explain why they decided
    that this is best for them and their family. He wants to make sure that his in-laws understand
    that the couple respects them and that they are trying to make a decision that they are
    confident with.`,
  breakdown: [
    {
      name: 'Salary',
      value: 5500,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 150,
      category: 'Expense',
    },
    {
      name: 'Food & Beverages',
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
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 1100,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 250,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Design software and tools ',
      value: 1000,
      category: 'Expense',
    },
  ],
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
};

const founder: Character = {
  id: 'founder',
  name: 'Nemo the Designer',
  biography: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated
  from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong
  struggled to hunt for a job that is relevant to his Mechanical Engineering degree. Unlike
  his Singaporean friends, Nemo Ong is not eligible for SG United Traineeship opportunities
  as he holds a Student’s Pass as a foreigner. These led to his decision to join the gig
  economy, as a freelance designer. He did some research that being a freelancer actually
  earns him a pretty decent salary as a fresh graduate, albeit the wage could be
  inconsistent sometimes. Nemo Ong always gets the same question from his relatives: why did
  he choose to be a freelance designer when he actually studied mechanical engineering. This
  perhaps correlates to the society stereotype of medical doctors, engineers and lawyers as
  prestigious occupations. But Nemo Ong -- a man with vision, tenacity and hustle knows
  there is no one job that is superior over others, and a job that he is truly passionate
  about is the best job for him. Although he did a degree in Mechanical Engineering, his
  passion has always been in the design field. The only reason why he took up his degree is
  because of his parents strong preference of him studying Mechanical Engineering -- for the
  perceived income stability. While the filial son did follow his parents advice, Nemo Ong
  did not let go of his passion and took up a Minor in Communications and New Media.
  Undoubtedly, he thrived in his minor studies, for his genuine interest that motivated him
  to dive deeper into the vertical, even during his free time, which he self-learnt user
  experience and user interface. As such, Nemo Ong is genuinely grateful for his current
  job, and appreciates the opportunity to do what he actually loves. <br /><br />Moving on
  to Nemo Ong’s personal life, he truly is a lucky man. Nemo met his fiancée in university,
  when both of them attended the same course. It first started when the couple participated
  in a Design Competition as teammates and they eventually fell in love with each other.
  They are now in a stable relationship where both of them think it is the right time to
  settle down. Both of them do agree that it is not the best time to tie the knot right now,
  with the uncertainties of the pandemic and their financial position. With that, they do
  wish to become man and wife in six years time, when they are 30 years old. To commemorate
  how fair they have come, they want to have a grand wedding, inviting the family and
  friends to be present on their important day, witnessing how far they have come. [start]
  The couple loved the idea of having a beach honeymoon, either at one of Maldives’ private
  resorts or even Bali. They are planning to save up for that. A good estimation of the
  wedding in 2027, excluding the honeymoon plans, goes to $45,000. Nemo think it is an
  achievable goal for him to fork out half of the sum in six years time, as he managed to
  have his tertiary education funded through an ASEAN scholarship for his outstanding
  academic achievements, and thus has a pool of $10,000 savings with 90% of it in fixed
  deposit and the remaining portion as cash in bank, with the prize money and side hustles
  he did all these years. As a freelance designer now, although his income could fluctuate
  across the months, but gauging on his personal capabilities and using the past year as a
  reference, he can comfortably bag home $5,000 per month. He is confident that he will be
  able to achieve the $25,000 mark in six years, even with his current commitments. He has
  been spending a great portion of his income to own the latest design softwares and
  hardwares, and plans to continue doing so to gain more new clients. However, he also
  acknowledges that this is built on the assumption that the resumption of business
  activities barring the country is on track to bring the covid outbreak under control.`,
  scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
    Nemo is required to calm his future in-laws. He wants to make sure the parents of his girlfriend
    understand the rationale behind their decision of holding an intimate/grand wedding. The
    expected outcome is to find the consensus without ruining the relationship between the couple
    and their parents. But before this, He wants to seek the opinion of his girlfriend. After all,
    they are the ones getting married. If they were to hold a grand wedding, he wants to make sure
    both he and his girlfriend are comfortable with their finances since the grand wedding can cost
    up to S$200k. They would be more confident financially in having an intimate wedding, as the
    couple just started their career. If they had an extra budget, they were thinking of doing a
    honeymoon in Bali. However, Nemo does understand where his future in-laws are coming from. The
    aim of this conversation is to clear the air, convey their decision and explain why they decided
    that this is best for them and their family. He wants to make sure that his in-laws understand
    that the couple respects them and that they are trying to make a decision that they are
    confident with.`,
  breakdown: [
    {
      name: 'Salary',
      value: 5500,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 150,
      category: 'Expense',
    },
    {
      name: 'Food & Beverages',
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
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 1100,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 250,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Design software and tools ',
      value: 1000,
      category: 'Expense',
    },
  ],
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
};

const software: Character = {
  id: 'software',
  name: 'Nemo the Designer',
  biography: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated
  from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong
  struggled to hunt for a job that is relevant to his Mechanical Engineering degree. Unlike
  his Singaporean friends, Nemo Ong is not eligible for SG United Traineeship opportunities
  as he holds a Student’s Pass as a foreigner. These led to his decision to join the gig
  economy, as a freelance designer. He did some research that being a freelancer actually
  earns him a pretty decent salary as a fresh graduate, albeit the wage could be
  inconsistent sometimes. Nemo Ong always gets the same question from his relatives: why did
  he choose to be a freelance designer when he actually studied mechanical engineering. This
  perhaps correlates to the society stereotype of medical doctors, engineers and lawyers as
  prestigious occupations. But Nemo Ong -- a man with vision, tenacity and hustle knows
  there is no one job that is superior over others, and a job that he is truly passionate
  about is the best job for him. Although he did a degree in Mechanical Engineering, his
  passion has always been in the design field. The only reason why he took up his degree is
  because of his parents strong preference of him studying Mechanical Engineering -- for the
  perceived income stability. While the filial son did follow his parents advice, Nemo Ong
  did not let go of his passion and took up a Minor in Communications and New Media.
  Undoubtedly, he thrived in his minor studies, for his genuine interest that motivated him
  to dive deeper into the vertical, even during his free time, which he self-learnt user
  experience and user interface. As such, Nemo Ong is genuinely grateful for his current
  job, and appreciates the opportunity to do what he actually loves. <br /><br />Moving on
  to Nemo Ong’s personal life, he truly is a lucky man. Nemo met his fiancée in university,
  when both of them attended the same course. It first started when the couple participated
  in a Design Competition as teammates and they eventually fell in love with each other.
  They are now in a stable relationship where both of them think it is the right time to
  settle down. Both of them do agree that it is not the best time to tie the knot right now,
  with the uncertainties of the pandemic and their financial position. With that, they do
  wish to become man and wife in six years time, when they are 30 years old. To commemorate
  how fair they have come, they want to have a grand wedding, inviting the family and
  friends to be present on their important day, witnessing how far they have come. [start]
  The couple loved the idea of having a beach honeymoon, either at one of Maldives’ private
  resorts or even Bali. They are planning to save up for that. A good estimation of the
  wedding in 2027, excluding the honeymoon plans, goes to $45,000. Nemo think it is an
  achievable goal for him to fork out half of the sum in six years time, as he managed to
  have his tertiary education funded through an ASEAN scholarship for his outstanding
  academic achievements, and thus has a pool of $10,000 savings with 90% of it in fixed
  deposit and the remaining portion as cash in bank, with the prize money and side hustles
  he did all these years. As a freelance designer now, although his income could fluctuate
  across the months, but gauging on his personal capabilities and using the past year as a
  reference, he can comfortably bag home $5,000 per month. He is confident that he will be
  able to achieve the $25,000 mark in six years, even with his current commitments. He has
  been spending a great portion of his income to own the latest design softwares and
  hardwares, and plans to continue doing so to gain more new clients. However, he also
  acknowledges that this is built on the assumption that the resumption of business
  activities barring the country is on track to bring the covid outbreak under control.`,
  scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
    Nemo is required to calm his future in-laws. He wants to make sure the parents of his girlfriend
    understand the rationale behind their decision of holding an intimate/grand wedding. The
    expected outcome is to find the consensus without ruining the relationship between the couple
    and their parents. But before this, He wants to seek the opinion of his girlfriend. After all,
    they are the ones getting married. If they were to hold a grand wedding, he wants to make sure
    both he and his girlfriend are comfortable with their finances since the grand wedding can cost
    up to S$200k. They would be more confident financially in having an intimate wedding, as the
    couple just started their career. If they had an extra budget, they were thinking of doing a
    honeymoon in Bali. However, Nemo does understand where his future in-laws are coming from. The
    aim of this conversation is to clear the air, convey their decision and explain why they decided
    that this is best for them and their family. He wants to make sure that his in-laws understand
    that the couple respects them and that they are trying to make a decision that they are
    confident with.`,
  breakdown: [
    {
      name: 'Salary',
      value: 5500,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 150,
      category: 'Expense',
    },
    {
      name: 'Food & Beverages',
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
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 1100,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 250,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Design software and tools ',
      value: 1000,
      category: 'Expense',
    },
  ],
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
};

const management: Character = {
  id: 'management',
  name: 'Nemo the Designer',
  biography: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated
  from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong
  struggled to hunt for a job that is relevant to his Mechanical Engineering degree. Unlike
  his Singaporean friends, Nemo Ong is not eligible for SG United Traineeship opportunities
  as he holds a Student’s Pass as a foreigner. These led to his decision to join the gig
  economy, as a freelance designer. He did some research that being a freelancer actually
  earns him a pretty decent salary as a fresh graduate, albeit the wage could be
  inconsistent sometimes. Nemo Ong always gets the same question from his relatives: why did
  he choose to be a freelance designer when he actually studied mechanical engineering. This
  perhaps correlates to the society stereotype of medical doctors, engineers and lawyers as
  prestigious occupations. But Nemo Ong -- a man with vision, tenacity and hustle knows
  there is no one job that is superior over others, and a job that he is truly passionate
  about is the best job for him. Although he did a degree in Mechanical Engineering, his
  passion has always been in the design field. The only reason why he took up his degree is
  because of his parents strong preference of him studying Mechanical Engineering -- for the
  perceived income stability. While the filial son did follow his parents advice, Nemo Ong
  did not let go of his passion and took up a Minor in Communications and New Media.
  Undoubtedly, he thrived in his minor studies, for his genuine interest that motivated him
  to dive deeper into the vertical, even during his free time, which he self-learnt user
  experience and user interface. As such, Nemo Ong is genuinely grateful for his current
  job, and appreciates the opportunity to do what he actually loves. <br /><br />Moving on
  to Nemo Ong’s personal life, he truly is a lucky man. Nemo met his fiancée in university,
  when both of them attended the same course. It first started when the couple participated
  in a Design Competition as teammates and they eventually fell in love with each other.
  They are now in a stable relationship where both of them think it is the right time to
  settle down. Both of them do agree that it is not the best time to tie the knot right now,
  with the uncertainties of the pandemic and their financial position. With that, they do
  wish to become man and wife in six years time, when they are 30 years old. To commemorate
  how fair they have come, they want to have a grand wedding, inviting the family and
  friends to be present on their important day, witnessing how far they have come. [start]
  The couple loved the idea of having a beach honeymoon, either at one of Maldives’ private
  resorts or even Bali. They are planning to save up for that. A good estimation of the
  wedding in 2027, excluding the honeymoon plans, goes to $45,000. Nemo think it is an
  achievable goal for him to fork out half of the sum in six years time, as he managed to
  have his tertiary education funded through an ASEAN scholarship for his outstanding
  academic achievements, and thus has a pool of $10,000 savings with 90% of it in fixed
  deposit and the remaining portion as cash in bank, with the prize money and side hustles
  he did all these years. As a freelance designer now, although his income could fluctuate
  across the months, but gauging on his personal capabilities and using the past year as a
  reference, he can comfortably bag home $5,000 per month. He is confident that he will be
  able to achieve the $25,000 mark in six years, even with his current commitments. He has
  been spending a great portion of his income to own the latest design softwares and
  hardwares, and plans to continue doing so to gain more new clients. However, he also
  acknowledges that this is built on the assumption that the resumption of business
  activities barring the country is on track to bring the covid outbreak under control.`,
  scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
    Nemo is required to calm his future in-laws. He wants to make sure the parents of his girlfriend
    understand the rationale behind their decision of holding an intimate/grand wedding. The
    expected outcome is to find the consensus without ruining the relationship between the couple
    and their parents. But before this, He wants to seek the opinion of his girlfriend. After all,
    they are the ones getting married. If they were to hold a grand wedding, he wants to make sure
    both he and his girlfriend are comfortable with their finances since the grand wedding can cost
    up to S$200k. They would be more confident financially in having an intimate wedding, as the
    couple just started their career. If they had an extra budget, they were thinking of doing a
    honeymoon in Bali. However, Nemo does understand where his future in-laws are coming from. The
    aim of this conversation is to clear the air, convey their decision and explain why they decided
    that this is best for them and their family. He wants to make sure that his in-laws understand
    that the couple respects them and that they are trying to make a decision that they are
    confident with.`,
  breakdown: [
    {
      name: 'Salary',
      value: 5500,
      category: 'Income',
    },
    {
      name: 'Phone Bill',
      value: 150,
      category: 'Expense',
    },
    {
      name: 'Food & Beverages',
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
      value: 600,
      category: 'Expense',
    },
    {
      name: 'Entertainment',
      value: 1100,
      category: 'Expense',
    },
    {
      name: 'Household Expenses',
      value: 200,
      category: 'Expense',
    },
    {
      name: 'Transportation',
      value: 250,
      category: 'Expense',
    },
    {
      name: 'Insurance',
      value: 300,
      category: 'Expense',
    },
    {
      name: 'Design software and tools ',
      value: 1000,
      category: 'Expense',
    },
  ],
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
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
    timeslot: [false, false],
  },
  {
    id: 'founder',
    remaining: 3,
    timeslot: [false, false, false],
  },
  {
    id: 'software',
    remaining: 3,
    timeslot: [false, false, false],
  },
  {
    id: 'management',
    remaining: 2,
    timeslot: [false, false],
  },
];
