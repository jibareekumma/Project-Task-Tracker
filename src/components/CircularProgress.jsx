

const CircularProgress = function( {percentage} ){

    const radius = 20
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) 
    * circumference


    return (
        <>
            <svg width="50" height="50" viewBox="0 0 50 50">
           

            <circle
                cx="25"
                cy="25"
                r={radius}
                fill="none"
                stroke="#e8e8f3"
                strokeWidth="4"
            />

        <circle

                cx="25"
                cy="25"
                r={radius}
                fill="blue"
                
                stroke="#1d1a2e"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{
                    transition: 'stroke-dashoffset 0.5s ease',
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center'
                }}
            />

            <text
                x="25"
                y="25"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12"
                fill="white"
                fontWeight="600"
                color="black"
            >
                {percentage}%
            </text>

        </svg>

        </>
    )}

export default CircularProgress 