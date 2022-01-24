import React, { FC } from 'react'

const InfinityIcon: FC<{ className?: string }> = ({ className, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="infinity"
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M488.88 96C406.31 96 346.21 178.45 320 222.45 293.79 178.45 233.69 96 151.12 96 67.78 96 0 167.78 0 256s67.78 160 151.12 160c82.56 0 142.67-82.45 168.88-126.46C346.21 333.55 406.31 416 488.88 416 572.22 416 640 344.22 640 256S572.22 96 488.88 96zM151.12 384C85.44 384 32 326.58 32 256s53.44-128 119.12-128c78.03 0 136.47 100.61 150.94 128-14.47 27.39-72.9 128-150.94 128zm337.76 0c-78.03 0-136.47-100.61-150.94-128 14.47-27.39 72.91-128 150.94-128C554.56 128 608 185.42 608 256s-53.44 128-119.12 128z"
        {...props}
      ></path>
    </svg>
  )
}

export default InfinityIcon
