import Link from 'next/link';
import Router, { useRouter } from 'next/router';


export default function index()
{
  //Link for cemit app
  const router = useRouter();
return (<Link href="/organizations/[router.orgName]" as="/organizations/cemit">

    <a>
      Go to Cemit Website
    </a>
  </Link>)

};