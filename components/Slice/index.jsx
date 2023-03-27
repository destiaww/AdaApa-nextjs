import React, { useState } from 'react';

const Slice = ({ content, slice, classname }) => {
  const [showFullContent] = useState(false);
  return <p className={classname}>{showFullContent ? content : `${content.slice(0, slice)}...`}</p>;
};

export default Slice;