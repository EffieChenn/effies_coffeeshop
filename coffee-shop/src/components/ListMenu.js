import React, { useState, useEffect } from "react";

const ListMenu = () => {

    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        try {
            const fetchItems = await fetch("http://localhost:6005/api/v1/menu",{
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
            const jsonData = await fetchItems.json();

            setItems(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getAllItems();
    }, []);

    console.log(items);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image_id</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.img_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListMenu;