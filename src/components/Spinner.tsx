import Image from 'next/image';

type Proptype={
  size?:number
}

export default function Spinner(props:Proptype) {

  return (
    <Image src={'/spinner.gif'} alt='spinner loading' width={props.size} height={props.size}></Image>
  )
}
