import React, { useRef } from 'react'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
import type { Md2PosterRef } from './packages/Md2Poster'

function App() {
  const markdownRef = useRef<Md2PosterRef>(null);
 
  const handleCopy = () => {
    markdownRef?.current?.handleCopy().then((res) => {
      alert('promise copy')
    });
  };

  const handleDownload = async () => {
    try {
      await markdownRef.current?.handleDownload();
    } catch (error) {
      console.error('Failed to download poster:', error);
    }
  };

  const copySuccessCallback = () => {
    console.log('Copy Success');
  }
  
  const markdown = `
  # Hello World
  ## Hello World
  ### Hello World
  `

  return (
    <main>
      <Md2Poster theme="SpringGradientWave" size='mobile' ref={markdownRef} copySuccessCallback={copySuccessCallback} canCopy>
        <Md2PosterHeader className='flex justify-between items-center px-4'>
          <span>
            @leonho
          </span>
          <span>
            {new Date().toISOString().slice(0, 10)}
          </span>
        </Md2PosterHeader>
        <Md2PosterContent>{markdown}</Md2PosterContent>
        <Md2PosterFooter className='flex justify-center items-center gap-2'>
          <button 
            onClick={handleCopy} 
            className='border p-2 rounded border-white hover:bg-white/10 transition-colors'
          >
            Copy Image
          </button>
          <button 
            onClick={handleDownload} 
            className='border p-2 rounded border-white hover:bg-white/10 transition-colors'
          >
            Download
          </button>
        </Md2PosterFooter>
      </Md2Poster>
    </main>
  )
}

export default App
