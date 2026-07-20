const items = [
  'Dies & Press Tools', 'Injection Moulds', 'FRP / GRP Fabrication',
  'CNC Precision Machining', 'Jigs & Fixtures', 'Sheet Metal Work',
  'Composite Structures', 'Reverse Engineering',
  'Automotive Super Structure Body Design & Manufacturing',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
