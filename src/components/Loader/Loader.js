import { ThreeDots } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ThreeDots
        height={80}
        width={80}
        color="#e50914"
        radius="9"
        ariaLabel="three dots loading"
        wrapperClassName=""
        wrapperStyles={{}}
        visible={true}
      />
    </LoaderWrap>
  );
};
