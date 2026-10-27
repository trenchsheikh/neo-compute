import Link from 'next/link';
export function Brand({compact=false}:{compact?:boolean}){return <Link href="/" aria-label="Neo Compute home" className="brand"><span className="brand-glyph" aria-hidden="true"><i/><i/><i/></span><span className="brand-name">neo<span>.</span></span>{!compact&&<small>COMPUTE</small>}</Link>}
