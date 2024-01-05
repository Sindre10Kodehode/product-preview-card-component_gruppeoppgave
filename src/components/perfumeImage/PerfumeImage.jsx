import BGDESKTOP from "/image-product-desktop.jpg"
import BGMOBILE from "/image-product-mobile.jpg"
import './PerfumeImage.css'

export const PerfumeImage = () => {
  return (
      <figure className="img_wrapper">
      <img src={BGDESKTOP} alt="" className="desktop_image" />
      <img src={BGMOBILE} alt="" className="mobile_image" />
    </figure>
  )
}

{/* //TODO: Bruk media queries for å vise riktig bilde (1440px for desktop, 375px for mobile) */}
/* 
if (window.matchMedia("(max-width: 375px)")){
        return (<picture className="img_wrapper">
                <img src={BGMOBILE} alt="" className="mobile_image" />
                </picture>
      )} else {
        return (<picture className="img_wrapper">
               <img src={BGDESKTOP} alt="" className="desktop_image" />
              </picture>
     )} */