/*
Purpose

To show a history of submitted health data so patients can see trends over time.

Helps patients track progress, notice patterns, and manage their condition better.

What it entails

Cards or Table – display each entry:

Date/time of entry

Blood sugar value

Blood pressure value



*/ 
const HealthDataCard =({title,children}) =>{
    return (
        <div className="bg-white rounded-2xl shadow-sm mb-2"
        >
            <h3 className="text-left text-xs font-semibold mb-1 ">{title}</h3>
            {children}
            
        </div>
    )
}

export default HealthDataCard