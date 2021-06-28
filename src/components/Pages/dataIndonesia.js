import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import firebase from '../../config/firebase';


const Indonesia = () => {

    const [indo, setdataIndonesia] = useState([])
    useEffect(()=> {
        firebase.database().ref('DataIndonesia').on('value', (res) => {
            if (res.val()){
                const rawMeta = res.val()
                const dataIndonesiaArr = [];
                Object.keys(rawMeta).map((item) => (
                    dataIndonesiaArr.push({
                        id : item,
                        ...rawMeta[item],
                    })
                    ))
                setdataIndonesia(dataIndonesiaArr)
            }
        });
    }, [])


    return (
        <div className="container">
            <NavBar/>
            <h1>Data Indonesia</h1>
            <hr/>
            <br/>
            <div class="card text-white bg-warning col-3">
            {indo.map((item) => (
                        <tr key={item.id}>
                            <br/>
                           <strong><p>Casus : {item.casus}</p></strong>
                            <br/>
                            <strong><p>Recovered :{item.recovered}</p></strong>
                            <br/>
                            <strong><p>Deaths : {item.deaths}</p></strong>
                            
                        </tr>
                        
                    ))}
            </div>
        </div>
    );
};

export default Indonesia;