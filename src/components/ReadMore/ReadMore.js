import { useState } from 'react';

import { ReadOrHide, Text } from './ReadMore.styled';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text>
      {isReadMore ? text.slice(0, 150) : text}
      <ReadOrHide onClick={toggleReadMore}>
        {isReadMore ? '...read more' : ' show less'}
      </ReadOrHide>
    </Text>
  );
};
