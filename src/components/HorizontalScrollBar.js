import React from 'react'

const HorizontalScrollBar = ({data}) => {
  return (
    <div>
      {data.map((item) => (
        <box>
          key = {item.id || item}
        </box>
      ))}
    </div>
  )
}

export default HorizontalScrollBar