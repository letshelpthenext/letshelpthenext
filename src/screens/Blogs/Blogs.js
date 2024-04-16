import { useEffect, useRef, useState } from 'react';
import {
  MainWrapper,
  MainBlogWrapper,
  BlogWrapper,
  BlogImageWrapper,
  BlogDescWrapper,
} from './blogs.styles';

const Blogs = () => {
  const text = 'On Friday, December 1st, 2023, a momentous occasion unfolded at Adobe in the form of a fundraising event celebrating the inauguration of Let\'s Help The Next, a newly established 501(c)(3) organization dedicated to empowering self-motivated and determined young individuals with limited resources to pursue their educational dreams.';

  const containerRef = useRef(null);
  const [maxLines, setMaxLines] = useState(3); // Default maximum lines

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the maximum number of lines based on container height
    const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
    const maxHeight = container.clientHeight;
    const newMaxLines = Math.floor(maxHeight / lineHeight);

    // Update the state with the calculated max lines
    setMaxLines(newMaxLines);
  }, [text]);

  return (
    <MainWrapper>
      <MainBlogWrapper>
        <BlogWrapper to='/blogs/dnwap'>
          <BlogImageWrapper>
            <img src='https://picsum.photos/200/300' alt='blog' />
          </BlogImageWrapper>
          <BlogDescWrapper>
            <h5>Date Night WIth A Purpose</h5>
            <div ref={containerRef} style={{ WebkitLineClamp: maxLines }}>
              {text}
            </div>
          </BlogDescWrapper>
        </BlogWrapper>
        <BlogWrapper to='/home'>
          <BlogImageWrapper>
            <img src='https://picsum.photos/200/300' alt='blog' />
          </BlogImageWrapper>
          <BlogDescWrapper>
            <div>kjdhbvjh</div>
          </BlogDescWrapper>
        </BlogWrapper>
      </MainBlogWrapper>
    </MainWrapper>
  );
};

export default Blogs;
