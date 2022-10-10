import type { NextPage } from 'next'
import Link from 'next/link';
import Seo from '../components/Seo';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  original_title: String;
  poster_path: String;
};

export default function Home({ results })  {
  return (
    <>
      <div className = "container">
        <Seo title = "Home"/>
        {results?.map(({id, original_title, poster_path}: Movie) => (
          <div className = "movie" key={id}>
            <img src = {`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <h4>{original_title}</h4>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 255, 0.1) 0px 4px 12px;
        }

        .movie:hover img {
          transform: scale(1.05) translateY(0px);
        }
        
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const LOCAL_BASE:String = "https://react-practice-eqgph.run.goorm.io";

  const { results } = 
    await (await fetch(`${LOCAL_BASE}/api/movies`)).json(); //server-side에서 일어나는 영역이므로 프론트엔드에서와는 다르게 절대주소로 적어 주어야 인식이 가능함

  return {
    props: {
      results,
    },
  }
}