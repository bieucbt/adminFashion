import React, { memo } from 'react'

const TagList = ({label, text, setText, listText, setListText}) => {
  return (
    <div className="mt-3">
          <label htmlFor="size">{label}</label>
          <div>
            {
              listText.map((text, i) => <div key={i} className="flex items-center gap-2">
                <p>{text}</p>
                <div 
                className="cursor-pointer"
                onClick={() => {setListText(draft => {draft.splice(i, 1)})}}>delete</div>
              </div>)
            }
          </div>
          <input type="text" id='size' className='inputForm' value={text}
          onChange={e => setText(e.target.value)} />
          <button type="button" 
          onClick={() => {
            setListText(draft => {draft.push(text)})
            setText('')
            }}>Thêm {label}</button>
        </div>
  )
}

export default  memo(TagList)