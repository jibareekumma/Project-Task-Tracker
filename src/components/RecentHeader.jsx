
import { Link } from 'react-router-dom'
import '../css/EntireTask.css'


const RecentHeader = function(){

    return<>
    <div className = 'RecentHeader'>
        <header className = 'headers'>
        <h5>Recent Task</h5>
        <Link className = 'seeAllBtn' to="/all-projects">See All</Link>
    </header>
    </div>
    </>
}

export default RecentHeader