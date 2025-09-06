import React from 'react';
const testimonials = [
  { name: "Amit", feedback: "Saved 70% after solar install!" },
  { name: "Rajesh", feedback: "Excellent support from BJRI." }
];
function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((t, i) => (
        <blockquote key={i}>
          <p>{t.feedback}</p>
          <footer>- {t.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}
export default Testimonials;
