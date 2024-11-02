import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [originalReadList, setOriginalReadList] = useState([]);
    const [originalWishList, setOriginalWishList] = useState([]); // Original wish list backup
    const [readSort, setReadSort] = useState('');
    const [wishSort, setWishSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
        setOriginalReadList(readBookList);

        const wishBookList = allBooks.filter(book => !storedReadListInt.includes(book.bookId));
        setWishList(wishBookList);
        setOriginalWishList(wishBookList);
    }, [allBooks]);

    // Sorting for Read List
    const handleReadSort = (sortType) => {
        setReadSort(sortType);
        let sortedReadList = [...originalReadList];

        if (sortType === 'No of Page') {
            sortedReadList.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortType === 'Ratings') {
            sortedReadList.sort((a, b) => b.rating - a.rating);
        }

        setReadList(sortedReadList);
    };

    // Sorting for Wish List
    const handleWishSort = (sortType) => {
        setWishSort(sortType);
        let sortedWishList = [...originalWishList];

        if (sortType === 'No of Page') {
            sortedWishList.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortType === 'Ratings') {
            sortedWishList.sort((a, b) => b.rating - a.rating);
        }

        setWishList(sortedWishList);
    };

    return (
        <div>
            <h3 className="text-3xl my-8 font-extrabold">Listed Books</h3>

            {/* Sorting for Read List */}
            <div className="dropdown mt-10 mb-28">
                <div tabIndex={0} role="button" className="text-white btn w-full bg-[#23be0a] m-1">
                    {readSort ? `Sort Read List By: ${readSort}` : 'Sort Read List By'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li className="btn p-3 text-[#23be0a] btn-outline" onClick={() => handleReadSort('Ratings')}>
                        <a>Ratings</a>
                    </li>
                    <li className="btn p-3 text-[#23be0a] btn-outline" onClick={() => handleReadSort('No of Page')}>
                        <a>No of Page</a>
                    </li>
                </ul>
            </div>

            {/* Sorting for Wish List */}
            <div className="dropdown mb-10">
                <div tabIndex={0} role="button" className="text-white btn w-full bg-[#23be0a] m-1">
                    {wishSort ? `Sort Wish List By: ${wishSort}` : 'Sort Wish List By'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li className="btn p-3 text-[#23be0a] btn-outline" onClick={() => handleWishSort('Ratings')}>
                        <a>Ratings</a>
                    </li>
                    <li className="btn p-3 text-[#23be0a] btn-outline" onClick={() => handleWishSort('No of Page')}>
                        <a>No of Page</a>
                    </li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl">Books I read: {readList.length}</h2>
                    <div className="grid grid-cols-3 gap-5">
                        {readList.map(book => (
                            <Book key={book.bookId} book={book}></Book>
                        ))}
                    </div>
                </TabPanel>
                
                <TabPanel>
                    <h2 className="text-2xl">My Wish List: {wishList.length}</h2>
                    <div className="grid grid-cols-3 gap-5">
                        {wishList.map(book => (
                            <Book key={book.bookId} book={book}></Book>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;
