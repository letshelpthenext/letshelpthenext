// Every scholarship recipient we can name and have content for.
//
// CONSENT GATE: `published` controls whether a student appears on the public
// site at all. These stories name students, their universities, their countries
// and — in several cases — deeply personal circumstances (a mental-health
// diagnosis, refugee status, family financial hardship). Publishing that under a
// real name on a search-indexed site is not the same act as posting it to social
// media. Set `published: true` ONLY once that student has given explicit written
// consent, and offer them the option to appear under a first name only.
//
// PHOTOS: drop files into src/assets/students/ and reference them by filename in
// the `photo` field. Students without a photo fall back to an initials avatar, so
// the grid never breaks. The board deck only has them as flattened poster
// composites.

// Resolve photos at build time. Missing files fall back to the initials avatar.
let photoModules = {};
try {
  // Case-insensitive so uppercase extensions (.PNG, .JPG) are picked up too.
  const ctx = require.context('../assets/students', false, /\.(png|jpe?g|webp)$/i);
  ctx.keys().forEach((key) => {
    photoModules[key.replace('./', '')] = ctx(key);
  });
} catch (e) {
  // No student photos added yet — every card uses the initials avatar.
}

export const getStudentPhoto = (filename) =>
  (filename && photoModules[filename]) || null;

export const students = [
  // ---------------------------------------------------------------- 2023 ----
  {
    slug: 'wanangwa-msiska',
    name: 'Wanangwa Msiska',
    country: 'Malawi',
    flag: '🇲🇼',
    cohort: 2023,
    university: 'Bowling Green State University',
    major: "Master's in Statistics",
    graduated: 'Graduated May 2025',
    photo: 'Wanangwa M. .jpeg',
    featured: true,
    published: true,
    intro:
      'Our very first recipient. He arrived in the States with little money and big dreams — and left with a master\'s degree.',
    story: `In 2023, we helped Wanangwa Msiska, who is from Malawi. Wanangwa arrived in the States to start his master's at Bowling Green University. He had little money, but big dreams.

Throughout his first semester, he found a job, which helped him to pay for his basic needs like rent, food, health insurance, and a part of his tuition. However, as the semester ended, he still had a significant amount of money due toward his tuition, and as a result, he could not register for the following semester.

Seeing his effort and determination to help himself, after reviewing his application, we were able to help him cover what was missing, so he could continue with his master's degree.

On May 2nd, 2025, Wanangwa graduated and gained his master's degree in statistics. The morning of his graduation, he messaged our organization the sweetest thank you note.`,
    thankYouNote: `Hey Mishma,

I am graduating today. 🎉

I just wanted to take a moment to say thank you — from the bottom of my heart. When I think about how far I've come and the fact that I'm about to graduate, I know for sure it wouldn't have been possible without you.

You stepped in during one of the most uncertain times of my life and helped raise the funds that allowed me to start grad school. That one act changed everything for me. I'll never forget it.

I'm graduating because someone like you believed in me. And I'll carry that with me forever.

With all my gratitude,
Wanangwa`,
    thankYouVideo: null,
  },

  // ---------------------------------------------------------------- 2024 ----
  // Roster from the 2024 cohort poster. No written stories on file yet.
  {
    slug: 'mery-deilaire',
    name: 'Mery Deilaire',
    country: 'Haiti',
    flag: '🇭🇹',
    cohort: 2024,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'hannah-nyundo',
    name: 'Hannah Nyundo',
    country: 'Zambia',
    flag: '🇿🇲',
    cohort: 2024,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'grace-kouadia',
    name: 'Grace M. O. Kouadia',
    country: "Cote d'Ivoire",
    flag: '🇨🇮',
    cohort: 2024,
    university: null,
    major: null,
    photo: 'Grace_M.jpeg',
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'euloge-kouassi-golet',
    name: 'Euloge A. Jared Kouassi-Golet',
    country: "Cote d'Ivoire",
    flag: '🇨🇮',
    cohort: 2024,
    university: null,
    major: null,
    photo: 'Euloge_A_Jared.jpeg',
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'gustavo-oenteado',
    name: 'Gustavo Oenteado',
    country: 'Brazil',
    flag: '🇧🇷',
    cohort: 2024,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'wilson-aranjo-de-pina',
    name: 'Wilson Aranjo de Pina',
    country: 'Cape Verde',
    flag: '🇨🇻',
    cohort: 2024,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },

  // ---------------------------------------------------------------- 2025 ----
  {
    slug: 'natasha-kunda',
    name: 'Natasha Kunda',
    country: 'Zambia',
    flag: '🇿🇲',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Early Childhood and Special Education',
    photo: null,
    published: true,
    intro:
      'She lost her father young, came to the U.S. with no financial support, and kept going. She wants to open learning centres for children with special needs in Zambia.',
    story: `My name is Natasha Kunda, and I'm from Zambia, a small but beautiful country in the southern part of Africa. Growing up there was not easy. I lost my father when I was very young, and my mother was left to raise me and my older siblings all on her own. Life was difficult, but my mom always reminded us to hold onto hope and education even when it felt like our world was falling apart.

After high school, I dreamed of going to college, but in Zambia, opportunities are very limited. The economy was struggling, jobs were almost impossible to find, and I watched my siblings — even those with degrees — unable to find work. I saw how hard my mother worked and how much she sacrificed for us, and I knew deep down that if I stayed, my future would not be any different.

So, I made a brave decision: I wanted to come to the United States to get a better education and build a future not only for myself, but for my mom and my family. My mother, even with so little, gave me everything she had — her savings, her faith, and her blessings — to help me chase that dream. I came to the U.S. with big hopes, but I quickly learned that dreams don't come easy.

When I arrived, I had no financial support. I worked part-time while studying full-time just to pay rent, tuition, and all the other bills that came my way. I couldn't ask my mother for more because she had already given me all she could. I was determined to keep going for her, for my family, and for the little girl inside me who still believed that education could change everything.

I chose to major in Early Childhood and Special Education because I have always loved children. They bring me so much joy, and I want to make a difference in their lives, especially for children with special needs, who often don't have enough support in my country. Helping them learn and grow has been one of my greatest blessings.

But two semesters ago, I hit a very dark moment in my life. I had been pushing myself too hard — working, studying, and trying to stay strong for everyone back home. I wanted to graduate quickly so I could finally help my mom. But the pressure became too much. I found myself mentally and emotionally exhausted. I went to class, but I couldn't focus. I was physically there, but mentally lost.

Eventually, I reached out for professional help, and I was diagnosed with severe depression. My doctor advised me to take a break from school and work, to focus on healing. But in my culture, taking time off for mental health isn't something we talk about. I felt ashamed and guilty for not being strong enough. I kept thinking, "If I don't graduate, how will I ever help my mom?"

Still, I knew that if I didn't take care of myself, I couldn't take care of anyone else. I took one semester off, even though that meant I couldn't work and had no income. That was one of the hardest times in my life. I didn't know how I would pay for tuition, housing, or even food.

One day, a close friend from Zambia told me about "Let's Help The Next," an organization that had helped her when she was struggling. I decided to reach out, though I didn't expect anything. Days passed, maybe weeks — and then, finally, I got an email back. That moment changed everything.

For the first time in a long time, I felt seen. I felt hope again. The support from "Let's Help the Next" reminded me that I wasn't a failure, that I was still fighting, still moving forward, and still capable of achieving my dream. Because of their help, I was able to continue my studies and stay on track to graduate.

Now, I'm preparing for my student teaching, something I've looked forward to since I started this journey. I'm grateful every single day for the people who believed in me, for the children who remind me why I chose this path, and for my mom, who never stopped believing in me even when things looked impossible.

When I earn my degree, and raise enough funds, I want to go back to Zambia and create opportunities for children with special needs, something that's still lacking there. I want to use what I've learned here to train teachers, open centers for learning, and make sure every child — no matter their ability — has a chance to reach their potential.

And just as "Let's Help the Next" helped me when I was at my lowest, I want to do the same for others. I know what it feels like to be alone, scared, and ready to give up, and I want to be the reason someone chooses to keep going.

My story is about hope, faith, and second chances. It's about believing that even when life feels impossible, kindness can change everything. Thank you.`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'monica',
    name: 'Monica',
    country: 'Ghana',
    flag: '🇬🇭',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: null,
    graduated: 'Graduated December 2025',
    photo: 'Monica.jpeg',
    published: true,
    intro:
      'From Ghana to Rexburg. She credits consistency and focus — and the ability to keep going when things get difficult.',
    story: `I'm from Ghana, where education is accessible and deeply valued. Growing up, I was surrounded by people who encouraged hard work and discipline, and those lessons shaped how I approach challenges today. Even with opportunities available, I learned that success depends on consistency, focus, and the ability to keep going when things get difficult.

Before starting school at BYU-Idaho, my life was structured but familiar. I was comfortable in my environment and routines. Moving to a new country to continue my education brought a new set of challenges, such as adjusting to a different culture, learning style, and pace of life. There were moments of uncertainty, but I used those experiences to strengthen my independence and resilience.

Throughout my academic journey, I've worked hard to balance multiple responsibilities, from coursework and projects to personal growth. I've achieved milestones that reflect not just academic progress but personal transformation. Each challenge I've faced has helped me become more adaptable, focused, and confident in who I am and what I can accomplish.

Looking ahead, I hope to build a meaningful career where creativity and problem-solving meet. My goal is to create work that inspires and makes a difference while continuing to grow as a person and a professional. I believe that perseverance opens doors, and I'm committed to walking through every one that leads me closer to my dreams.`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'divine-irakoze',
    name: 'Divine Irakoze',
    country: 'Burundi',
    flag: '🇧🇮',
    cohort: 2025,
    university: 'Brigham Young University (Provo)',
    major: 'Master of Public Administration',
    photo: 'Divine_Library.jpeg',
    featured: true,
    published: true,
    intro:
      'Fifteen years in a refugee camp in Malawi. Today she has a bachelor\'s degree, is pursuing a master\'s, and has spoken at the United Nations.',
    story: `My name is Divine Irakoze. I was born to Burundian parents in Tanzania and later moved to Dzaleka Refugee Camp in Malawi, where I lived for about 15 years before moving to the USA for education. Growing up in the camp was not easy. Access to education was limited, and resources were scarce. But one thing for sure, I always believed that education was my path to freedom and hope.

Despite the challenges — from studying in overcrowded classrooms to facing uncertainty about the future — I worked hard and held on to my dream of one day going to college. Through perseverance, faith, and the kindness of people who believed in me, that dream became a reality.

In July, I received my Bachelor of Arts in International Studies from BYU-Idaho, and today I am pursuing a Master of Public Administration at Brigham Young University in Provo, Utah. I have worked with organizations such as the Global Campaign for Education–US, using my story to amplify the voices of refugee youth and push for policies that improve access to education. My experiences have strengthened my passion for refugee education and advocacy.

Recently, I was honored to give a speech at the Economic and Social Council Youth Forum 2025 at the United Nations Headquarters, representing young people from marginalized communities. Standing there reminded me that my voice — and the voices of millions of young refugees — matter more than ever.

The scholarship I received through Let's Help The Next made a very huge difference in my life. Not only did it help to cover my educational costs, but it also gave me confidence, a reminder that I am not alone on this journey. It showed me that there are people out there who care, who believe in investing in students like me.

My goal is to use my education to create better systems and opportunities for young refugees around the world, especially in early childhood and higher education. I want to continue being a bridge between refugee communities and policymakers, ensuring that no young person's potential is lost because of where they were born.

Thank you for believing in me and for helping make this journey possible. Your support is changing lives, and mine is just one example.

With gratitude,
Divine Irakoze`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'carlos-ramirez',
    name: 'Carlos Ramirez',
    country: 'Mexico',
    flag: '🇲🇽',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Business Management',
    photo: 'Carlos_Ramirez.jpg',
    published: true,
    intro:
      'His parents — a hairstylist and an aluminium fabricator — taught him the value of hard work. He cuts hair on campus to pay his way.',
    story: `Hello, my name is Carlos Ramirez. I am from Veracruz, Mexico. I'm currently studying at Brigham Young University–Idaho. I'm studying business management, and I like it a lot so far.

A little bit about me. I am from a family of four. I have an older sister, and she is 26 years old. She has already graduated and gotten married. My mother is a hair stylist, and she works at home. My father builds windows, doors, garage doors, and structures made of aluminum, also at home. They both taught me the value of hard work. I learned from both of my parents. As a result, I took a barber course before coming here, so I have barber skills.

Honestly, because their jobs are not stable employment, they only have money when they have work. As a result, I'm always trying to work hard to get help for my tuition and for my expenses. They are trying to help me, but sometimes they cannot do it entirely. So that's why I'm doing my best to work hard, also cutting hair and working on campus right now.

I already received the Let's Help The Next need-based scholarship. This helps me because now this scholarship is going to help me with my tuition. Thank you so much.`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'fiorela-hoxhaj',
    name: 'Fiorela Hoxhaj',
    country: 'Albania',
    flag: '🇦🇱',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Political Science, Foreign Affairs',
    photo: 'Fiori.PNG',
    published: true,
    intro:
      'From a small town in northern Albania: "Even in the smallest places, you can dream big — but you also have to work really hard for it."',
    story: `Hi everyone! I'm Fiori from Albania and I'm in my third semester at BYU–Idaho, studying Political Science with an emphasis on Foreign Affairs.

Growing up in a small town in northern Albania taught me that even in the smallest places, you can dream big, but you also have to work really hard for it.

I've been so blessed to have an incredible support system, including Let's Help The Next. Their support wasn't just financial for me; it felt like there were people out there who truly cared about international students studying here in the U.S.

Because yes, financial help makes a huge difference, but what matters most is knowing that someone believes in you and wants to see you succeed, no matter where you come from.

My dream is to one day be in a position where I can help other international students achieve their own educational goals, whether here in the United States or anywhere they dream to study. And beyond that, I hope to make a difference in my country, using the knowledge and experience I'm gaining from BYU–Idaho to give back and create opportunities for others.

Because when one of us rises, we all do.`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'zhaoni-chen',
    name: 'Zhaoni Chen',
    country: 'Taiwan',
    flag: '🇹🇼',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Apparel',
    photo: 'Zhaoni.jpeg',
    published: true,
    intro:
      'Her father — her best friend and her financial support — passed away the year she came to BYU-Idaho. She came anyway, and keeps her GPA above 3.8.',
    story: `I am from Taiwan. Three and a half years before I came to BYU-Idaho I was volunteering for The Church of Jesus Christ of Latter-day Saints for one and a half years. Then, I worked for an after-school organization for around one and a half years. Coming to BYU-Idaho has been a dream since when I was a teen. Therefore, I tried my best to save money for this goal.

My father passed away the year I came to BYU-Idaho. I wasn't sure if I should come or not. He is my best friend and financial support. He taught me to do things when you feel like you need to do them. I know the importance of getting an education. My father and I have this expectation for me to come and study at BYU-Idaho. So, I made the decision to come and study.

I am very proud of myself that I came to the United States to be educated in my second language. I was able to find a job on campus. I try to keep my GPA above 3.8 while having my family and work at the same time. I found my passion in college. I love the apparel industry. I have been learning and taking classes in apparel. I made a beautiful skirt and a top for my friend Fall 2024.

My goals are to master my sewing skills before I graduate and learn to be a leader. My dream is to open my own apparel business and to connect this skill and leadership skills to education. I hope to bring things I learned here back home to strengthen the community and the country.

"Let's Help the Next" helped me for my Fall 2025 semester, so I can put more effort into my school and not worry about money. This is a big step for my achievement at BYU-Idaho. I believe that everyone has the potential to bring something great into somebody's life. "Let's Help the Next" is an example of that. I will continue to share the light with the people around me.

Thank you,
Nini`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'gabriel-esposito-wargha',
    name: 'Gabriel Esposito Wargha',
    country: 'Brazil',
    flag: '🇧🇷',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Software Engineering',
    photo: 'Gabriel_W.PNG',
    published: true,
    intro:
      'He was $800 short on tuition with no way to close the gap before the academic scholarship review. That $800 was the whole semester.',
    story: `Hello, my name is Gabriel Esposito Wargha. I am attending BYU-Idaho, and my major is Software Engineering. I'm from Brazil, and I arrived in the United States six months ago.

At the beginning of the winter semester, I was really worried about my tuition because I was using the international student deposits to pay it. However, after I used all the available funds, I was missing $800 US, and I didn't have this money. I was really worried because even though I was working hard to get an academic scholarship, the evaluation for BYU-Idaho academic scholarships happened after the winter semester.

As I was trying to see what I could do, I applied for the Let's Help The Next need-based scholarship. This scholarship helped me a lot. It helped me to focus on my studies, and on my part-time job where I work to pay my rent. As a result I had a good semester, and I am at the end of the semester and I got most of the grades that I need.

I believe that starting in fall I'm going to start receiving my academic scholarship, and it was all possible because of Let's Help The Next. So I'm really grateful for the help that they gave me.`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'hasina-rajohanesa',
    name: 'Hasina Rajohanesa',
    country: 'Madagascar',
    flag: '🇲🇬',
    cohort: 2025,
    university: 'Brigham Young University–Idaho',
    major: 'Pre-Nursing',
    photo: 'Hasina.jpg',
    published: true,
    intro:
      'A student parent. Twenty hours of campus work a week does not cover rent — let alone formula, diapers and wipes.',
    story: `Hello, my name is Hasina. I'm from Madagascar. I am attending BYU-Idaho, located in Rexburg. I am planning to major in nursing, but I'm currently in pre-nursing.

I applied for the Let's Help The Next need-based scholarship, and I received it. Basically, as international students, we don't even earn what our rent costs with the 20 hours of work, so we were very affected — especially with the breaks, because with school breaks we didn't have much work.

As you see, I have a toddler, which requires formula, diapers, and wipes. With the scholarship, I was able to add to our rent. We are really thankful. Thank you so much!`,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'ange-konan-kouadia',
    name: 'Ange Konan Kouadia',
    country: "Cote d'Ivoire",
    flag: '🇨🇮',
    cohort: 2025,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro:
      'Newly married and facing a tuition bill he could not meet. We covered half.',
    story: null,
    thankYouNote: `Hello, my name is Kouadio Ange Konan, and today I want to express my sincere heartfelt gratitude for your generous assistance and paying half of my tuition.

Your support came at a very critical moment when I was facing significant financial challenges, especially after recently getting married. Managing finances while starting a new life together has been difficult, and your timely help truly rescued me when I needed it the most.

Because of your kindness and generosity, I've been able to relieve a great deal of stress and fully dedicate my attention and energy to my studies. Having the freedom to concentrate more deeply on my academics has significantly enhanced my learning experience and academic performance. Your thoughtful support has not only impacted my education but has also positively influenced my personal life, giving me more stability and confidence during this important time.

I am truly grateful for your willingness to step in and provide help in such a meaningful way. Thank you once again for your compassion and generosity. It has made an incredible difference in my life, and I deeply appreciate your support.

Thank you so much. Let's Help The Next.`,
    thankYouVideo: null,
  },
  {
    slug: 'noble',
    name: 'Noble Danso',
    country: 'Ghana',
    flag: '🇬🇭',
    cohort: 2025,
    university: null,
    major: null,
    photo: 'Noble_Danso.jpeg',
    published: true,
    intro:
      'The scholarship bought him something he could not otherwise afford: time to focus on his studies.',
    story: null,
    thankYouNote: `Hi, my name is Noble from Ghana, West Africa, and I'm a proud recipient of the scholarship from Let's Help The Next.

I'm so grateful to Mishma and the Let's Help The Next team for giving me this opportunity to be able to finance my school and be able to focus more on my studies. This scholarship has gone a long way in helping me to be able to focus more on my studies and find more time for other school-related activities.

And I'm so grateful for the help and the processes that she took me through to receive the school funding. So I'm really grateful for Mishma and the help that I was able to get. Thank you very much.`,
    thankYouVideo: null,
  },
  {
    slug: 'daffydde-saint-preux',
    name: 'Daffydde Saint-Preux',
    country: 'Haiti',
    flag: '🇭🇹',
    cohort: 2025,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },
  {
    slug: 'osose-gift-pogoson',
    name: 'Osose Gift Pogoson',
    country: 'Nigeria',
    flag: '🇳🇬',
    cohort: 2025,
    university: null,
    major: null,
    photo: null,
    published: true,
    intro: null,
    story: null,
    thankYouNote: null,
    thankYouVideo: null,
  },

  // ---------------------------------------------------------------- 2026 ----
  {
    slug: 'chukwudi-emmanuel-ewa',
    name: 'Chukwudi Emmanuel Ewa',
    country: 'Nigeria',
    flag: '🇳🇬',
    cohort: 2026,
    university: 'Brigham Young University',
    major: null,
    photo: 'Chukwudi_Emmanuel.jpeg',
    published: true,
    intro:
      '"I hope to honor that trust through hard work, integrity, and service to others."',
    story: null,
    thankYouNote: `Dear Let's Help The Next Board of Directors,

Thank you very much for awarding me the $1,000 scholarship. I am truly grateful for your generosity and support. This scholarship not only eases my financial burden but also motivates me to keep striving for excellence in my studies and personal development at Brigham Young University.

I deeply appreciate the confidence you have shown in me, and I hope to honor that trust through hard work, integrity, and service to others. Thank you again for your kindness and investment in my future.

With sincere gratitude,
Chukwudi Emmanuel Ewa`,
    thankYouVideo: null,
  },
  {
    slug: 'rv-james-vegamora',
    name: 'RV James Vegamora',
    country: 'Philippines',
    flag: '🇵🇭',
    cohort: 2026,
    university: 'Brigham Young University–Idaho',
    major: 'BS Accounting',
    photo: 'RV_James_Vegamora.jpg',
    featured: true,
    published: true,
    intro:
      'A father of two studying full time on a visa that caps him at part-time work. "I look forward to graduating and doing the same — paying it forward."',
    story: null,
    thankYouNote: `My name is RV James Vegamora, and I'm from Bukidnon, Philippines. I'm currently attending BYU-Idaho, where I'm studying BS Accounting.

I want to sincerely thank the Board of Directors of Let's Help The Next and all the donors for your generosity. Receiving this scholarship has been a huge relief for me; it eases the financial stress of my education and allows me to focus more on my studies.

As an international student, I can do so little due to visa restrictions. I can only work part-time, and that is not enough to feed my two kids and my wife while attending college. Hence, your support truly makes a difference in my life, and I am so grateful to be part of this community of hope and opportunity.

Thank you for believing in us, international students. You all make this world a better place to live, and I look forward to graduating and doing the same, paying it forward.

Gratefully,
RV James Vegamora`,
    thankYouVideo: null,
  },
  {
    slug: 'tamia-mavunga',
    name: 'Tamia Mavunga',
    country: 'Zimbabwe',
    flag: '🇿🇼',
    cohort: 2026,
    university: null,
    major: null,
    photo: 'Tamia_Mavunga.jpg',
    published: true,
    intro:
      '"This scholarship is more than just financial assistance; it is an encouragement."',
    story: null,
    thankYouNote: `Dear Members of the Board of Directors at Let's Help The Next,

I am writing to express my sincere gratitude for the scholarship support you have generously provided. Your kindness has significantly eased my financial burdens and has allowed me to focus more fully on my education and personal growth without the constant stress of financial strain.

This scholarship is more than just financial assistance; it is an encouragement and a reminder that there are people and organizations who genuinely believe in investing in the potential of others. Your commitment to helping students succeed has made a meaningful difference in my life, and I am deeply thankful for the opportunity you have given me.

I am committed to making the most of this opportunity and to paying your generosity forward by serving and uplifting others in the future, just as Let's Help The Next has done for me.

Thank you once again for your generosity, support, and belief in my journey.

With sincere appreciation,
Tamia Mavunga`,
    thankYouVideo: null,
  },
  {
    slug: 'luo-hao-chen',
    name: 'Luo-Hao Chen',
    country: 'Taiwan',
    flag: '🇹🇼',
    cohort: 2026,
    university: 'Brigham Young University–Hawaii',
    major: 'Business Management, Finance',
    photo: 'Luo-Hao_Chen.jpg',
    published: true,
    intro:
      'Two on-campus internships and the CFA Research Challenge left him unable to work the 19 hours a week his balance required.',
    story: null,
    thankYouNote: `Dear Board of Directors of Let's Help The Next and Donors,

I would like to express my sincere gratitude for your generous support of my education at BYU–Hawaii. Your kindness has made it possible for me to focus more fully on my academic and professional development, and I am truly thankful for the opportunity you have given me.

I am currently majoring in Business Management with an emphasis in Finance. This semester, I am preparing for graduation by taking a full academic course load, participating in two on-campus internships, and competing in the CFA Institute Research Challenge. While these experiences are invaluable to my growth, the demanding workload has limited my ability to work the full 19 hours per week needed to fully cover my account balance before the semester ends.

Your financial support provides me with reassurance and confidence, allowing me to devote my full effort to my studies, internships, and the CFA competition. Because of your generosity, I am better positioned to perform at my best and successfully complete these important commitments. I deeply appreciate your support and am committed to working toward financial independence.

Your dedication to helping students like me is truly inspiring, and I hope to follow your example by giving back and supporting future generations. Thank you once again for your generosity and belief in my education.

Sincerely,
Luo-Hao Chen`,
    thankYouVideo: null,
  },
];

/** A student has a detail page only if we have something to put on it. */
export const hasStory = (student) =>
  Boolean(student.story || student.thankYouNote || student.thankYouVideo);

export const publishedStudents = students.filter((s) => s.published);

export const getStudentBySlug = (slug) =>
  publishedStudents.find((s) => s.slug === slug) || null;

/** Newest cohort first, so the most recent recipients lead the page. */
export const studentsByCohort = () => {
  const byYear = new Map();
  publishedStudents.forEach((student) => {
    if (!byYear.has(student.cohort)) byYear.set(student.cohort, []);
    byYear.get(student.cohort).push(student);
  });
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, list]) => ({ year, students: list }));
};

export const featuredStudents = publishedStudents.filter(
  (s) => s.featured && hasStory(s)
);

export const initialsOf = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
