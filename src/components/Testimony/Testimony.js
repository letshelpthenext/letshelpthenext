import { MainWrapper } from './testimony.styles';

const Testimony = ({ userTestimony, author }) => {
  return (
    <MainWrapper>
      <div>
        {userTestimony}
      </div>
      <h6 className='mt-2'>~{author}</h6>
    </MainWrapper>
  );
};

export default Testimony;
