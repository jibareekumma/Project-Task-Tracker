
import { Link } from 'react-router-dom'
import '../css/EntireTask.css'


const RecentHeader = function(){

    return<>
        <header className = 'headers'>
        <h5>Recent Task</h5>
        <Link className = 'seeAllBtn' to="/all-projects">See All</Link>
    </header>
    </>
}

export default RecentHeader