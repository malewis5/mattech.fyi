import { PhotosRow } from '@/components/PhotosRow'

import image1 from '@public/images/image-1.webp'
import image2 from '@public/images/image-2.webp'
import image3 from '@public/images/image-3.webp'
import image4 from '@public/images/image-4.webp'
import image5 from '@public/images/image-5.webp'
import image6 from '@public/images/image-6.jpg'

const photosArray1 = [
  { image: image1, location: 'Moab, Utah' },
  { image: image2, location: 'Bryce Canyon, Utah' },
  { image: image6, location: 'Death Valley, California' },
  { image: image4, location: 'Death Valley, California' },
  { image: image5, location: 'Moab, Utah' },
]

const photosArray2 = [
  { image: image1, location: 'Moab, Utah' },
  { image: image2, location: 'Bryce Canyon, Utah' },
  { image: image6, location: 'Death Valley, California' },
  { image: image4, location: 'Death Valley, California' },
  { image: image5, location: 'Moab, Utah' },
]

function Photos() {
  return (
    <>
      <PhotosRow photosArray={photosArray1} />
      <PhotosRow photosArray={photosArray2} />
      <PhotosRow photosArray={photosArray1} />
      <PhotosRow photosArray={photosArray2} />
    </>
  )
}

export default Photos
