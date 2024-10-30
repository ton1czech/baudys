import { Cursor } from '../cursor'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface PhotoProps {
  photo: string
}

export const Photo = ({ photo }: PhotoProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Cursor type='photo'>
          <img src={photo} alt='photo' className='rounded-lg' />
        </Cursor>
      </DialogTrigger>
      <DialogContent className='max-h-[90vh] max-w-[95vw]'>
        <img
          src={photo}
          alt='photo'
          className='max-h-[90vh] max-w-[95vw] rounded-lg'
        />
      </DialogContent>
    </Dialog>
  )
}
