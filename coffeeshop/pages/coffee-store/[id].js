import { useRouter } from 'next/router';
import Link from 'next/Link';

const CoffeStore = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href='/' scroll={false}>
        Back to home
      </Link>
      <div>Coffee store with id: {id}</div>;
    </>
  );
};

export default CoffeStore;
