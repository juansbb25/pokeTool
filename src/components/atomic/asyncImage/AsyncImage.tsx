import React, { useEffect, useState } from 'react'

type myProps = {
  src: any
}
export const AsyncImage: React.FC<myProps> = (props) => {
  const [loadedSrc, setLoadedSrc] = useState(null)
  useEffect(() => {
    setLoadedSrc(null)
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src)
      }
      const image = new Image()
      image.addEventListener('load', handleLoad)
      image.src = props.src
      return () => {
        image.removeEventListener('load', handleLoad)
      }
    }
  }, [props.src])
  if (loadedSrc === props.src) {
    return <img {...props} />
  }
  return <img src={process.env.PUBLIC_URL + '/assets/pokeball.svg'}></img>
}
