import React from 'react'

function Stats() {
    return (
        <div className="stats stats-vertical shadow">
            <div className="stat">
                <div className="stat-title">Satin almalar</div>
                <div className="stat-value">1.349</div>
                <div className="stat-desc">Yeni sezon</div>
            </div>

            <div className="stat">
                <div className="stat-title">Toplam Yorumlar</div>
                <div className="stat-value">34</div>
                <div className="stat-desc">↗︎ 13 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">Toplam Puan</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↗︎ 340 (14%)</div>
            </div>

        </div>
    )
}

export default Stats