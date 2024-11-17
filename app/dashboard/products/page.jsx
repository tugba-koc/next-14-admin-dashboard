/* import { deleteUser } from '@/app/lib/actions';
import { fetchUsers } from '@/app/lib/data'; */
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  /* const { count, users } = await fetchUsers(q, page); */

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={user.img || '/noproduct.png'}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  Iphone
                </div>
              </td>
              <td>Desc</td>
              <td>$999</td>
              <td>13.01.2022</td>
              <td>72</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type='hidden' name='id' value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default ProductsPage;
