import { darken, lighten } from 'polished'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

import { contrastColorMode } from './utils'

export const SOCIALS = {
  discord: { icon: <FaDiscord />, link: 'https://discord.gg/h8PutAuDb9' },
  twitter: { icon: <FaTwitter />, link: 'https://twitter.com/ChewyAlienss' },
}

export const Footer = ({
  bgColor = 'rgb(26, 27, 32)',
  accentColor = '#FFFFFF',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className="mt-10 px-10 pt-5 md:px-32"
      style={{
        background: darken(0.03, bgColor),
      }}
    >
      <div className="flex w-full flex-wrap items-start justify-between gap-10 py-10">
        <div className="flex items-center">
          <img
            alt={bgColor}
            className="inline-block h-[28px]"
            src={'/cardinal-titled.png' }
          />
          <span
            className="ml-3 text-2xl font-semibold"
            style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
          >
         
          </span>
        </div>
        
      </div>
      <div
        className="text-md flex items-center justify-between border-t py-8 text-gray-400"
        style={{ borderColor: lighten(0.2, bgColor) }}
      >
        <div className="flex items-center justify-center gap-2 text-gray-400">
          Staking Pool
        </div>
        <div className="flex gap-4 text-gray-200">
          {Object.entries(SOCIALS).map(([id, { icon, link }]) => {
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ color: accentColor }}
                className={`opacity-80 transition-opacity hover:text-primary hover:opacity-100`}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      {/* <div className="text-md flex flex-row justify-center font-medium">
        Copyright 2022 Cardinal Labs. All rights reserved
      </div> */}
    </div>
  )
}
