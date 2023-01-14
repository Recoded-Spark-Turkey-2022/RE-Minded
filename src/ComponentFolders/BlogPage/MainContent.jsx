import React from 'react';
import blogImage from './Images/TopImage.svg';

function MainConntent() {
  return (
    <div className="flex flex-col font-poppins uppercase self-center w-full gap-16 ">
      <div className="self-center pt-14 pl-10 pr-10">
        <img src={blogImage} alt="blog" />
      </div>

      <div className='self-center flex flex-col lg:gap-20 gap-10 lg:pl-48 pl-12 lg:pr-72 pr-16 lg:pt-6 pt-2'>
        <div className="flex flex-col gap-8">
          <div className="lg:text-5xl text-3xl">Mental Health and Technology</div>
          <div className="lg:text-lg text-base">
            Technology and mental well-being might seem like profoundly
            antagonistic terms. However, there are excellent digital tools to
            help you reach mindfulness and to practice meditation. You can even
            use smartphone apps, virtual reality solutions and digital devices
            as a form of relieving stressing and achieving digital detox &#45;
            as, after a while, you will be able to practice all types of
            anti-anxiety skills on your own. So, let The Medical Futurist show
            you how you can enhance your mental and emotional health with the
            help of technology.
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="lg:text-3xl text-xl">
            The need for taking care of our emotional health
          </div>
          <div className="lg:text-lg text-base">
            “Just as we observe physical hygiene to stay well, we need to
            cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on
            his Twitter-feed. There are three crucial points around His
            Holiness&#39; statement. First and foremost, the popularity of
            health-enhancing, physically active lifestyle is soaring worldwide.
            Nevertheless, there&#39;s always room for improvement: the WHO says
            that globally, 23 percent of adults and 81 percent of school-going
            adolescents are not active enough. According to the organization,
            adults aged 18-64 should do at least 150 minutes of moderately
            intense physical activity each week, which is not unaccomplishable.
            Moreover, the numerically and statistically driven 21st-century mind
            could take a great inspiration and power from the various fitness
            trackers and wearables.
          </div>
          <div className="lg:text-lg text-base">
            Secondly, emotional hygiene seems to be thrown into the shade
            nowadays. Somehow, the culture of busyness prevents us from
            squeezing some time for mental health into our packed schedules.
            Information is pouring on us from millions of communication
            channels; we are connecting with hundreds of &#39;friends&#39; on
            social media, we are obsessed with data due to the fear of missing
            out and time management slices up our days into meetings and
            to-do-lists.
          </div>
          <div className="lg:text-lg text-base">
            The pressure to perform and the stress to achieve is the air every
            busy-bee is breathing. However, turbulent lifestyle comes with a
            price. No wonder so many people have mental health issues. In the
            US, that means one in five adults &#45; more than 40 million
            Americans! On the old continent, 27 percent of the population has to
            cope with mental disorders, which means 83 million struggling
            Europeans. In Asia, the prevalence of depression is 20 percent in
            Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in
            Malaysia and 16.5 percent in China.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainConntent;
