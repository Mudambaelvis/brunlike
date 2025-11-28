import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar(){
const [open, setOpen] = useState(false)
const loc = useLocation()


const linkClass = (path) => `px-3 py-2 rounded ${loc.pathname===path? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-50'}`


return (
<nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
<div className="container flex items-center justify-between h-16">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-slate-700 font-bold">S</div>
<div className="text-slate-900 font-semibold">Scaffold</div>
</div>


{/* Desktop links */}
<div className="hidden md:flex items-center space-x-2">
<Link to="/" className={linkClass('/')}>Home</Link>
<Link to="/research" className={linkClass('/research')}>Research</Link>
<Link to="/publications" className={linkClass('/publications')}>Publications</Link>
<Link to="/people" className={linkClass('/people')}>People</Link>
<Link to="/collaborations" className={linkClass('/collaborations')}>Collaborations</Link>
<Link to="/join" className={linkClass('/join')}>Join</Link>
<Link to="/contact" className={linkClass('/contact')}>Contact</Link>
</div>


{/* Mobile hamburger */}
<div className="md:hidden">
<button onClick={()=>setOpen(!open)} className="p-2 rounded bg-slate-100">
{open ? 'Close' : 'Menu'}
</button>
</div>
</div>


{/* Mobile menu */}
<div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${open? 'max-h-60':'max-h-0'}`}>
<div className="flex flex-col p-4 space-y-2">
<Link to="/" onClick={()=>setOpen(false)} className={linkClass('/')}>Home</Link>
<Link to="/research" onClick={()=>setOpen(false)} className={linkClass('/research')}>Research</Link>
<Link to="/publications" onClick={()=>setOpen(false)} className={linkClass('/publications')}>Publications</Link>
<Link to="/people" onClick={()=>setOpen(false)} className={linkClass('/people')}>People</Link>
<Link to="/collaborations" onClick={()=>setOpen(false)} className={linkClass('/collaborations')}>Collaborations</Link>
<Link to="/join" onClick={()=>setOpen(false)} className={linkClass('/join')}>Join</Link>
<Link to="/contact" onClick={()=>setOpen(false)} className={linkClass('/contact')}>Contact</Link>
</div>
</div>
</nav>
)
}