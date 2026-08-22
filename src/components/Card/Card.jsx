import React from 'react'
import './Card.sass'

const DEFAULT_RATIO = { w: 487, h: 242 }

function parseRatio(ratio) {
  if (!ratio || typeof ratio !== 'string') return DEFAULT_RATIO
  const [w, h] = ratio.split('x').map(Number)
  if (!w || !h) return DEFAULT_RATIO
  return { w, h }
}

/**
 * Card
 *
 * Props:
 * - ratio: string 'WxH', width to height ratio, default '487x242'
 * - pic: image src, same width as card, cropped if it overlaps card height
 * - button1: { label, url } bottom-left white button, opens in new tab
 * - button2: { label, url } bottom-right white button, opens in new tab
 * - hidden: if true, card renders as an empty box with only a white border
 */
export default function Card({
  ratio = '487x242',
  pic = '',
  button1,
  button2,
  hidden = false
}) {
  const { w, h } = parseRatio(ratio)
  const hasButton1 = button1 && button1.label
  const hasButton2 = button2 && button2.label

  return (
    <div className='card-custom' style={{ aspectRatio: `${w} / ${h}` }}>
      {!hidden && (
        <>
          {pic && <img className='card-custom__pic' src={pic} alt='' />}

          {(hasButton1 || hasButton2) && (
            <div className='card-custom__buttons'>
              {hasButton1 && (
                <div className='card-custom__buttons-slot card-custom__buttons-slot--left'>
                  <a
                    className='card-custom__button'
                    href={button1.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {button1.label}
                  </a>
                </div>
              )}
              {hasButton2 && (
                <div className='card-custom__buttons-slot card-custom__buttons-slot--right'>
                  <a
                    className='card-custom__button'
                    href={button2.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {button2.label}
                  </a>
                </div>
              )}
            </div>
          )}

          {/* <iframe
            src="https://vk.ru/video_ext.php?oid=123130647&id=456240176&autoplay=1"
            width="853"
            height="480"
            style={{backgroundColor: '#000'}}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
          /> */}
        </>
      )}
    </div>
  )
}
