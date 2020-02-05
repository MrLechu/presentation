import React, { useEffect, useState } from 'react';
import photoService from './photoService';

function Photos() {
  const [data, set] = useState({});
  useEffect(() => {
    photoService.get().then(response => {
      set(response);
    });
  }, []);

  if (!Object.keys(data).length) {
    return <p>Wait...</p>;
  } else {
    return <span data-testid="url">{data.url}</span>;
  }

}

export default Photos;
