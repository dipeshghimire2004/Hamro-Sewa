import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames:string[]=location.pathname.split('/').filter((x)=>x)
  return (
    <nav className='text-gray-300 text-sm py-2'>
        <ul className='flex items-center space-x-2'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            {pathnames.map((value, index)=>{
                const isLast = index === pathnames.length-1;
                const to= `${pathnames.slice(0, index+1).join('/')}`;
                return(
                    <li key={to} className=''>
                        <span>{'>'}</span>
                        {isLast ? (
                            <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                        ):(
                            <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                        )}
                    </li>
                );
            })}
        </ul>
    </nav>

  );
};

export default Breadcrumb