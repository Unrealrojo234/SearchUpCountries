import { useState,useEffect } from "react";
import './Navigation.css'

export default function Header(){
    /* making states to handle search */
    const[all,setAll] = useState(false)
    const[africa,setAfrica] = useState(false)
    const[asia,setAsia] = useState(false)
    const[americas,setAmericas] = useState(false)
    const[europe,setEurope] = useState(false)
    const[oceania,setOceania] = useState(false)

    const [photos, setPhotos] = useState([]);

    const [inputValue,setInputValue] = useState("")

    useEffect(() => {
      fetch('https://restcountries.com/v2/all')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPhotos(data);
        });
    }, []);

    const handleSelect = () => {
      

      if($('#all').is(':checked')){
        setAll(all => all = true)
        setAfrica(africa => africa = false)
        setAsia(asia=> asia = false)
        setAmericas(americas => americas = false)
        setEurope(europe => europe = false)
        setOceania(oceania => oceania = false)
      }

      else if($('#africa').is(':checked')){
        setAll(all => all = false)
        setAfrica(africa => africa = true)
        setAsia(asia=> asia = false)
        setAmericas(americas => americas = false)
        setEurope(europe => europe = false)
        setOceania(oceania => oceania = false)
        
      }

      else if($('#asia').is(':checked')){
        setAll(all => all = false)
        setAfrica(africa => africa = false)
        setAsia(asia=> asia = true)
        setAmericas(americas => americas = false)
        setEurope(europe => europe = false)
        setOceania(oceania => oceania = false)
      }

      else if($('#americas').is(':checked')){
        setAll(all => all = false)
        setAfrica(africa => africa = false)
        setAsia(asia=> asia = false)
        setAmericas(americas => americas = true)
        setEurope(europe => europe = false)
        setOceania(oceania => oceania = false)
      }

      else if($('#europe').is(':checked')){
        setAll(all => all = false)
        setAfrica(africa => africa = false)
        setAsia(asia=> asia = false)
        setAmericas(americas => americas = false)
        setEurope(europe => europe = true)
        setOceania(oceania => oceania = false)
      }

      else if($('#oceania').is(':checked')){
        setAll(all => all = false)
        setAfrica(africa => africa = false)
        setAsia(asia=> asia = false)
        setAmericas(americas => americas = false)
        setEurope(europe => europe = false)
        setOceania(oceania => oceania = true)
      }
    }
    
    setInterval(handleSelect,1000)
    



    const handleChange = (e) => {
      setInputValue(e.target.value)
      console.log(inputValue)
      
    }

    return (
      <div className="text-center">
        <br/>
        <div className="row container-fluid ">
        <h3  className="text-start col " style={{color:'#00F4FF'}}>Filter Countries </h3>
        <label className="col"><h5>All</h5>
          <input id="all" className="radioColor" type="radio" name="filter"/>
        </label>
        <label className="col"><h5>Africa</h5>
          <input  id="africa" className="radioColor" type="radio" name="filter"/>
        </label>
        <label className="col"><h5>Asia</h5>
          <input id="asia" className="radioColor"  type="radio" name="filter"/>
        </label>
        <label className="col"><h5>Americas</h5>
          <input id="americas" className="radioColor" type="radio" name="filter"/>
        </label>
        <label className="col"><h5>Europe</h5>
          <input id="europe" className="radioColor"  type="radio" name="filter"/>
        </label>
        <label className="col"><h5>Oceania</h5>
          <input id="oceania" className="radioColor"  type="radio" name="filter"/>
        </label>
        </div>
        <br/>
        <div id="search">
          {/* <button onClick={handleSearch} className="btn animated-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
            </svg>
            <span className="text">SEARCH</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
            </svg>
          </button> */}
        </div>
        <br/>
          <div className="container-fluid">
          <input id="input" value={inputValue} placeholder="e.g Kenya" onChange={handleChange} className="form-control"/>
        </div>
        <br/>
        <hr/>
        <div id="top-div">
          <a href="#top">
            <button className="top-btn">
              <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
              <p className="top-text">Back to Top</p>
            </button>
          </a>
        </div>
        <div className="results">
        {all &&  photos.map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}
        
        {africa &&  photos.filter((photo)=>photo.region.includes('Africa')).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}

        {asia &&  photos.filter((photo)=>photo.region.includes('Asia')).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}

        {americas &&  photos.filter((photo)=>photo.region.includes('Americas')).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}

        {europe &&  photos.filter((photo)=>photo.region.includes('Europe')).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}
        
        {oceania &&  photos.filter((photo)=>photo.region.includes('Oceania')).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}
        {photos.filter((photo)=>photo.name.includes(inputValue)).map((photo) => (
          <div>
                <div className="container-fluid">
                    <h3 id="countryName">{photo.name}</h3>
                    <img className="img-fluid" key={photo.id} src={photo.flags.png} alt={photo.title}  />
                    <br/>
                    <h5 className="text-start ">Capital City: {photo.capital}</h5>
                    <h5 className="text-start ">Country Code: {photo.callingCodes}</h5>
                    <h5 className="text-start ">Region: {photo.region}</h5>
                    <h5 className="text-start ">Population: {photo.population}</h5>
                    <h5 className="text-start text-success">{photo.independent===true &&<p>Independent</p>}</h5>
                    <h5 className="text-start text-danger">{photo.independent===false &&<p>Colonised</p>}</h5>
                    <hr/>
                </div>
                
          </div>
        ))}
        
        </div>
    
      <br/><br/>
      <br/><br/>
      </div>
    );
        }
