import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface PhotoProps {
  photo: string
}

export const Photo = ({ photo }: PhotoProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <img src={photo} alt='photo' className='rounded-lg' />
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
