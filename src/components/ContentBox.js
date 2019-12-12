import React from 'react'

const ContentBox = (props) => {
  // console.log(props.explanation)
  return (
    <section className='contentBox'>
      <h1>
        Explanation
      </h1>
      <article className='explanation'>
        {props.explanation}
      </article>
    </section>
  )
}

export default ContentBox
