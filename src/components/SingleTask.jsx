import '../css/TaskAdd.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'



const SingleTask = function( {name, category} ){

    return <>

             <div className = 'mainContainer'>
    
            <h5> {name} </h5>
            
            <div>
            <div className = 'percentageSec'>
                
                    <h6> {category} </h6>
                    <p>0%</p>
                    
            </div>
            <img src = 'icons/dummy-loadingM.png' 
                 
            alt="" />
            </div>
        </div>
    </>
}

export default SingleTask