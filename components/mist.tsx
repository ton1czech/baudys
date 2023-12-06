export const Mist = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full h-full mist opacity-60 dark:opacity-30 max-lg:hidden' />
      <div className='mobile-mist absolute left-1/2 -translate-x-1/2 top-0 w-full h-full scale-150 opacity-50 dark:opacity-20 lg:hidden' />
    </div>
  )
}
