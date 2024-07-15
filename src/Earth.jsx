import logo from './assets/images/earth.png'

export default function Earth () {
    return(
        <div className='logo container-fluid text-center'>
            <img className='img-fluid' id='logo' src={logo}/>
            <div id='rot'></div>
        </div>

    )
}