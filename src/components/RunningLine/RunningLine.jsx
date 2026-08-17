import React from 'react'
import './RunningLine.sass'

const COPIES = 1

/**
 * RunningLine
 *
 * One continuous marquee that wraps clockwise around all four edges
 * of the viewport (top -> right -> bottom -> left). Each edge is a
 * thin strip clipped with a 45deg miter at both ends, like a picture
 * frame corner, so the text visually crosses from one edge to the
 * next through the diagonal corner cut.
 *
 * Props:
 * - text: string, the text to loop
 * - speed: number, seconds for one full loop per edge
 * - children: optional static content, rendered centered on top of
 *   the bottom edge (used for the footer link)
 */
export default function RunningLine({ text = '', speed = .05 }) {
  const copies = new Array(COPIES).fill(text)

  return (
    <div className='running-frame' style={{ '--rl-speed': `${1 / speed}s` }}>
      <div className='running-frame__edge running-frame__edge--top'>
        <div className='running-frame__track running-frame__track--h running-frame__track--to-right'>
          {copies.map((t, i) => (
            <span className='running-frame__text' key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className='running-frame__edge running-frame__edge--right'>
        <div className='running-frame__track running-frame__track--v running-frame__track--to-down'>
          {copies.map((t, i) => (
            <span className='running-frame__text running-frame__text--v' key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className='running-frame__edge running-frame__edge--bottom'>
        <div className='running-frame__track running-frame__track--h running-frame__track--to-left'>
          {copies.map((t, i) => (
            <span className='running-frame__text' key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className='running-frame__edge running-frame__edge--left'>
        <div className='running-frame__track running-frame__track--v running-frame__track--to-up'>
          {copies.map((t, i) => (
            <span className='running-frame__text running-frame__text--v-rev' key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
