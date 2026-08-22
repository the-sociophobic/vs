import React from 'react'

import RunningLine from './components/RunningLine/RunningLine.jsx'
import Card from './components/Card/Card.jsx'

import './App.sass'
import Description from './components/Description/Description.jsx'

// Cards data. Fill in real values later; empty strings are placeholders.
// ratio: '' falls back to the Card default of 487x242.
const cardsData = [
  {
    ratio: '',
    pic: '',
    button1: { label: '', url: '' },
    button2: { label: '', url: '' },
    hidden: true
  },
  {
    ratio: '',
    pic: '0.png',
    button1: {
      label: 'Rec',
      url: 'https://vkvideo.ru/video123130647_456239866',
      thumbnail: 'https://iv.okcdn.ru/getVideoPreview?id=13265621879319&idx=1&type=39&tkn=vx_PbZJ5XWBSz9EbWXL0a-gWpuo&fn=vid_u'
    },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '1.png',
    button1: {
      label: 'Rec',
      url: 'https://vkvideo.ru/video123130647_456240122',
      thumbnail: 'https://iv.okcdn.ru/getVideoPreview?id=15759175518743&idx=0&type=39&tkn=5meQY4ZOy_zO3mD4-VhewEXWOkM&fn=vid_u',
    },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '2.png',
    button1: {
      label: 'Rec',
      url: 'https://vkvideo.ru/video123130647_456240176',
      thumbnail: 'https://iv.okcdn.ru/getVideoPreview?id=17385868823063&idx=2&type=39&tkn=B5wS7c44BsRJ_tSj0oCHrE19QyI&fn=vid_u',
    },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '3.png',
    button1: { label: 'Аукцион', url: 'https://vkvideo.ru/live-240861697_456239017' },
    button2: { label: 'Бал', url: 'https://vkvideo.ru/live-240861697_456239017' },
    hidden: false
  },
].reverse()


export default function App() {
  const mappedCards = cardsData.map((card, index) => (
    <Card key={index} {...card} />
  ))

  return (
    <div className='page'>
      <RunningLine text='ВНИМАНИЕ 22 АВГУСТА ПРОДАЁТСЯ ВИШНЁВЫЙ САД → АУКЦИОН → БАЛ'>
      </RunningLine>

      <main className='page__content container-fluid'>
        <div className='page__cards'>
          {mappedCards[0]}
          <Description />
          {mappedCards.slice(1)}
        </div>
        <div className='page__footer-text text-center py-3 mt-4'>
          Сайт – <a href='https://Леф.рф' target='_blank' rel='noopener noreferrer'>Леф.рф</a>
        </div>
      </main>
    </div>
  )
}
