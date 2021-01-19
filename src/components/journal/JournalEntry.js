import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://enterados.pe/wp-content/uploads/2020/09/batman-day-2020.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>

                <p className="journal__entry-content">
                    Est proident cillum laborum laboris veniam quis enim nulla elit sunt cillum enim sunt.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>19</h4>
            </div>

        </div>
    )
}
