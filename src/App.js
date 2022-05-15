import React, { useState } from 'react';
import { createGIF } from 'gifshot';

function App() {

  const [progress, setProgress] = useState(0);

  const handleClick = () => {

    const images = [
      'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
      'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
      'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
      'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
      'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
      'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
      'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
      'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
      'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
      'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg'
    ];

    const options = {
      images: images,
      gifWidth: 500,
      gifHeight: 300,
      numWorkers: 5,
      frameDuration: 0.01,
      sampleInterval: 10,
      progressCallback: e => setProgress(parseInt(e * 100))
    };

    createGIF(options, obj => {
      if (!obj.error) {
        const link = document.createElement('a');
        link.download = 'sample.gif';
        link.href = obj.image;
        link.click();
        setProgress(0);
      }
    });
  }

  return (
    <div className="App">
      <h3>Create a GIF from images in React - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
      <button onClick={handleClick}>Click to create a GIF</button>
      {progress !== 0 && <label>Creating GIF... {progress}%</label>}
    </div>
  );
}

export default App;