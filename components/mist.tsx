export const Mist = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-full mist opacity-60 dark:opacity-30 pointer-events-none max-lg:hidden' />
      <div className='mobile-mist absolute left-32 top-0 w-full h-full scale-150 opacity-50 dark:opacity-20 pointer-events-none lg:hidden' />
    </div>
  )
}
