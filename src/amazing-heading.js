import React, {useEffect, useMemo, useState, useRef} from 'react';

export default AmazingHeading;

const AmazingHeading = ({text, ...rest}) => {
  const ref = useRef(null);
  const title = useMemo(() => text, [text]);
  const [hasText, setHasText] = useState(Boolean(title));

  useEffect(() => {
    if (hasText) {
      ref.current.innerHTML = title;
    } else {
      ref.current.innerHTML = 'Amazing Heading!';
    }
  }, [title, hasText]);

  useEffect(() => {
    setHasText(Boolean(title));
  }, [title]);

  return <h1 ref={ref} {...rest} />;
};
