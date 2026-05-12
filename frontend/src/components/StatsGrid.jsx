import React from 'react';

export default function StatsGrid({ stats }) {
  return (
    <section className="cards">
      {stats.map(item => (
        <div className="card" key={item.title}>
          <h3>{item.title}</h3>
          <strong>{item.value}</strong>
          <p>{item.note}</p>
        </div>
      ))}
    </section>
  );
}
