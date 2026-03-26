import '../css/TaskAdd.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'



const SingleTask = function( {name, category, handleDel, index} ){

    return <>

             <div className = 'mainContainer'>

            <div className = 'nameContainer'>
    
            <h5> {name} </h5>
            <img src="icons/trash-solid-full.svg" 
            alt="Trash Icon" 
            onClick = { () => handleDel(index)}
            />
            </div>
            
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