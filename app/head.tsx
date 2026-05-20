export default function Head() {
  return (
    <>
      <link rel="icon" type="image/png" sizes="any" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} />
      <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} />
    </>
  )
}
