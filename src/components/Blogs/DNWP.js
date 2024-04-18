import { MainWrapper, HeaderImageWrapper } from './blogs.styles';
import hImage from '../../assets/himage.jpeg';

const DNWP = () => {
  return (
    <MainWrapper>
      <h3>Let's Help The Next: A Night of Inspiration and Community</h3>
      <HeaderImageWrapper>
        <img src={hImage} alt='Mishma and Kim' />
        <div>
          <p>
            <ul>
              <li>Date: 1st December 2023</li>
              <li>Author: Mishma Buisson</li>
            </ul>
          </p>
          <hr />
          <p>
            On Friday, December 1st, 2023, a momentous occasion unfolded at
            Adobe in the form of a fundraising event celebrating the
            inauguration of Let's Help The Next, a newly established 501(c)(3)
            organization dedicated to empowering self-motivated and determined
            young individuals with limited resources to pursue their educational
            dreams
            <br />
            The evening commenced with warm welcomes and introductions, setting
            the stage for a heartwarming journey. As guests enjoyed a delectable
            dinner catered by JEMLY'S Restaurant, a palpable sense of
            anticipation filled the air. The anticipation culminated in a moving
            presentation showcasing the stories and aspirations of the
            recipients, highlighting the transformative power of education.
          </p>
        </div>
      </HeaderImageWrapper>
      <p>
        The evening's highlight was an inspiring and emotional presentation
        addressed by Mishma Buisson, the Founder of Let's Help The Next. With
        passion and eloquence, she articulated the organization's vision and
        mission, igniting a spark of hope and commitment within every attendee.
        <br />
        The night reached its crescendo with a captivating performance by
        Theophilus, a member of the Let's Help The Next Board of Directors. His
        music resonated with the emotions of the evening, leaving a lasting
        impression of inspiration and joy.
      </p>
      <p>
        Beyond the fundraising goals, the event transcended into a powerful
        testament to the transformative power of community. It was a night
        filled with sublime moments, heartfelt connections, and infectious
        laughter, reminding us of the strength that lies in collective action
        for a noble cause. However, the evening's success would have been
        impossible without the outstanding support of our incredible sponsors.
        JEMLY'S Restaurant provided a delicious authentic Haitian dinner for our
        guests, Mechanical Products in Midvale Utah generously donated funds to
        support the event, and Black Desert Resort created a beautiful and
        inspiring video of the recipients of Let's Help The Next. Their
        contributions were invaluable, and we are deeply grateful for their
        partnership.
      </p>
      <p>
        Let's Help The Next has taken its first steps towards a brighter future
        for deserving individuals, and the resounding success of this inaugural
        event serves as a powerful springboard for their journey. By supporting
        this organization and its dedicated sponsors, we can empower the next
        generation of leaders and changemakers, ensuring that access to
        education becomes a reality for all.
      </p>
      <h6>Gallery</h6>
      <div>Images here</div>
    </MainWrapper>
  );
};

export default DNWP;
