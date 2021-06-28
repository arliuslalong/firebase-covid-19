import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import firebase from '../../config/firebase';


const Internasional = () => {

    const [indo, setIndonesia] = useState([])
    useEffect(()=> {
        firebase.database().ref('DataInternasional').on('value', (res) => {
            if (res.val()){
                const rawMeta = res.val()
                const outArr = [];
                Object.keys(rawMeta).map((item) => (
                    outArr.push({
                        id : item,
                        ...rawMeta[item],
                    })
                    ))
                setIndonesia(outArr)
            }
        })
    }, [])


    return (
        <div className="container">
            <NavBar/>
            <h1>Data Internasional</h1>
            <hr/>
            <br/>
            <div class="card text-white bg-danger col-3">
            {indo.map((item) => (
                        <tr key={item.id}>
                            <br/>
                           <strong><p>Positif : {item.positive}</p></strong>
                            <br/>
                            <strong><p>Recovered :{item.recovery}</p></strong>
                            <br/>
                            <strong><p>Deaths : {item.death}</p></strong>
                            
                        </tr>
                        
                    ))}
            </div>
        </div>
    )
}

export default Internasional;