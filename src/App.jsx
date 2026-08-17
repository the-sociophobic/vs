import React from 'react'

import RunningLine from './components/RunningLine/RunningLine.jsx'
import Card from './components/Card/Card.jsx'

import './App.sass'

// Cards data. Fill in real values later; empty strings are placeholders.
// ratio: '' falls back to the Card default of 487x242.
const cardsData = [
  {
    ratio: '',
    pic: '0.png',
    button1: { label: 'Rec', url: 'Леф.рф' },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '1.png',
    button1: { label: 'Rec', url: 'Леф.рф' },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '2.png',
    button1: { label: 'Rec', url: 'Леф.рф' },
    button2: { label: '', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '3.png',
    button1: { label: 'Аукцион', url: 'Леф.рф' },
    button2: { label: 'Бал', url: '' },
    hidden: false
  },
  {
    ratio: '',
    pic: '',
    button1: { label: '', url: '' },
    button2: { label: '', url: '' },
    hidden: true
  },
]

export default function App() {
  return (
    <div className='page'>
      <RunningLine text='ВНИМАНИЕ 22 АВГУСТА ПРОДАЁТСЯ ВИШНЁВЫЙ САД → АУКЦИОН → БАЛ'>
      </RunningLine>

      <main className='page__content container-fluid'>
        <div className='page__cards'>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
          <div className='page__footer-text text-center py-3 mt-4'>
            Сайт – <a href='https://Леф.рф' target='_blank' rel='noopener noreferrer'>Леф.рф</a>
          </div>
      </main>
    </div>
  )
}
