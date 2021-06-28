import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import firebase from '../../config/firebase';


const Provinsi =() => {

    const [namaProvinsi, setNamaProvinsi] = useState('')
    const [casusDeaths, setCasusDeaths] = useState('')
    const [casusRecovered, setCasusRecovered] = useState('')
    const [casusPositif, setCasusPositif] = useState('')
     const [button, setButton] = useState("Save Data")
     const [selectedProv, setSelectedProv] = useState({})
    const [prov, setProv] = useState([])
    useEffect(()=>{
        firebase.database().ref('DataProvinsi').on('value', (res) => {
            if(res.val()){
                const rawData = res.val();
                const ProvinsiArr = [];
               Object.keys(rawData).map(item => (
                   ProvinsiArr.push ({
                       id : item,
                       ...rawData[item],
                   })
                   ))
               setProv(ProvinsiArr)
            }
        })
    }, [])

    const resetForm = () => {
        setNamaProvinsi('');
        setCasusDeaths('');
        setCasusRecovered('');
        setCasusPositif('');
        setButton('Save Data')
        setSelectedProv({})

    }

    const onSubmit = () => {
        const data = {
             namaProvinsi : namaProvinsi,
             casusDeaths: setCasusDeaths,
             casusRecovered: casusRecovered,
             casusPositif : casusPositif,
        }
        if(button === 'Save Data')
       {
           //save
        firebase.database().ref('DataProvinsi').push(data);
       }else{
           //update
           firebase.database().ref(`DataProvinsi/${selectedProv.id}`).set(data);
       }
       
       
       resetForm();
    } 

    const onUpdate = (item) => {
        setNamaProvinsi(item.namaProvinsi)
        setCasusDeaths(item.casusDeaths)
        setCasusRecovered(item.casusRecovered)
        setCasusPositif(item.casusPositif)
        setButton('Update Data');
        setSelectedProv(item);
    };

    const onDeleteData = (item) => {
        firebase.database().ref(`DataProvinsi/${item.id}`).remove();
    }

    return (
        <div className="container mt-5">
            <NavBar/>
            <h1>Data Provinsi</h1>
            <div className="col-6">
                <p>Nama Provinsi</p>
            <input className="form-control" placeholder="Name By Provinsi" value={namaProvinsi} onChange={(e) => setNamaProvinsi(e.target.value)}/>
            <p>Casus Of Recovered</p>
            <input className="form-control" placeholder="Number Of Recovered" value={casusRecovered} onChange={(e) => setCasusRecovered(e.target.value)}/>
            <p>Casus Of Deaths</p>
            <input className="form-control" placeholder="Number Of Deaths" value={casusDeaths} onChange={(e) => setCasusDeaths(e.target.value)}/>
            <p>Casus Of Positif</p>
            <input className="form-control" placeholder="Number Of Positif" value={casusPositif} onChange={(e) => setCasusPositif(e.target.value)}/>
            <hr/>
            <br/>
            <button className="btn btn-outline-dark" onClick={onSubmit}>{button}</button>
            {button === "Update Data" && (
                <button className = "btn btn-outline-warning" onClick={resetForm}>Cancel Data</button>
            )}
            </div>
            <hr/>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Nama Provinsi </th>
                        <th>Casus Recovered </th>
                        <th>Casus Deaths</th>
                        <th>Casus Positif ➕</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prov.map((item) => (
                            <tr key={item.id}>
                                <td>{item.namaProvinsi}</td>
                                <td>{item.casusRecovered}</td>
                                <td>{item.casusDeaths}</td>
                                <td>{item.casusPositif}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onUpdate(item)}>Update Data</button>
                                    <button className="btn btn-light" onClick={()=> onDeleteData(item)}>Delete Data</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Provinsi;