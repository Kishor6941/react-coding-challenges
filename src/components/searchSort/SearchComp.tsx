import React, { useState, useEffect, useMemo } from 'react'
import type { data } from 'react-router-dom';

interface DataItem {
    username: string;
    email: string;
    phone: string;
}

const SearchComp = () => {
    const [data, setData] = useState<Array<DataItem>>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isSort, setSort] = useState(true)

    async function getUsers() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let users = await res.json()
            const formattedData = users.map((user: any) => ({
                username: user.username,
                email: user.email,
                phone: user.phone
            }))
            setData(formattedData?.sort((a:DataItem, b:DataItem) => a.username.localeCompare(b.username)))
        } catch (err) {

        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const filteredData = useMemo(() => {
      let filterData = [...data]

      if (searchTerm) {
        filterData = filterData.filter(item =>
          item.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      if (isSort) {
        filterData.sort((a, b) => a.username.localeCompare(b.username))
      }else {
        filterData.sort((a, b) => b.username.localeCompare(a.username))
      }

      return filterData
    }, [searchTerm,data,isSort])

    return (
        <div className='container col-md-6 mt-5 mx-auto'>
            <div>
                <input type="text" placeholder='search by username' className='form-control' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username <button className="btn btn-link" onClick={() =>setSort(prev => !prev)}>Sort</button></th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default SearchComp
